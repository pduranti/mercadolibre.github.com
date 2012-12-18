---
layout: guides
title: Listing with me1 mode
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

This guide explains how to deal with all the resources of our API to successfully list and manage items with shipping mode **me1**.

Selected sellers are marked for shipping mode me1 internally after an agreement between the seller and ML.

The guide covers in detail the API resources involved:

- **shipping modes**
- **items**
- **shipping methods**

<br/>

It introduces the concepts of **shipping modes** and **shipping methods**, to later explain how to **list items with shipping methods** and **dimensions** or list with the **free shipping** option.

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('user-me1-mode')">Verify the user with me1 mode</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('shipping-modes')">Verify the shipping mode</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('dimensions')">Dimensions</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('shipping-methods')">Shipping methods</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('free-shipping')">Free Shipping</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('cost-calculator')">Cost Calculator</a></dt>
  </dl>
</div>


## Verify if the user is ready to list with me1 {#user-me1-mode}
You can verify if the user is already allowed to list with ME1 shipping mode just making a GET at users API.
Let's see how it works.

**URL to GET**
<pre class="terminal">
https://api.mercadolibre.com/users/me?access_token=
</pre>

This will returns a lot of information about the authenticated user, and we can see in the JSON the following attributes

**Response**

{% highlight javascript %}
"shipping_modes":[
    "custom",
    "not_specified",
    "me1"
],
{% endhighlight %}


if the user has the me1 markup, so he can list with this shipping mode.


## Verify the shipping mode {#shipping-modes}
Use the *shipping_modes* resource to verify how a seller should list an Item on a given category and dimensions.

The response indicates the available shipping modes and the shipping methods that can be used.

<br />

### me1 mode

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
      "costs": "not_allowed",
      "accepted_methods":  [
        182,
        100009
      ]
    }
  }
]
{% endhighlight %}

### Shipping methods
- -**182** represents the 'Express' method. Packages can take up to 3 days to be delivered.
- -**100009** represents the 'Standard' method. Packages take more than 4 days to be delivered.

<br />

**Response Attributes**
- `accepted_methods` — An array with the available shipping methods
- `dimensions` (required) — Seller has to provide dimensions when listing the item.
- `costs` (not allowed) — The seller is not allowed to set its own shipping costs.


<br />
<br />

### not specified mode
The dimensions have some restrictions e.g.: 30kg maximum weight.
 If there are no modes that support the given dimensions the item has to be listed with **not_specified** shipping.

<pre class="terminal">
https://api.mercadolibre.com/users/:user_id/shipping_modes?category_id=MLB74723&dimensions=10x50x100,30001
</pre>


**Response**

{% highlight javascript %}
[
   {
      "mode":"not_specified",
      "shipping_attributes":{
         "dimensions":"optional",
         "costs":"not_allowed",
         "accepted_methods":[

         ]
      }
   }
]
{% endhighlight %}


## Item Dimensions {#dimensions}

Dimensions are used to calculate shipping the cost. If any measure is missing it is considered invalid.

Length, Width and Height are separated by 'x' and ',' separates the weight.

(Length cm)**x**(Width cm)**x**(Height cm)**,**(Weight gr)<br /><br />

Restrictions:
- **Weight** < 30000  (30 kg)
- L + W  + H < 200

Dimensions should represent the size of the package that will be shipped. All values are mandatory.

Examples:

**10x20x50,3000** is a valid dimension string

**20x44x,3000** is an invalid dimension string


![Package dimensions](/images/shipping-box.jpg)

<br />

## Listing an item on me1 mode

It's quite simple to list an item with me1. The POST to items must include the dimensions of the package.

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

<br />

### Local Pick Up

The **local_pick_up** attribute enables the option for buyers to choose to pick up the item from the store and don't incur in shipping costs.

Set local_pick_up to *true* for sellers that offer this option to buyers.


## Adding dimensions to existing listings

After an item is listed, if it doesn't have dimensions, you can inform them later.

Altering the dimensions of an item doesn't affect its relevance in search results and there is no restricion to alter dimensions if the item has sales.

Just do a PUT to the item including its dimensions.

**URL to PUT**
<pre class="terminal">
https://api.mercadolibre.com/items/:item_id?access_token=
</pre>


**JSON for the body**
{% highlight javascript %}
{
   "shipping":{
      "dimensions":"10x10x20,700"
   }
}
{% endhighlight %}



## Free shipping {#free-shipping}

Sellers have the option to list items offering one of the *shipping methods* for *free*.

This type of shipping has some benefits: it is a superior shopping experience for the buyer, it is highlited in the search results and buyers can filter listings that offer free shipping.

*NOTE:* For the moment the only option for free shipping is "country"


To list offering Standard shipping for free with the country option, add the shipping method array with the attribute "free": "country".

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


## Shipping methods {#shipping-methods}

To see more details of the available shipping methods there is a special resource by site.

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


**Response Attributes**

- `id` — Shipping method ID is used when listing an item with shipping.
- `name` —  Name of the shipping method
- `site_id` — The site id, the shipping method belongs to
- `free_options` — This shipping method can be offered for free with one of this values.


## Shipping Cost Calculator {#cost-calculator}

The API has a specific resource to calculate shipping costs for a given dimension and zip code destination.

It can be useful to check the reference prices to the most common destinations e.g.: To São Paulo or RJ.


There are 2 resources for the shipping calculator to choose the one that better suits your available parameters, both of them return the same result.


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

