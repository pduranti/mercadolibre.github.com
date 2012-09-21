---
layout: firststep
title: Authentication &amp; Authorization
categories: 
- Authentication
menu:
- Authentication
tags: 
- Authentication
---

## Overview {#overview}

MercadoLibre platform lets you access different resources through API calls. As you already know there are some public resources that can be accessed anonymously (such as product search) and other resources that require some kind of authentication (user data, payments, modify your selling products).

To handle the authentication throughout the platform We use [OAuth 2.0](http://tools.ietf.org/pdf/draft-ietf-oauth-v2-12.pdf) protocol. This is a standard, secure yet simple protocol that covers most use cases you should encounter interacting with MercadoLibre APIs. 

We will explain shortly how to use [OAuth 2.0](http://tools.ietf.org/pdf/draft-ietf-oauth-v2-12.pdf) authentication in some simple cases and you can read further in the following sections.

<div class="contents">
<h5>Table of Contents</h5>
<dl>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('should-i')">Should I read all this?</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('basic-concepts')">Basic concepts</a></dt>
  <dt><a href="javascript:voId(0)" onclick="goToByScroll('tokens-explained')">What is a token? Why do I need one? </a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('getting-a-token')">How do I get that token? </a></dt>
  <dt><a href="javascript:void(0)" onclick="goToByScroll('client-side-brief')">Client-side flow </a></dt>
  <dt><a href="javascript:void(0)" onclick="goToByScroll('server-side-brief')">Server-side flow </a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('sdks')">Existing SDKs </a></dt>
  <dt><a href="javascript:void(0)" onclick="goToByScroll('notes')">Some notes about tokens </a></dt>
  <dt><a href="javascript:void(0)" onclick="goToByScroll('scenarios')"> Different Scenarios </a></dt>
  <dt><a href="javascript:void(0)" onclick="goToByScroll('client-side-flow')"> Client-side Applications authentication </a></dt>
  <dt><a hrrf="javascript:void(0)" onclick="goToByScroll('error-codes')">Error Codes Reference </a></dt>

</dl>
</div>

##Should I read all this {#should-i}

We definitely think you **should**. It is always good to know what is happenning behind when you use a sdk/framework but at the same time We **encourage** you to use our provided <a href="javascript:void(0)" onClick="goToByScroll('sdks')">SDKs</a> to connect and "talk" to the APIs.

These <a href="javascript:void(0)" onClick="goToByScroll('sdks')">SDKs</a> implement the OAuth protocol and on one hand leverages you from coding everything again and on the other hand every security issue or bug discovered can be fixed on a centralized place. If you think that there should be any enhancements please feel free to contribute to these <a href="javascript:void(0)" onClick="goToByScroll('sdks')">SDKs</a>. It is a win-win situation.

**Note**: We covered the server-side flows in PHP, Java and .NET, and client-side flows in javascript. If you plan to develop in other programming languages or for mobile you will have to code the OAuth flows by yourselves or contribute with an SDK to be used by all of us.

##Basic concepts {#basic-concepts}

The basic idea behind OAuth protocol is that you need a token to make a secure call to an API, and the rest of this guide will explain why is this needed and how to obtain that token whether you are working with client-side or server-side scripting. 

##What is a token? Why do I need one? {#tokens-explained}
  
A token is an encrypted string that represents the user credentials. If you have a valid token our servers can know which application is making the call, on behalf of which user, and with which permissions, being sure that all af this was authorized by the user. 

<div class="ch-box">
  <div id="tokens">
        <p><strong>More about authentication and Authorization</strong></p>
        <div>
          <p>At a high level the OAuth 2.0 protocol involves three different steps: User Authentication (login), Application Authorization and Application Authentication.</p>

          <p><strong>1. User Authentication:</strong> ensure that the user is who he says he is. It is performed redirecting the user to MercadoLibre login URL.</p>
          <img src="/images/login_auth.png"/>
          <p><strong>2. Application Authorization:</strong> After login the user will see a page with exactly what data and capabilities is willing to grant your application permissions.<br>
            In the OAuth protocol this is called "user consent".</p>
          <img src="/images/authorization.png"/>
          <p><strong>3. Application Authentication:</strong> If the users agrees to grant your app those permissions, your application will be sent directly an access token or an authorization code (which later is used to obtain an access token).<br>
            If the user does not grant permission, MercadoLibre OAuth API returns an error.</p>

            <p>Once your application is issued an access token, it can use it in a request to MercadoLibre APIs to request data that belongs to the user or take an action on his behalf.</p>

  </div>
  </div>
</div>

##How do I get that token? {#getting-a-token}

There are two main flows to obtain an access token:
<ul class="ch-list">
  <li>
  <a href="javascript:void(0)" onClick="goToByScroll('client-side-brief')"><b>Client side</b> flow</a>
  </li>
  <li>
  <a href="javascript:void(0)" onClick="goToByScroll('server-side-brief')"><b>Server side</b> flow</a>
  </li>
</ul>


  
##Client-side flow {#client-side-brief}

**Note:** This will briefly explain the authentication/authorization flow but We **strongly** encourage you to use our provided SDKs instead of coding it by yourself since a bug in this process can lead to serious security problems.

The client side flow is better suited for applications that uses client-side(doh) queries (javascript/ajax) to private resources in MELI's APIs. The basic steps in client-side oauth authentication are:
<ul class="ch-list">
  <li>Your site should redirect the user to the MercadoLibre login page with the needed parameters</li>
  <li>MercadoLibre will handle the user login</li>
  <li>if the user is correctly identified then he/she will be redirected to the app authorization page where will be presented all the permissions your app requests</li> 
  <li>If the user grants the permissions he will be redirected to the authorization callback URL you configured in your application with the corresponding access token in the hashtag like this one (url-decoded for easy reading) 
    <pre>http://your_domain.com/#{"client_id":your_app_id,"state":"AUTHORIZED","authorization_info":{"access_token":"the_access_token","expires_in":10800,"user_id":ml_user_id,"scopes":["offline_access","write","read"]},"domains":[domains]}</pre>
  </li>
</ul>

After you get the access token you can make calls to the APIs with it to gain access to private data such as user details.
<pre> https://api.mercadolibre.com/users/me?access_token=...</pre>


<div class="ch-box">
  <div id="clientSideLarge">
    <p><strong>Client-side flow explained</strong></p>
      <div>
        <p>This flow is suitable for clients incapable of maintaining their client credentials confidential (for authenticating with the authorization server) such as client applications residing in a user-agent, typically implemented in a browser using a scripting language such as JavaScript, or native applications.</p>

        <p>These clients cannot keep client secrets confidential and the authentication of the client is based on the user-agent’s same-origin policy. As a redirection-based profile, the client must be capable of interacting with the resource owner’s user-agent (typically a webbrowser) and capable of receiving incoming requests (via redirection) from the authorization server. </p>

        <p>Unlike the authorization code flow in which the client makes separate requests for authorization and access token, the client receives the access token as the result of the authorization request.</p>

        <p>If you are going to choose this alternative, we strongly suggest you use the <a href="/javascript-sdk/">Javascript SDK</a> This SDK hides for you all the complexity of the OAuth protocol and it will save you lots of time.</p>

        <h4><strong>Client-side flow Overview</strong></h4>
        <p/>
        <p>The main difference is that when the users grants your application with permission, MercadoLibre will give your application an access token (not a code).</p>

        <p>You don't need to pass your redirect URL. Just make a GET request to this URL:</p>

        <pre>https://auth.mercadolibre.com.ar/authorization?response_type=token&amp;client_id=Client_id</pre>

        <p>If your app is succesfully authenticated and the user grants permission (consent), the authorization server will redirect to your applications callback URL with an access token in the query string response like this:</p>

        <pre>http://YOUR_URL#access_token=APP_USR-6092-3246532-cb45c82853f6e620bb0deda096b128d3-8035443&amp;expires_in=10800&amp;user_id=USER_ID&amp;domains=APP_DOMAINS</pre>

        <h4><strong>CONSIDERATIONS</strong></h4>
        <p/>
        <p>Keep in mind that using this flow you will not be able to obtain a refresh token. Once the token expires, you will need to the redirect the user to the authorization URL again to obtain a full new access token. </p>

  </div>
  </div>
</div>

##Server-side flow {#server-side-brief}

**Note:** This will briefly explain the authentication/authorization flow but We **strongly** encourage you to use our provided SDKs instead of coding it by yourself since a bug in this process can lead to serious security problems.

If want to use the access token from your server for off-line processing you should implement the server side flow (do not use a client-side-generated token for server side application, **see notes below**)

In this case the first steps of the flow are the same, but when the user grants the permissions to your application  he will be redirected to the url specified when you registered your application with an access_code parameter 
<pre>http://your_url?access_code=...</pre> 
Here you must exchange this code for an access token issuing a POST request to...
<pre>https://api.mercadolibre.com/oauth/token?grant_type=authorization_code&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&code=SECRET_CODE&redirect_uri=$APP_CALLBACK_URL</pre>
...where you will receive in the response the access token, the expiration time and a refresh token (if you requested offline-access permissions) that you will use to get a new token when the actual token is expired. (all this happens in server side)


<div class="ch-box">
  <div id="serverSideLarge">
    <p><strong>Server-side flow explained</strong></p>
      <div>
        <p>User authentication and app authorization are handled at the same time by redirecting the user to our OAuth Dialog. As a result of the authorization, your application receives an authorization code (as opposed to directly delivering an access token).</p>
        <p>This authorization code can be exchanged later for an access token and a refresh token.</p>

        <h3>Overview</h3> 
        
        <p>If a refresh token is present in the authorization code exchange, then it may be used to obtain new access tokens at any time. This type of access is called **offline**, since the user does not have to be present at the browser when the application obtains a new access token. The details regarding offline-access permission are explained in <a href="/application-manager">the Application Manager guide</a></p>

        <p>When invoking this dialog, you must pass your client id that is generated when you create your application in our [Applications Portal](http://applications.mercadolibre.com/) (the client_id parameter) and the URL that the user's browser will be redirected to once app authorization is completed (the redirect_uri parameter).</p>

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

        <p>When the user is succesfully logged in a cookie will be stored on the user's computer. If the OAuth dialog is requested for a second time the dialog will not be shown but instead the cookie will be validated. When the dialog is shown the user is prompted to enter his credentials:</p>

        <img src="/images/login_auth.png"/>

        <p>Once the user is authenticated succesfully an authorization dialog will be shown in which the user has to confirm that he grants your application the requested data permission. When submitting this dialog the user authenticates your app.</p>

        <p>If the user grants your application the requested data permission the OAuth Dialog will redirect the user's browser to the URL you specified in the redirect_url together with an authorization code. This redirect uses the HTTP 302 status code. The URL will look like this:</p>

        <pre>http://YOUR_URL?code=SERVER_GENERATED_AUTHORIZATION_CODE</pre>
  
        <h3>Step 2: Exchange the code for a token</h3>

        <p>Using this code you can perform the next step: app authentication. After your application has been authenticated you will receive an access code which you can use when making calls to the API. The authorization code can only be exchanged once for an access token.</p>

        <p>The app secret can be viewed when you log in to our <a href="http://applications.mercadolibre.com">Applications Portal</a>, you should never share your application secret with anyone. </p>

        <p>To authenticate your app and get a token make a *POST* to the following URL:</p>

        <pre>
        https://api.mercadolibre.com/oauth/token?grant_type=authorization_code&amp;client_id=CLIENT_ID&amp;client_secret=CLIENT_SECRET&amp;code=SECRET_CODE&amp;redirect_uri=$APP_CALLBACK_URL
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

        <p>If your app is succesfully authenticated and the authorization code from the user is valid, the authorization server will return the access token. An example JSON response is:</p>

        {% highlight javascript %}

        {
           "access_token" : "APP_USR-6092-3246532-cb45c82853f6e620bb0deda096b128d3-8035443",
           "token_type" : "bearer",
           "expires_in" : 10800,
           "scope" : "write read"
        }
        {% endhighlight %}

        <p>Besides the access token, the response also contains the time in seconds the access token expires (the expires_in parameter) and the scope given to the application on the applications creation details.</p>


        <h2>Refresh your access token (optional) </h2>

        <p>Access tokens have an expiration time. Typically a webserver application will need to access MercadoLibre APIs at any time. This is called offline_access because the user does not have to be present at the browser when the application obtains a new access token.</p>

        <h3>How to obtain a refresh token?</h3>

        <p>After the consumer has been authorized for access, they can obtain a refresh token. The refresh token can be used to get a new access token once it has expired. This is only done after the consumer already has received an access token using either the Web server or user-agent flow.</p>

        <p>This becomes necessary when an access token is no longer valid and when you need to make it valid again.</p>

        <p>When you register your application in the [Applications Portal](http://applications.mercadolibre.com) you need to give offline_access for this purpose.</p>

        <p>If you set it up this way, every time your webserver exchanges a code for an access_token it will also receive a refresh token.</p>

        {% highlight javascript %}
        {
           "access_token" : "APP_USR-6092-3246532-cb45c82853f6e620bb0deda096b128d3-8035443",
           "token_type" : "bearer",
           "expires_in" : 10800,
           "refresh_token" : "TG-1025633383c1a2f67323423423b05213abb",
           "scope" : "write read offline_access"
        }
        {% endhighlight %}


        <p>Your application will need to save this refresh token along with the access token, as they work in pairs.</p>
        <p>Once the access token expires a consumer can use the refresh token to refresh that token and get a new *refresh_token* to refresh it again when it expires. </p>

        <p>The consumer should make POST request to the token endpoint, with the following parameters:    </p>


        <h4>URL to POST</h4>
        <pre>
          https://api.mercadolibre.com/oauth/token?grant_type=refresh_token&amp;client_id=&amp;client_secret=&amp;refresh_token=
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

    </div>
  </div>
</div>
  
##Existing SDKs {#sdks}

We already provide SDKs for 

<ul class="ch-list">
  <li><a href="/java-sdk/">Java</a></li>
  <li><a href="/net-sdk/">.NET</a></li>
  <li><a href="/php-sdk/">PHP</a></li>
  <li><a href="/javascript-sdk/">Javascript (client-side)</a></li>
</ul>
  
All of them implement OAuth flows and you are free to add new functions. Just <a href="https://github.com/mercadolibre/mercadolibre.github.com">fork repo on GitHub</a>


##Some notes about tokens {#notes}

<h4><strong>Token validity and expiration</strong></h4>

When you obtain an access token, it will be valid immediately and usable in requests to the API for a limited period. After that period has elapsed, the access token is considered to have expired and the user will need to be authenticated again in order for your app to obtain a fresh access token. The duration for which a given access token is valid depends on how it was generated.

There are also events which may cause an access token to become invalid before its expected expiry time. Such events include the user changing their password, an application refreshing it's App Secret and of course when the user revokes permissions to your app. Dealing with varying access token expiry times, and handling the case when an access token becomes invalid before its expected expiration time is essential for building a robust application.

If the user provided you offline access then by using server-side authentication flow you will have a refresh token. This extra token can be used to refresh an expired token (not a token invalidated from other methods). By issuing a POST call to 

<pre>https://api.mercadolibre.com/oauth/token?grant_type=refresh_token&client_id=&client_secret=&refresh_token=</pre>
you will get a new access_token and also a new refresh token. Note that a refresh token can be used only once. 

##Error Codes Reference {#error-codes}

<table class="datagrid">
<tbody>
  <tr><th>Error_code</th><th>Error message</th><th>Description</th></tr>
  <tr><td>invalid_client</td><td>Error getting client information for client_id: ${0}</td><td>Unknown user.</td></tr>
  <tr><td>invalid_client</td><td>invalid client_id : {0}</td><td>The client identifier provided is invalid.</td></tr>
  <tr><td>invalid_client</td><td>invalid client_id[{0}] or client_secret[{1}]</td><td>Invalid client_id or client_secret provided.</td></tr>
  <tr><td>invalid_grant</td><td>To create an access token the user {0} must have an active session, or your application should request authorization for offline_access scope.</td><td>The provided authorization grant is invalid, expired, revoked, or does not match the redirection URI used in the authorization request.</td></tr>
  <tr><td>invalid_grant</td><td>Error validating user credentials, user:{0}, password:{1}</td><td>Invalid crdentials.</td></tr>
  <tr><td>invalid_grant</td><td>Error validating grant. Your authorization code or refresh token may be expired or it was already used.</td><td>Error validating the existing grant, it has expired or it was already used</td></tr>
  <tr><td>invalid_grant</td><td>The client_id does not match the original</td><td>Client id does not match</td></tr>
  <tr><td>invalid_grant</td><td>The redirect_uri does not match the original</td><td>Redirect URI does not match the original</td></tr>
  <tr><td>invalid_scope</td><td>Invalid scope.</td><td>The requested scope is invalid, unknown, or malformed.</td></tr>
  <tr><td>invalid_request</td><td>Wrong number of parameters with duplicate values.</td><td>The reques  is missing a required parameter, includes an unsupported parameter or parameter value, or is otherwise malformed.</td></tr>
  <tr><td>unsupported_grant_type</td><td>Unsupported grant type: ${0}.</td><td>The authorization grant type is not supported by the authorization server.</td></tr>
</tbody>
</table>

<script type="text/javascript">

window.onload = function() { startDrawing(); }
  
function startDrawing(){
  $("#tokens").expando();
  $("#clientSideLarge").expando();
  $("#serverSideLarge").expando();

}
</script>
