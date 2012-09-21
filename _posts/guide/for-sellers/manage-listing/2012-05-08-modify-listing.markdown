---
layout: guides
title: Modify listing
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

You can use our Items API to visualize the details of a property, by accessing the following URL (by browser or by sending a GET request):

<pre class="terminal">
 https://api.mercadolibre.com/items/ITEM_ID
</pre>

Example: https://api.mercadolibre.com/items/MLA12345678

### Modify your property ### {#modifsub}

Using our Items API you will be able to modify the same elements that you are currently able to modify when browsing our site with a browser, such as pictures, title, available quantity, price, attributes, etc. For security reasons, description cannot be modified, but you will find instructions on how to add new information to your description further ahead.

To modify a property, send a PUT request to the following URL:

<pre class="terminal">
 https://api.mercadolibre.com/items/ITEM_ID?access_token=YOUR_ACCESS_TOKEN
</pre>

In the request headers include:
<pre class="terminal">
 content-type: application/json
 accepts: application/json 
</pre>

You must send a JSON formatted body with the elements you wish to modify.

Example:
{% highlight javascript %}
{ 
  "title": "Your new title",
  "price": 1000
}
{% endhighlight %}

Note: the JSON sent must not contain the Item ID.

If your property was successfully modified, you will receive a "200 OK" response status. Keep in mind that it can take some time to see the property's new information refreshed.

### Add new information to your property's description ### {#addtext}

To add new information to your property's description, you must send a POST request to the following URL:

<pre class="terminal">
 https://api.mercadolibre.com/items/ITEM_ID/descriptions?access_token=YOUR_ACCESS_TOKEN
</pre>

In the request body you must send:

{% highlight javascript %}
{
  "text": "You additional description text."
}
{% endhighlight %}

If the description was successfully posted, you will receive a "201 Created" status code. Keep in mind that it might take some minutes for you new description to be shown.

