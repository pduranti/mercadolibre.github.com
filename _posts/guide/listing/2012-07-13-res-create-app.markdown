---
layout: 2columns
title: Real estate listing
categories: guides-res
tags: create-app
---

#List Real Estate properties

Create your MELI APP 	{#createapp} 
----------------------------

Before creating your MELI APP you will need to [have a MELI signed up user](/res-signup-user).

To accomplish this go to the following URL:

<a href="http://applications.mercadolibre.com" target="_blank">http://applications.mercadolibre.com</a>
(if you are accesing with a user belonging to another country other than Argentina, please change the ".com.ar" to your corresponding country extension).

Log in with your username and password and click on the "Create new application", as shown on figure 1.

![Create new app](/images/new-realestate-6.png){:style="width:700px;"}
*<center>figure 1</center>*

If your APP will list properties **only on behalf your signed up user**, then complete the fields in the form, checking both "read" and "write" scopes and click on the "Create application" button (you can complete the "Callback URL" with any data, it won't be used). However, **if you want your APP to list properties on behalf other MELI's signed up users**, then at this step you must complete the fields in the form, checking the "read", "write" and "offline_access" scopes, and in the Callback URL will have to be completed with a URL to which users will be redirected right after granting permissions to your APP, explained further ahead in the [Authenticate section](/res-authenticate).

If your app has been successfully created, you should be now seeing all of the app's details on screen, as shown on figure 2.

![Apps details](/images/new-realestate-7.png){:style="width:700px;"}
*<center>figure 2</center>*

The most important fields you will be using along this listing steps are the *Client ID* (shown on screen as "ID") and your app's *Secret Key*. Keep both at hand since you will be needing them later on for authentication. Make sure you keep this information protected.
