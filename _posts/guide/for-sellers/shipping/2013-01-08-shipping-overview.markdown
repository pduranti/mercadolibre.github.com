---
layout: guides
title: Shipping Overview
categories:
- Listing
- Manage Listings
- Orders
- Manage Questions
- Notifications
- Shipping
menu: 
- Listing &amp; Selling
tags: 
- Shipping
---


Listings in MercadoLibre can have 4 different shipping modes

<ol class="ch-list">
<li><strong>not specified</strong>
	<br>
It means the seller did not specify any shipping price for his items and the buyer has to get in contact with the seller to agree on a shipping option and price for the purchase.</li>

<li><strong>custom</strong>
	<br>
Sellers can include a table of up to 10 shipping costs on an item.<br> 
Each shipping cost has a label that describes the shipping option. e.g.: **"2 days by Air" - 40 BRL**, **"To Buenos Aires" - 50 ARS**.<br>
There is no tracking and there is no enforcement for the buyer to pay for the cost associated to his address<br>

<li><strong>me1 and me shipping modes</strong> (MercadoEnvios)
	<br>
This method offers the full features of trackable shipping and a complete set of price rules based on origin, destination and package size.</li>
</ol>

<br>

<i class="ch-icon-comment-alt">
IMPORTANT: MercadoEnvios is currently available only for selected sellers that have to reach an agreement with ML to be placed in either ME1 or ME2 modes.
</i>

<br>
<br>

## What are the differences between me1 and me2 ?

<table class="ch-datagrid">
	<thead>
	<tr><th scope="col">ME1</th><th scope="col"></th>ME2</tr>
	<tr>
		<td>It is appropriate for big sellers that have their own contracts with shipping companies and prefer to collect the money for the shipping costs and take care of all the shipping process.</td>
		<td>It is appropriate for sellers that aren’t not bound to contracts with shipping companies and want to benefit from the pre-paid labels from ML.</td>
	</tr>
	</thead>
    <tbody>
	<tr>
		<td>Sellers choose the carrier of their preference.</td>
		<td>Sellers print pre-paid labels. ML chooses the carrier.</td>
	</tr>
	<tr>
		<td>The seller can provide its own dimensions for the package.
In case they are not specified, we will use the standard dimensions by category to calculate shipping price.</td>
		<td>Sellers don’t have to provide dimensions. ML has standard dimensions by categories.</td>
	</tr>
	<tr>
		<td>Shipping cost is fixed by ML based on rules of origin, destination and dimensions of the package.</td>
		<td>Shipping cost is fixed by ML based on rules of origin, destination and dimensions of the package.</td>
	</tr>
	<tr>
		<td>There is a shipping cost calculator in the VIP and checkout flow.</td>
		<td>There is a shipping cost calculator in the VIP and checkout flow.</td>
	</tr>
	<tr>
		<td>The money collected for shipping cost is transferred to the seller.</td>
		<td>The money collected for shipping cost is kept by ML to pay for the label.</td>
	</tr>
	<tr>
		<td>Supports free shipping. The seller takes care of the charges to send the product. ML doesn’t charge anyone for the shipment.</td>
		<td>Supports free shipping. ML charges the seller through MP for the cost of the shipment label.</td>
	</tr>
	<tr>
		<td>Supports tracking that should be informed by the seller.</td>
		<td>Supports automatic tracking.</td>
	</tr>
	</tbody>
</table>

<br>
<br>
### How to know if a user is marked as me1 or m2?


You can verify if the user is already allowed to list with ME1 or M2 shipping mode with to the users API.
<pre class="terminal">
GET
https://api.mercadolibre.com/users/me?access_token=
</pre>

This will returns a lot of information about the authenticated user, one of those is the shipping_modes attribute.

**Response**

{% highlight javascript %}
"shipping_modes":[
    "custom",
    "not_specified",
    "me1"
]
{% endhighlight %}

By default all users are allowed to list with not specified shipment and custom shipping. If a user is marked with either me1 or me2 you can see it in as an option in shipping modes.


## Continue Learning
<ul class="ch-list">
	<li>How to list with <a href="/listing-with-me1">shipping mode me1</a> or <a href="/listing-with-me2">shipping mode me2</a></li>
	<li><a href="/capture-and-manage-shipments">Capture shipping information and manage shipments</a></li>
</ul>
