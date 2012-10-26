---
layout: guides
title: Modify items
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
menu: 
- Listing &amp; Selling
tags: 
- Manage Listings
---


<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('#update-item')">Update an Item</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('changing-status')">Changing listing status</a></dt>
</dl>
</div>

## Update an Item {#update-item}

You can modify an item field after it has been listed using our API.

<pre class="terminal">
 https://api.mercadolibre.com/items/ITEM_ID
</pre>


You can modify the values for pictures, title, available quantity, price, attributes, etc. 

<strong>NOTE on descriptions:</strong>

For our rules to protect buyers descriptions cannot be modified when the item has sales.

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

If your item has been successfully modified, you will receive a "200 OK" response status. Keep in mind that it can take some time until you see the item’s information refreshed.

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

## Changing listing status {#changing-status}

All you have to do is send a PUT request to our Items API with a status change, to the following URL:

<pre class="terminal">
curl https://api.mercadolibre.com/items/ITEM_ID?access_token=YOUR_ACCESS_TOKEN
</pre>



Possible values are:

**- closed:** finalizes your publication. Once closed, it cannot be reactivated again, but it can be [relisted](/relist-item).<br/>
**- paused:** pauses your publication. Once paused, it will not be visible by other MercadoLibre's users, but it will not be closed and it can be reactivated later on.<br/>
**- active:** reactivates a previously paused item.<br/>


JSON example:
{% highlight javascript %}
{
	"status":"paused"
}
{% endhighlight %}

Note: the value passed in the "status" key is case sensitive and thus must be sent in lowercase.

