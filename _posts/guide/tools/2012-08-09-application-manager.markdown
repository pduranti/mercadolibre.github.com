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

There are three groups of information in this form: Basic application Info, Authentication &amp; Security and Notification Settings.


###Basic Application Info


**- ID: ** This is your `client_id`. It must be used to retrieve an access token. 

**- Secret Key: ** This is used to retrieve an access token too. Don't share this secret with anyone.

**- Name: ** Name of your application. It must be unique.

**- Short Name: ** Name that Meli uses to generate your application's URL. 

**- Description: ** This description, up to 150 characteres will be showed when application request authorization. 


###Authentication &amp; Security 


**- Callback URL: Redirect URI. ** URL to return users to your app after they grant access. 

**- Domains: ** Authorized Javascript Origins. Comma-separated list of fully-qualified domain name of all pages that will use the client-side authentication. Only needed if using Javascript API. Don't include protocol or port.

Both these attributes are further explained in the [Authentication and authorization guide](/authentication-and-authorization).


**- Scopes: ** <br />
&nbsp;&nbsp;&nbsp;&nbsp;***Read:*** Allows to use API GET HTTP methods. <br />
&nbsp;&nbsp;&nbsp;&nbsp;***Write:*** Allows to use API PUT, POST and DELETE HTTP methods. <br />
&nbsp;&nbsp;&nbsp;&nbsp;***Offline Access:*** Allows to make request server side and refresh token. <br />

###Some comments about scopes

There are several types of applications. However we will divide them in three groups to explain the required scopes.

**- Read-Only apps:**  An application that allows an anonymous or authenticated user to get customized information from MELI. In this case an anonymous user might search for items, look at descriptions, etc, and an authenticated user may look at personal information. If no modification is made to the data on MELI (no user information update, no item listing, no item buying) ,all you need is a **read** scope. Note that any attempt to modify data through MELI APIs would get an error.

**- Read/Write online apps:** This kind of app allows an anonymous user to carry out certain read-only operations on MELI, as well as an authenticated user to modify data, list new items (sell), post orders (buy), and so on. In this case the application requires a **write** scope so that the user can grant write permissions for the app to act on his behalf. The application will be able to modify data on behalf of the user while the access token remains valid. Once it has expired, the user needs to renew the token to regain access.

**- Read/Write offline apps:** If your app needs to act on behalf of the user even when the user is offline,it wil require offline-access permission by the user. By requesting this scope, upon acceptance by the user, the app will have both the access token to act on behalf of the user and a refresh token to get a new valid access token once the previous one has expired.


###Notification Settings


**- Notifications callback URL: ** Configure the public URL of your domain where you want to receive the notifications on the different topics. 

**- Topics: ** Comma-separated list of ‘topics’ you want to subscribe to. There are three possible topics: orders, items, questions.
