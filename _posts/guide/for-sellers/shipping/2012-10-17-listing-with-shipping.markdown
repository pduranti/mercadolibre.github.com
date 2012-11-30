---
layout: guides
title: Listing with trackable shipments
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

## Overview

This guide explains how to deal with all the aspects of our API to successfully list and manage items with trackable shipment methods called *"MercadoEnvios"*.

The guide covers the different concepts within shipping and explains in detail the API resources involved:

- -shipping modes
- -items
- -shipping methods
- -shipping services

<br/>

It introduces the concepts of **shipping modes** and **shipping methods**, to later explain how to **list items with shipping methods** and **dimensions**.

Finally sellers can offer to their buyers the **free shipping** option using one of the available methods to improve the shipping experience.

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('shipping-modes')">Shipping modes</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('dimensions')">Dimensions</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('shipping-methods')">Shipping methods</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('free-shipping')">Free Shipping</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('cost-calculator')">Cost Calculator</a></dt>
  </dl>
</div>



## Shipping modes {#shipping-modes}
The *shipping_modes* resource returns the shipping_modes available for a user.

**URL**

<pre class="terminal">
https://api.mercadolibre.com/users/:user_id/shipping_modes?category_id=MLB74723&dimensions=10x50x100,5000
</pre>



**Response**

{% highlight javascript %}
[
  {
    "mode": "me1",
    "shipping_attributes":  {
      "dimensions": "required",
      "methods": "optional",
      "costs": "not_allowed",
      "accepted_methods":  [
        182,
        100009,
      ],
    },
  },
]
{% endhighlight %}


The response indicates that shipping mode that the seller can use.

**Response Attributes**

- `dimensions` (required) — Seller has to provide dimensions when listing the item.
- `methods` (optional) —  If the seller does not give details for the shipping methods, the 'standard' and 'express' shipping will be offered with no free option.
- `costs` (not allowed) — The seller is not allowed to set its own shipping costs.
- `accepted_methods` — An array with the available shipping methods: 182 or express and 100009 standard shipping.


There are 4 modes available depending on how the seller is marked.

-**not_specified:** The listing does not have any kind of shipping option.<br/>

### Non-trackable shipments
-**custom:** Sellers provide a list of up to 10 shipping costs for buyers to pay. This option does not offer trackable shipping to the buyers.<br/>

*NOTE*: **This modes is not covered in this guide.**


### Trackable shipments

**me1 mode**

Sellers list items with its own dimensions and the shipping cost will be calculated using these dimensions.

In this mode, the seller is responsible for completing the shipping process, he collects the money from the buyer, prints the label and provides the buyer with the tracking number. 
Typically large sellers with their own contract with shipping companies use this mode.<br/>


**me2 mode**

Sellers do not include dimensions in their listings. Shipment costs are calculated using standard dimensions for each category.
The shipping is paid and handled by *MercadoLibre*.

Sellers are repsonsible for dropping the package to the mail.<br/>



**Which mode are you?**

Sellers are assigned shipping modes 'me1' or 'me2' by an agreement with ML. This mode cannot be changed by the seller.



## Item Dimensions {#dimensions}

Dimensions are used to calculate shipping cost and it's of a fixed format. If any measure is missing it is considered invalid format.

Length, width and height are separated by 'x' and ',' separates the weight.

Dimensions should represent the dimension of the package that will be shipped.

**10x20x50,3000** is a valid dimension string

**20x44x,3000** it's an invalid dimension string


<center>(length cm)x(width cm)x(height cm),(weight gr)</center><br /><br />

![Shipping details](/images/shipment.jpeg)



## Working with shipping mode me1
In 'me1' mode the seller provides the dimensions, the first to do is query the shipping_modes resource to obtain the shipping modes allowed for that category and the given dimensions.


## Shipping methods {#shipping-methods}

Available shipping methods vary depending on the country. We expect to offer more shipping methods to improve the shipping experience.

**URL**
<pre class="terminal">
https://api.mercadolibre.com/sites/MLB/shipping_methods
</pre>

**JSON Response**
{% highlight javascript %}
[
   {
    "id": 100009,
    "name": "Standard",
    "status": "active",
    "site_id": "MLB",
    "currency_id": "BRL",
    "free_options":  [
      "country"
    ]
   },
   {
    "id": 182,
    "name": "Express",
    "status": "active",
    "site_id": "MLB",
    "currency_id": "BRL",
    "free_options":  [
      "country"
    ]
   }
]
{% endhighlight %}


**Response Attributes**

- `id` — Shipping method ID is used when listing an item with shipping.
- `name` —  Name of the shipping method
- `site_id` — The site id, the shipping method belongs to
- `currency_id` — The currency in which the cost is charged
- `free_options` — This shipping method can be offered for free with one of this values.




## Listing an item on me1 mode

It's quite simple, with the POST to items add the shipping attribute with dimensions of the package.

**URL to POST**
<pre class="terminal">
https://api.mercadolibre.com/items?access_token=
</pre>

**JSON for the body**
{% highlight javascript %}
{
   "title":"Item de teste",
   "category_id":"MLB74723",
   "price":10,
   "currency_id":"BRL",
   "available_quantity":10,
   "buying_mode":"buy_it_now",
   "listing_type_id":"bronze",
   "condition":"new",
   "description":"Item:, <strong> Ray-Ban WAYFARER Gloss Black RB2140 901 </strong> Model: RB2140. Size: 50mm. Name: WAYFARER. Color: Gloss Black. Includes Ray-Ban Carrying Case and Cleaning Cloth. New in Box",
   "pictures":[
      {
         "source":"http://upload.wikimedia.org/wikipedia/commons/f/fd/Ray_Ban_Original_Wayfarer.jpg"
      },
      {
         "source":"http://en.wikipedia.org/wiki/File:Teashades.gif"
      }
   ],
   "shipping":{
      "local_pick_up":false,
      "dimensions":"10x10x20,700"
   }
}
{% endhighlight %}




## Free shipping {#free-shipping}

Sellers have the option to list items offering one of the shipping methods for free.

This type of shipping has some benefits: it is a superior shopping experience for the buyer, it is highlited in the search results and buyers can filter listings that offer free shipping.



*NOTE:* For the moment the only option for free shipping is "country"


To list offering the Standard shipping for free to the whole country, add the shipping method array with the attribute "free": "country".

**JSON for the body with free option**

{% highlight javascript %}
{
   "title":"Item de teste",
   "category_id":"MLB74723",
   "price":10,
   "currency_id":"BRL",
   "available_quantity":10,
   "buying_mode":"buy_it_now",
   "listing_type_id":"bronze",
   "condition":"new",
   "description":"Item:, <strong> Ray-Ban WAYFARER Gloss Black RB2140 901 </strong> Model: RB2140. Size: 50mm. Name: WAYFARER. Color: Gloss Black. Includes Ray-Ban Carrying Case and Cleaning Cloth. New in Box",
   "pictures":[
      {
         "source":"http://upload.wikimedia.org/wikipedia/commons/f/fd/Ray_Ban_Original_Wayfarer.jpg"
      },
      {
         "source":"http://en.wikipedia.org/wiki/File:Teashades.gif"
      }
   ],
   "shipping":{
      "local_pick_up":false,
      "methods":  [
        {
        "id": 100009,
        "free": "country",
        }
      ],
      "dimensions":"10x10x20,700"
   }
}
{% endhighlight %}




## Shipping Cost Calculator {#cost-calculator}

The API has a specific resource to calculate shipping costs for a given dimension and zip code destination.

It can be useful to check the reference prices to the most common destinations e.g.: To São Paulo or RJ.


There are 2 resources for the shipping calculator, both of them return the same result. Choose the one most suitable for you.


**URL**
<pre class="terminal">
https://api.mercadolibre.com/users/:user_id/shipping_options?category_id=:category_id&dimensions=:dim&zip_code=13565905
</pre>

<pre class="terminal">
https://api.mercadolibre.com/items/:item_id/shipping_options?zip_code=13565905
</pre>


**Response**

{% highlight javascript %} 
{
  "destination":  {
    "zip_code": "13565905",
    "city":  {
      "id": "BR-SP-25",
      "name": "São Carlos"
    },
    "state":  {
      "id": "BR-SP",
      "name": "São Paulo"
    },
    "country":  {
      "id": "BR",
      "name": "Brasil"
    }
  },
  "options":  [
     {
      "id": 18309945,
      "name": "Express",
      "currency_id": "BRL",
      "list_cost": 14.7,
      "cost": 14.7,
      "tracks_shipments_status": "not_verified",
      "display": "always",
      "speed":  {
        "shipping": 24,
        "handling": 24
      }
    },
     {
      "id": 18309946,
      "name": "Standard",
      "currency_id": "BRL",
      "list_cost": 12.4,
      "cost": 0,
      "tracks_shipments_status": "not_verified",
      "display": "always",
      "speed":  {
        "shipping": 72,
        "handling": 24
      }
    }
  ]
}

{% endhighlight %}


**Attribute description**

- `currency_id`: The currency in which the price is charged.
- `list cost`: The cost for this shipping option.
- `cost`: The actual cost to be paid, for "free shipping" cost is 0. 
- `tracks_shipments_status`: 'not_verified'.
- `speed.shipping`: Promise of time to deliver, expressed in hours.
- `speed.handling`: Promise of handling time, expressed in hours.


