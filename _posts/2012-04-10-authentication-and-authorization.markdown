---
layout: 2columns
title: Authentication & Authorization
categories: tutorials popular
tags: home
---

#Authentication & Authorization

Authentication gives your app the ability to know the identity of a MELI user, and to read and write data via MELI's APIs. The platform uses [OAuth 2.0](http://tools.ietf.org/pdf/draft-ietf-oauth-v2-12.pdf) for authentication and authorization.  
A successful authentication flow results in your application obtaining a user access token which can be used to make requests to MELI's APIs. 

### Table of Contents
- [Access token validity](#token-validity)
- [Steps obtaining an access token](#steps-obtaining-token)
- [Scenarios](#scenarios)
- [Web Server Applications](#webserver-applications)
- [Refresh your token](#token-refresh)
- [Client-side Applications](#client-side-flow)
- [Error Codes Reference](#error-codes)


##Access Token Validity & Expiration {#token-validity}

When you obtain an access token, it will be valid immediately and usable in requests to the API for some time period. After that period has elapsed, the access token is considered to have expired and the user will need to be authenticated again in order for your app to obtain a fresh access token. The duration for which a given access token is valid depends on how it was generated.

There are also events which may cause an access token to become invalid before its expected expiry time. Such events include the user changing their password, an application refreshing it's App Secret. Dealing with varying access token expiry times, and handling the case when an access token becomes invalid before its expected expiry time is essential for building a robust application.


## Steps obtaining an access token {#steps-obtaining-token}
At a high level the OAuth 2.0 protocol involves three different steps: User Authentication (login), Application Authorization and Application Authentication.

- **1. User Authentication:** ensure that the user is who he says he is. It is performed redirecting the user to MercadoLibre login URL.
- **2. Application Authorization:** After login the user will see a page with exactly what data and capabilities is willing to grant your application permissions.
In the OAuth protocol this is called "user consent".
- **3. Application Authentication:** If the users agrees to grant your app those permissions, your application will be sent directly an access token or an authorization code (which later is used to obtain an access token).
If the user does not grant permission, MercadoLibre OAuth API returns an error.


	Once your application is issued an access token, it can use it in a request to MercadoLibre APIs to request data that belongs to the user or take an action on his behalf.

## Different Scenarios {#scenarios}
The MELI API supports two different authentication flows: server-side and client-side.

The server-side flow is used whenever you need to call the API from a Webserver Application and even access the API on behalf of the user when he is not in front of the browser. This is called offline access.

If you want to interact with the API from a desktop or mobile application you should use the client-side flow.



## Web Server Applications {#webserver-applications}
User authentication and app authorization are handled at the same time by redirecting the user to our OAuth Dialog. As a result of the authorization, your application receives an authorization code (as opposed to directly delivering an access token).

This authorization code can be exchanged later for an access token and a refresh token.

<h3>Overview</h3>
![oauth-server-side](/images/ML-oauth-server-side.png)


If a refresh token is present in the authorization code exchange, then it may be used to obtain new access tokens at any time. 
This type of access to the API is called **offline**, since the user does not have to be present at the browser when the application obtains a new access token.

 
When invoking this dialog, you must pass your client id that is generated when you create your application in our [Applications Portal](http://applications.mercadolibre.com) (the client_id parameter) and the URL that the user's browser will be redirected to once app authorization is completed (the redirect_uri parameter).

<h3>Step 1: Obtain a code</h3>

Make a GET request to this URL:   
<pre>
https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=Client_id&redirect_uri=REDIRECT_URL
</pre>

<h4>Parameters</h4>
<ul class="ch-list parameters">                                                                         
  <li>
    <code>response_type</code>: <em class="string">code</em> — Indicates that the desired operation is to obtain an authentication code.
  </li>
  <li>
    <code>client_id</code>: The client ID assigned to your app when created.
  </li>
  <li>
    <code>redirect_uri</code>: <em class="string">URL</em> — Optional. The callback URL configured for your app, or one of the allowed domains.
  </li>
</ul>



When the user is succesfully logged in a cookie will be stored on the user's computer. If the OAuth dialog is requested for a second time the dialog will not be shown but instead the cookie will be validated. When the dialog is shown the user is prompted to enter his credentials:

![Login page](/images/login_auth.png)


Once the user is authenticated succesfully an authorization dialog will be shown in which the user has to confirm that he grants your application the requested data permission. When submitting this dialog the user authenticates your app.

If the user grants your application the requested data permission the OAuth Dialog will redirect the user's browser to the URL you specified in the redirect_url together with an authorization code. This redirect uses the HTTP 302 status code. The URL will look like this:

	http://YOUR_URL?code=SERVER_GENERATED_AUTHORIZATION_CODE
	
<h3>Step 2: Exchange the code for a token</h3>

Using this code you can perform the next step: app authentication. After your application has been authenticated you will receive an access code which you can use when making calls to the API. The authorization code can only be exchanged once for an access token.

The app secret can be viewed when you log in to our [Applications Portal](http://applications.mercadolibre.com), you should never share your application secret with anyone. 

To authenticate your app and get a token make a *POST* to the following URL:

<pre>
https://api.mercadolibre.com/oauth/token?grant_type=authorization_code&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&code=SECRET_CODE&redirect_uri=$APP_CALLBACK_URL
</pre>

<h4>Parameters</h4>
<ul class="ch-list parameters">										
  <li>
    <code>grant_type</code>: <em class="string">authorization_code</em> — Indicates that the desired operation is to exchange the code for an access token.
  </li>
  <li>
    <code>client_id</code>: The client ID assigned to your app when created.
  </li>
  <li>
    <code>client_secret</code>: <em class="string">hash</em> — The secret generated to your app when created.
  </li>
  <li>
    <code>code</code>: The authorization code obtain in the first step.
  </li>
  <li>
    <code>redirect_uri</code>: <em class="string">URL</em> — The callback URL configured for your app, or one of the allowed domains.
  </li>											
</ul>

	
If your app is succesfully authenticated and the authorization code from the user is valid, the authorization server will return the access token. An example JSON response is:

{% highlight javascript %}

{
   "access_token" : "APP_USR-6092-3246532-cb45c82853f6e620bb0deda096b128d3-8035443",
   "token_type" : "bearer",
   "expires_in" : 10800,
   "scope" : "write read"
}
{% endhighlight %}

Besides the access token, the response also contains the time in seconds the access token expires (the expires_in parameter) and the scope given to the application on the applications creation details.


## Refresh your access token (optional) {#token-refresh}
Access tokens have an expiration time. Typically a webserver application will need to access MercadoLibre APIs at any time. This is called offline_access because the user does not have to be present at the browser when the application obtains a new access token.

**How to obtain a refresh token?**

After the consumer has been authorized for access, they can obtain a refresh token. The refresh token can be used to get a new access token once it has expired. This is only done after the consumer already has received an access token using either the Web server or user-agent flow.
This becomes necessary when an access token is no longer valid and when you need to make it valid again.

When you register your application in the [Applications Portal](http://applications.mercadolibre.com) you need to give offline_access for this purpose.

If you set it up this way, every time your webserver exchanges a code for an access_token it will also receive a refresh token.

{% highlight javascript %}
{
   "access_token" : "APP_USR-6092-3246532-cb45c82853f6e620bb0deda096b128d3-8035443",
   "token_type" : "bearer",
   "expires_in" : 10800,
   "refresh_token" : "TG-1025633383c1a2f67323423423b05213abb",
   "scope" : "write read offline_access"
}
{% endhighlight %}


Your application will need to save this refresh token along with the access token, as they work in pairs.
Once the access token expires a consumer can use the refresh token to refresh that token and get a new *refresh_token* to refresh it again when it expires. 

The consumer should make POST request to the token endpoint, with the following parameters:    


<h4>URL to POST</h4>
<pre>
  https://api.mercadolibre.com/oauth/token?grant_type=refresh_token&client_id=&client_secret=&refresh_token=
</pre>


<h4>Parameters</h4>
<ul class="ch-list parameters">
  <li>
  <code>grant_type</code>: <em class="string">refresh_token</em>  — Indicates the desired operation is to refresh a token.
  </li>
  <li>
  <code>refresh_token</code>: The refresh token from the approval step.
  </li>
  <li>
  <code>client_id</code> The client ID of your application.
  </li>
  <li>
  <code>client_secret</code> The secret from the remote access application definition.
  </li>
</ul>
  

	
<h4>Response</h4>	

The response includes the original access_token validated for 3 more hours and a new refresh token:
{% highlight javascript %}
{
   "access_token" : "APP_USR-6092-3246532-cb45c82853f6e620bb0deda096b128d3-8035443",
   "token_type" : "bearer",
   "expires_in" : 10800,
   "refresh_token" : "TG-5005b6b3e4b07e60756a3353",
   "scope" : "write read offline_access"
}
{% endhighlight %}


## Client-side Applications authentication {#client-side-flow}
This flow is suitable for clients incapable of maintaining their client credentials confidential (for authenticating with the authorization server) such as client applications residing in a user-agent, typically implemented in a browser using a scripting language such as JavaScript, or native applications.

These clients cannot keep client secrets confidential and the authentication of the client is based on the user-agent’s same-origin policy.
As a redirection-based profile, the client must be capable of interacting with the resource owner’s user-agent (typically a web
browser) and capable of receiving incoming requests (via redirection) from the authorization server.

Unlike the authorization code flow in which the client makes separate requests for authorization and access token, the client receives the access token as the result of the authorization request.

If you are going to choose this alternative, we strongly suggest you use the [Javascript SDK](http://developers.mercadolibre.com/javascript-sdk/). This SDK hides for you all the complexity of the OAuth protocol and it will save you lots of time.



**Client-side flow Overview**

The main difference is that when the users grants your application with permission, MercadoLibre will give your application an access token (not a code).

You don't need to pass your redirect URL. Just make a GET request to this URL:

<pre>https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=Client_id</pre>

If your app is succesfully authenticated and the user grants permission (consent), the authorization server will redirect to your applications callback URL with an access token in the query string response like this:

<pre>http://YOUR_URL#access_token=APP_USR-6092-3246532-cb45c82853f6e620bb0deda096b128d3-8035443&expires_in=10800&user_id=USER_ID&domains=APP_DOMAINS</pre>

**CONSIDERATIONS**

Keep in mind that using this flow you will not be able to obtain a refresh token. 
Once the token expires, you will need to the redirect the user to the authorization URL again to obtain a full new access token.




##Error Codes Reference {#error-codes}

<table class="datagrid">
<tbody>
  <tr><th>Error_code</th><th>Error message</th><th>Description</th></tr>
  <tr><td>invalid_client</td><td>client_id [] o client_secret [] inválidos</td><td>The client identifier provided is invalid.</td></tr>
  <tr><td>invalid_grant</td><td>Error validando el parámetro code.</td><td>The provided authorization grant is invalid, expired, revoked, or does not match the redirection URI used in the authorization request.</td></tr>
  <tr><td>invalid_grant</td><td>Error validando las credenciales con el Usuario:{0} Password:{1}</td><td>The provided authorization grant is invalid.</td></tr>
  <tr><td>invalid_grant</td><td>No se puede generar un token sin scope offline_access, el usuario {0} no tiene una sesion activa</td><td>The provided authorization grant is invalid, expired, revoked, or does not match the redirection URI used in the authorization request.</td></tr>
  <tr><td>invalid_grant</td><td>Error generando el access token al usuario {0} para la aplicación {1} y scopes {2}</td><td>The provided authorization grant is invalid, expired, revoked, or does not match the redirection URI used in the authorization request.</td></tr>
  <tr><td>invalid_client</td><td>.</td><td>The client identifier provided is invalid.</td></tr>
  <tr><td>invalid_scope</td><td>.</td><td>The requested scope is invalid, unknown, or malformed.</td></tr>
  <tr><td>unauthorized_client</td><td>.</td><td>The client is not authorized to request an authorization code using this method.</td></tr>
  <tr><td>invalid_request</td><td>.</td><td>The request is missing a required parameter, includes an unsupported parameter or parameter value, or is otherwise malformed.</td></tr>
  <tr><td>unsupported_grant_type</td><td>.</td><td>The authorization grant type is not supported by the authorization server.</td></tr>
</tbody>
</table>
