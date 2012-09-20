---
layout: guides
title: Adding pictures
categories: 
- Listing
- Real Estate
- Manage Listings
- Orders
- Manage Questions
- Notifications
menu: 
- Sellers &amp; Integrators
tags: 
- Manage Listings
---

## Overview 

Pictures are optional when listing, but they make a big difference in the publication quality and results (visits and contacts). This tutorial is going to show you how to add and upload pictures. 

Users can upload pictures with at most 10 MB. Picture format can be .jpg, .jpeg, .png or .gif (without animation). 

### Zooming
For pictures larger than than 800 pixels, a zoom widget is activated that lets buyers roll over and take a close-up look. This is highly recommended for Clothes and Real Estate properties.

## Upload the Picture

The following POST will upload your picture to the MELI Storage

<pre class="terminal">
curl -F file=@/home/user/picture.jpg

https://api.mercadolibre.com/pictures?access_token=$ACCESS_TOKEN
</pre>

It will return a JSON describing the picture details, remember to save the picture “id”. The other fields represents different picture sizes.

{% highlight javascript %}
{
   "id":"MLA430387888_032012",
   "quality":"",
   "variations":[...]
}
{% endhighlight %}

## Link the Picture to the Item

Using this picture “id” retrieved you can link the previous uploaded picture to your item.

(You have to provide the item “Id” and the Picture “Id”)

<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -H "Accept: application/json" -d
'{"id":"MLA430387888_032012"}'

https://api.mercadolibre.com/items/MLA421101451/pictures?access_token=$ACCESS_TOKEN
</pre>

That’s all!. Go to your item’s VIP (using the permalink field) and check the new picture.

Note: There is currently a maximum amount of fifteen pictures per property.
