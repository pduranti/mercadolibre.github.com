---
layout: 2columns
title: Application Manager
categories: 
- SDKs 
- More Tools
menu: 
- Tools
tags: 
- More Tools
---

To create an _App_, you must use the [Application Manager](http://applications.mercadolibre.com). **You need to choose your country to create a new one**. 

If your APP will list properties **only on behalf your signed up user**, then complete the fields in the form, checking both "read" and "write" scopes and click on the "Create application" button (you can complete the "Callback URL" with any data, it won't be used). However, **if you want your APP to list properties on behalf other MELI's signed up users**, then at this step you must complete the fields in the form, checking the "read", "write" and "offline_access" scopes, and in the Callback URL will have to be completed with a URL to which users will be redirected right after granting permissions to your APP, explained further ahead in the [Authenticate section](/authentication-and-authorization).


<center>
	<br /><br />
	<img src="/images/application-detail.png" style="box-shadow:0px 0px 30px 10px gray;" />
	<br /><br />
</center>



## Application Data

There are three groups of information in this form: Basic application info, Authentication &amp; Security and Notification Settings.


###Basic Application Info


**- ID: ** This is your `client_id`. It must be used to retrieve an access token. 

**- Secret Key: ** This is used to retrieve an access token too. Don't share this secret with anyone.

**- Name: ** Name of your application. It must be unique.

**- Shortname: ** Name that Meli uses to generate your application's URL. 

**- Description: ** This description, up to 150 characteres will be showed when application request authorization. 


###Authentication &amp; Security 


**- Callback URL: Redirect URI. ** URL to return users to your app after they grant access. 

**- Domains: ** Authorized Javascript Origins. Comma separated list of fully-qualified domain name of all pages that will use the client-side authentication. Only needed if using Javascript API. Don't include protocol or port.


**- Scopes: ** <br />
&nbsp;&nbsp;&nbsp;&nbsp;***Read:*** Allow to use API GET HTTP methods. <br />
&nbsp;&nbsp;&nbsp;&nbsp;***Write:*** Allow to use API PUT, POST and DELETE HTTP methods. <br />
&nbsp;&nbsp;&nbsp;&nbsp;***Offline Access:*** Allow to make request server side and refresh token. <br />

###Special notes about offline-access

Some applications interacts with MELI APIs just while the user is online, but other apps may do so without the need of the user being online. In those cases the app needs to request offline-access scope. This special permission allows the app to keep an active token even if the user is not logged at MELI in that moment. If you request this permission you will get an extra field in the access token (only in server-side flow). That field is de refresh-token that allows the app to get a new valid token when the previous one is expired.

###Notification Settings


**- Notifications callback URL: ** Configure the public URL of your domain where you want to receive notifications for the different topics. 

**- Topics: ** Comma separated list of ‘topics’ you want to subscribe to. There are three possible topics: orders, items, questions.
