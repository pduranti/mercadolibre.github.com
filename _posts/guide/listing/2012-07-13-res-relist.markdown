---
layout: 2columns
title: Real estate listing
categories: guides-res
tags: relist
---

#List Real Estate properties

Relist your properties {#relist}
-------------------------

Real estate listings have an expiration date on MercadoLibre. This expiration date is usually up to two months since the activation date (depending if a promotional pack is active). Once an item has reached its expiration date, it will be automatically finalized and will no longer be visible to other users. When this ocurrs, you may choose to relist your property to make it active again. Relisting implies the creation of a NEW item with the exact same elements as its parent.

For your APP development, you might want to add a process that periodically checks your listings' expiration dates so as to finalize and relist your listings before they reach their expiration date. *Only items with a "closed" status admit relisting.* You can send a PUT request with a "closed" status at any time your item is "active" or "paused".

To check the current status and expiration date of a listing, you must send a GET request to our items API to the following URL:

<pre class="terminal"> 
 https://api.mercadolibre.com/items/ITEM_ID
</pre>

Once you've received the response body, check the "stop_time" element to get the expiration date of the property. This information is also available in the response body you receive when successfully listing the property in the first place.

To relist a property (remember it must have a "closed" status first) you must send a POST request to the following URL:

<pre class="terminal">
 https://api.mercadolibre.com/items/ITEM_ID/relist?access_token=YOUR_ACCESS_TOKEN
</pre>

Example: https://api.mercadolibre.com/items/MLA12345678/relist?access_token=YOUR_ACCESS_TOKEN

In the request headers include:
<pre class="terminal">
 content-type: application/json
 accepts: application/json
</pre>
In the request body you must send "price", "quantity" and "listing_type_id" for your relisting. Remember that the possible values for "listing_type_id" are "gold_premium", "gold" or "silver" (lowercase).

JSON example:

{% highlight javascript %}
{
  "price": 20000,
  "quantity": 1
  "listing_type_id": "silver"
}
{% endhighlight %}

If your property has been successfully relisted, you will receive a "201 Created" response status. Keep in mind that it might take some minutes before you see the item listed in our site.

Note: as stated before, relisting an item generates a NEW item, which means that the Item ID MercadoLibre assigns to that item will be a new one. You will be able to obtain this new ID from the JSON in the response body you receive when successfully relisting your properties.