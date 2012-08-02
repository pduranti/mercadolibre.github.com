---
layout: 2columns
title: Real estate listing
categories: guides-res
tags: agency
---

#List Real Estate properties

Identify as a Real Estate Agency 	{#identifyasagency} 
------------------------------------------------

If you are a real estate agency, you can identify your user as such to gain access to our promotional real estate packs. To accomplish this access the Help section, as shown on figure 4.

![Help](/images/new-realestate-4.png){:style="width:700px;"}
*<center>figure 4</center>*

Once there, click on the "Tus datos y registraci&oacute;n" tab and then on the "Registrarme como inmobiliaria" link, as shown on figure 5.

![Personal info](/images/new-realestate-5.png){:style="width:700px;"}
*<center>figure 5</center>*

You will then be redirected to a form which must be filled with the proper information and you will also be able to choose your desired promotional package. After completing the form, one of our agents will get in touch with you.

Keep in mind that having a promotional pack <u>is not mandatory</u> for publishing using the APIs.

If you have indeed acquired a promotional pack for your agency, you can access it's information by sending a GET request to the following URL:

<pre class="terminal">
 https://api.mercadolibre.com/users/me/promotion_packs?access_token=YOUR_ACCESS_TOKEN
</pre>

*YOUR_ACCESS_TOKEN* is the key that will allow you to authenticate when using MercadoLibre's APIs. You will learn how to obtain the access token on the [Authenticate section](/res-authenticate).

If you wish to see detailed information regarding your promotional pack, you can do so by sending a GET request to the following URL:

<pre class="terminal">
 https://api.mercadolibre.com/users/me/promotion_pack_combos/YOUR_PACKAGE_ID?access_token=YOUR_ACCESS_TOKEN
</pre>

*YOUR_PACKAGE_ID* is the ID of the package obtained in the previous step (when receiving the response of the GET request to the Promotion Packs API).