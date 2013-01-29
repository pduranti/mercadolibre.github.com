---
layout: guides
title: Shipping Overview
categories:
- Listing
- Manage Listings
- Orders
- Manage Questions
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

<li>
  <strong>custom</strong>
	<br>
  	Sellers can include a table of up to 10 shipping costs on an item.<br> 
  	Each shipping cost has a label that describes the shipping option. e.g.: "2 days by Air" - 40 BRL, "To Buenos Aires" - 50 ARS.<br>
  	There is no tracking and there is no enforcement for the buyer to pay for the cost associated to his address<br>
</li>

<li><strong>me1</strong> (MercadoEnvios mode 1)
	<br>
	This method offers a shipping calculator to collect the shipping cost for every order allowing the seller to choose the shipping service of his choice.
</li>
<li><strong>me2</strong> (MercadoEnvios mode 2)
	<br>
	This method provides the seller a pre-paid label and tracking code with the shipping company chosen by ML.
</li>
</ol>

<br>

<i class="ch-icon-comment-alt">
IMPORTANT:
MercadoEnvios mode 2 is available for sellers of Brasil who want to opt-in to participate in the program and it will soon be available in Argentina.
<br>
MercadoEnvios 1 is only available for selected sellers in Brasil who need to reach an agreement with MercadoLibre.
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
<strong>In case they are not specified, the standard dimensions by category will be used.</strong></td>
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
		<td><strong>Sellers are responsible for posting the tracking codes to provide buyers with tracking information</strong>.</td>
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

## Available shipping methods by Country {#shipping-methods}

Each site has a set of shipping methods available. They have different shipping times and costs.
Sellers can offer free shipping in one or both of these methods.

To see the available methods by site there is a special resource.

**URL for Brazil**
<pre class="terminal">
https://api.mercadolibre.com/sites/MLB/shipping_methods
</pre>

**JSON Response**
{% highlight javascript %}
[
   {
    "id": 100009,
    "name": "Standard",
    "site_id": "MLB",
    "free_options":  [
      "country"
    ]
   },
   {
    "id": 182,
    "name": "Express",
    "site_id": "MLB",
    "free_options":  [
      "country"
    ]
   }
]
{% endhighlight %}


**URL for Argentina**
<pre class="terminal">
https://api.mercadolibre.com/sites/MLA/shipping_methods
</pre>

**JSON Response**
{% highlight javascript %}
[
   {
    "id": 73330,
    "name": "Express",
    "status": "active",
    "shipping_company":  {
      "id": 17500240,
      "name": "OCA",
      "site_id": "MLA",
    },
    "site_id": "MLA",
    "currency_id": "ARS",
    "free_options":  [
      "country",
    ],
  },
   {
    "id": 73328,
    "name": "Estándar",
    "status": "active",
    "shipping_company":  {
      "id": 17500240,
      "name": "OCA",
      "site_id": "MLA",
    },
    "site_id": "MLA",
    "currency_id": "ARS",
    "free_options":  [
      "country",
    ],
  },
]
{% endhighlight %}


**Response Attributes**

- `id` — Shipping method ID is used when listing an item with shipping.
- `name` —  Name of the shipping method
- `site_id` — The site id, the shipping method belongs to
- `free_options` — This shipping method can be offered for free with one of this values.



## Continue Learning
<ul class="ch-list">
	<li>How to list with <a href="/listing-with-me1">shipping mode me1</a> or <a href="/listing-with-me2">shipping mode me2</a></li>
	<li><a href="/capture-and-manage-shipments">Capture shipping information and manage shipments</a></li>
</ul>
