---
layout: guides
title: Changing listing status
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


All you have to do is send a PUT request to our Items API with a status change, to the following URL:

<pre class="terminal">
curl https://api.mercadolibre.com/items/ITEM_ID?access_token=YOUR_ACCESS_TOKEN
</pre>



Possible values are:

**- closed:** finalizes your publication. Once closed, it cannot be reactivated again, but it can be [relisted](/reslist-item).<br/>
**- paused:** pauses your publication. Once paused, it will not be visible by other MercadoLibre's users, but it will not be closed and it can be reactivated later on.<br/>
**- active:** reactivates a previously paused item.<br/>


JSON example:
{% highlight javascript %}
{
	"status":"paused"
}
{% endhighlight %}

Note: the value passed in the "status" key is case sensitive and thus must be sent in lowercase.
