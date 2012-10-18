---
layout: guides
title: Modify items
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
- Notifications
menu: 
- Listing &amp; Selling
tags: 
- Manage Listings
---

You can modify an item field after it has been listed using our API.

<pre class="terminal">
 https://api.mercadolibre.com/items/ITEM_ID
</pre>


You can modify the values for pictures, title, available quantity, price, attributes, etc. 

<strong>NOTE on descriptions:</strong>For our rules to protect buyers descriptions cannot be modified when the item has sales.

To modify a property, send a PUT request to the following URL:

You must send a JSON formatted body with the elements you wish to modify.

Example:
<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -H "Accept: application/json" -d
{ 
  "title": "Your new title",
  "price": 1000
}
https://api.mercadolibre.com/items/ITEM_ID?access_token=YOUR_ACCESS_TOKEN
</pre>

Note: the JSON sent must not contain the Item ID.

If your property has been successfully modified, you will receive a "200 OK" response status. Keep in mind that it can take some time until you see the property’s information refreshed.

### Add new descriptions ### {#addtext}

To add a new description, send a POST request to the following URL:

<pre class="terminal">
 https://api.mercadolibre.com/items/ITEM_ID/descriptions?access_token=YOUR_ACCESS_TOKEN
</pre>

In the request body you must send:

{% highlight javascript %}
{
  "text": "You additional description text."
}
{% endhighlight %}

If the description has been successfully posted, you will receive a "201 Created" status code. Keep in mind that it might take some minutes for your new description to be shown.

