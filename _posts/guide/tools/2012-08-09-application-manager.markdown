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

Both this attributes are further explained in the [Authentication and authorization guide](/authentication-and-authorization).


**- Scopes: ** <br />
&nbsp;&nbsp;&nbsp;&nbsp;***Read:*** Allow to use API GET HTTP methods. <br />
&nbsp;&nbsp;&nbsp;&nbsp;***Write:*** Allow to use API PUT, POST and DELETE HTTP methods. <br />
&nbsp;&nbsp;&nbsp;&nbsp;***Offline Access:*** Allow to make request server side and refresh token. <br />

###Some comments about scopes

There are several types of applications but We will divide them in three groups to explain the required scopes.

**- Read-Only apps:** an application that let an anonymous or authenticated user to get information from MELI in a customized way. In this case an anonymous user might search for items, look at descriptions, etc, and an authenticated user may look at personal information. If no modification is done to the data on MELI (no user information update, no item listing, no item buying) you just need **read** scope. Note that any attempt to modify data through MELI APIs would get an error.

**- Read/Write online apps:** this kind of apps may let an anonymous user do some read-only operations on MELI but also allow an authenticated user to modify data, list new items (sell), post orders (buy), and so on. In this cases the application requires **write** scope so the user can grant write permissions to de app to act on his behalf. The application will be able to modify data on behalf of the user while the access token remains valid. Once it expired it needs the user to renew the token to regain access.

**- Read/Write offline apps:** if your app needs to act on behalf of the user even when the user is offline then it needs to require offline-access permission from the user. By requesting this scope, on user acceptance the app will have not only the access token to act on behalf of the user, but also a refresh token that can be used to get a new valid access token once the previous one expires.


###Notification Settings


**- Notifications callback URL: ** Configure the public URL of your domain where you want to receive notifications for the different topics. 

**- Topics: ** Comma separated list of ‘topics’ you want to subscribe to. There are three possible topics: orders, items, questions.
