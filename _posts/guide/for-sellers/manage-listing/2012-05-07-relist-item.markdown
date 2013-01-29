---
layout: guides
title: Relist an item
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
- Shipping
menu: 
- Listing &amp; Selling
tags: 
- Manage Listings
---

## Overview {#overview}


In case you need to list an item again (this may happen if you have sold the specified quantity or the listing has expired), you can use the relist function that the items API provides.

It’s different from creating a new listing from scratch. By relisting an item, all the questions, sales and visits the item had will be kept. It’s like extending the listing period with a new listing.

Only items with a “closed” status admit relisting. For more details about listing status see [changing listing status](/change-listing-status).

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('expiration-date')">Expiration date </a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('relist')">Relist</a></dt>
  </dl>
</div>


## Expiration date {#expiration-date}

To check the current status and expiration date of a listing, you must send a GET request to our items API to the following URL:

<pre class="terminal"> 
curl https://api.mercadolibre.com/items/ITEM_ID
</pre>

Once you've received the response body, check the "stop_time" element to get the expiration date of the item. This information is also available in the response body you receive when successfully listing the item in the first place.


{% highlight javascript %}
{
  "id":"MLA123456789",
  .....
  "start_time": "2010-07-28T11:26:20.000Z",
  "stop_time": "2010-09-26T11:26:20.000Z",
  ...
}
{% endhighlight %}

## Relist {#relist}

To relist a finished listing, make the following API call:

<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -d
'{
  "listing_type_id": "silver",
  "quantity": 20,
  "price": 30
}'

https://api.mercadolibre.com/items/MLA123456789/relist?access_token=$ACCESS_TOKEN
</pre>
In this example, you are relisting the item “MLA123456789”, increasing the quantity to 20 units, modifying the listing type to “silver” and setting a new price to 30.

Remember to check the Listing Type API for valid listing type codes.

**Important:** as stated before, relisting an item generates a NEW item, which means that the Item ID MercadoLibre assigns to that item will be a new one. You will be able to obtain this new ID from the JSON in the response body you receive when relisting your items successfully.
