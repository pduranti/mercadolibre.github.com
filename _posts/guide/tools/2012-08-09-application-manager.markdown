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

To create an _application_ for MELI, you must use the [Application Manager](http://applications.mercadolibre.com). **You need to choose your country to create a new one**.

<center>
	<br /><br />
	<img src="/images/application-detail.png" style="box-shadow:0px 0px 30px 10px gray;" />
	<br /><br />
</center>


## Application Data

There are three groups of information in this form: Basic application info, Authentication &amp; Security and Notification Settings.


###Basic Application Info

**- ID: ** This is your `client_id`. It must be used to retrieve an access token. 

**- Secret Key: ** This is used too to retrieve your Don't share this secret with anyone.

**- Name: ** Name of your application. It must be unique on the Site.

**- Shortname: ** Name tha Meli uses to generate your application's URL. 

**- Description: ** This description, up to 150 characteres will be showed when application request authorization. 


###Authentication &amp; Security 

**- Callback URL: Redirect URI. ** URL to return users to your app after they grant access. Only used if you do not pass in a redirect URL when you send the user to grant access.

**- Domains: ** Authorized Javascript Origins. 
Comma separated list of fully-qualified domain name of all pages that will call the JavaScript API. Only needed if using Javascript API. Must include protocol, host, and port (it not 80 or 443).


**- Scopes: ** Read | Write | Offline access


###Notification Settings

**- Notifications callback URL: ** Configure the public URL of your domain where you want to receive notifications for the different topics. 

**- Topics: ** Comma separated list of ‘topics’ you want to subscribe to. There are three possible topics: orders, items, questions.

**- Domains: ** Domains allowed to interact with MELI's Javascript SDK. 



