---
layout: 2columns
title: Add pictures to items
categories: guides
tags: Selling
---

# Add pictures to existing items

Previously you have learned how to list an item in MELI providing the Pictures URL’s. This tutorial is going to show you how to upload your picture files to MELI storage and link them to your item.

Users can upload pictures with at most 10 MB. Picture format can be .jpg, .jpeg, .png or .gif (without animation). A zoom function lets buyers to roll over a picture for a close-up look. With this feature, we recommend that your pictures be 800 pixels or larger.

##Upload the Picture

The following POST will upload your picture to the MELI Storage

<pre class="terminal">
curl -F file=@/home/user/picture.jpg

https://api.mercadolibre.com/pictures?access_token=$ACCESS_TOKEN
</pre>

It will return a JSON describing the picture details, remember to save the picture “id”. The other fields represents different picture sizes.

{% highlight javascript %}
{
   "id":"MLA2518488513_032012",
   "quality":"",
   "variations":[...]
}
{% endhighlight %}

##Link the Picture to the Item

Using this picture “id” you can link the previous uploaded picture to you item.

(You have to provide the item “Id” and the Picture “Id”)

<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -H "Accept: application/json" -d
'{"id":"MLA2518488513_032012"}'

https://api.mercadolibre.com/items/MLA421101451/pictures?access_token=$ACCESS_TOKEN
</pre>

That’s all!. Go to your item’s VIP (using the permalink field) and check the new picture.
