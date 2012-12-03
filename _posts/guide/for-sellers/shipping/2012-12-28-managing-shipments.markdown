---
layout: guides
title: Manage and track shipments
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

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('shipping-orders')">Capture shipping preferences from the order</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('shipping-services')">Supported Shipping Services</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('tracking')">Inform the tracking number</a></dt>
  </dl>
</div>

## Capture shipping preferences from the order {#shipping-orders}

When a buyer chooses shipping preferences and gives his shipping address, a *shipment* is created and associated to the order.

A new order feed is going to be received when the shipment is created and later, if the tracking is informed, each time the package changes its status until it's delivered.


### Obtain shipment details

<pre class="terminal">
  https://api.mercadolibre.com/orders/700472002/shipments?access_token=
</pre>

{% highlight javascript %}
{
  "id": 7601620,
  "status": "active",
  "status_history":  {
    "date_shipped": null,
    "date_delivered": null,
  },
  "date_created": "2011-09-07T13:29:42.000-04:00",
  "last_updated": "2011-09-07T13:30:29.000-04:00",
  "tracking_number": null,
  "tracking_method_id":182,
  "tracking_method": null,
  "sender_id": "99580221",
  "receiver_id": "8408542",
  "sender_address":  {
    "id": "53742741",
    "address_line": "ftesta 13",
    "comment": null,
    "zip_code": "null",
    "city":  {
      "id": "null",
      "name": "rwqf",
    },
    "state":  {
      "id": "BR-AC",
      "name": "Acre",
    },
    "country":  {
      "id": "BR",
      "name": "Brasil",
    },
    "types":  [
      "default_selling_address",
    ],
    "latitude": null,
    "longitude": null,
  },
  "receiver_address":  {
    "id": "12181995",
    "address_line": "Estrada Geral Cachoeira de Fátima 77777",
    "comment": null,
    "zip_code": "88990000",
    "city":  {
      "id": "null",
      "name": "Praia Grande",
    },
    "state":  {
      "id": "BR-SC",
      "name": "Santa Catarina",
    },
    "country":  {
      "id": "BR",
      "name": "Brasil",
    },
    "types":  [
      "default_buying_address",
    ],
    "latitude": null,
    "longitude": null,
  },
  "shipping_items":  [
     {
      "id": "MLB402220356",
      "description": "Celular Apple Iphone 4 16gb Libre De Fábrica ",
      "quantity": 49,
      "dimensions": “15x15x25,500”,
    },
  ],
  "shipping_option":  {
    "id": 18309457,
    "name": "Express",
    "currency_id": "BRL",
    "cost": 1,
    "speed":{
      "shipping": 48,
      "handling": 24
    },
  "comments": "other info shipping",
  }
{% endhighlight %}


## Shipping Services {#shipping-services}
Obtain the list of supported shipping services.
Later on, sellers will be able to provide automatic tracking for one of the supported shipping services.
If the shipping service  is not in this list, automatic tracking is not supported.

https://api.mercadolibre.com/sites/MLB/shipping_services

{% highlight javascript %}
[
  {
    "id": 51,
    "name": "PAC",
    "status": "active",
    "shipping_company":  {
      "id": 100008,
      "name": "Correios",
      "site_id": "MLB"
    },
    "site_id": "MLB",
    "currency_id": "BRL",
    "tracks_shipments": true,
    "max_size": 5000,
    "min_size": 1,
    "max_weight": 30000,
    "min_weight": 1,
    "free_options":  [
      "country",
      "no"
    ]
  },
   {
    "id": 52,
    "name": "Sedex",
    "status": "active",
    "shipping_company":  {
      "id": 100008,
      "name": "Correios",
      "site_id": "MLB"
    },
    "site_id": "MLB",
    "currency_id": "BRL",
    "tracks_shipments": true,
    "max_size": 5000,
    "min_size": 1,
    "max_weight": 30000,
    "min_weight": 1,
    "free_options":  [
      "country",
      "no"
    ]
   }
]
{% endhighlight %}



## Inform the tracking number {#tracking}
Send a PUT with the service id and tracking number.

<pre class="terminal">
https://api.mercadolibre.com/shipments/12345678?caller.id=
</pre>

{% highlight javascript %}
{
  "tracking_number": "TR1234567891",
  "tracking_service_id": 182
}
{% endhighlight %}
