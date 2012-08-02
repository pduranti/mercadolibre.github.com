---
layout: 2columns
title: Creating your own application
categories: tutorials popular
tags: home
---

## Creating your own application

The very first thing you'll probably want to do is to create an _application_ for MELI. When you do that you get a _client ID_ and a _client secret_, which are very important to use when [authenticating and authorizing](/authentication-and-authorization).

When you create an application you can start requesting users to grant you access to their information on their behalf, and offer them in exchange some cool features.

So before continuing, make sure you are registered as a user. In case you want to create a user, do it now by browsing to [http://www.mercadolibre.com](http://www.mercadolibre.com).

Now that you have a registered user, go to the [application manager](http://applications.mercadolibre.com) and create an application as described below:

![App create](/images/applications.png)


Fill in the form with the required information and select the `read` and `write` scopes. Once you've submitted the form, your application will be created and you will be redirected to your application detail page.

![App detail](/images/application-detail.png)

The attributes you will need for the MELI api are: `ID` (your `client_id`) and the  `Secret key` to retrieve the corresponding access tokens. Make sure to protect and keep confidential this information.

