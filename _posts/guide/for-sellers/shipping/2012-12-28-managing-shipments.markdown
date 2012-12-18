---
layout: guides
title: Manage and track shipments with me1
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

When a buyer chooses shipping preferences and gives his shipping address a *shipment* is created and associated to the order.

A new order feed is going to be received when the shipment is created and later, if the tracking is informed, each time the package changes its status until it's delivered.


### Obtain shipment details

There are different ways of obtaining shipping details for an Order.

Do a GET to orders when you receive the notification and you will have some shipping details embedded in the order.

<pre class="terminal">
  https://api.mercadolibre.com/orders/:order_id?access_token=
</pre>

{% highlight javascript %}
{
  "id": 123456789,
  "status": "paid",
  "status_detail": null,
  "date_created": "2012-12-18T09:35:07.000-04:00",
  "date_closed": "2012-12-18T09:35:07.000-04:00",
  "order_items":  [
     {
      "item":  {
        "id": "MLB446311775",
        "title": "Capa Couro Flip Original Samsung Galaxy S3 Siii  Branca",
        "variation_id": null,
        "variation_attributes": [
        ],
      },
      "quantity": 1,
      "unit_price": 99.98,
      "currency_id": "BRL",
    },
  ],
  "total_amount": 99.98,
  "currency_id": "BRL",
  "buyer":  {
    "id": "123456565",
    "nickname": "BUYER NICKNAME",
    "email": "email@buyer.com",
    "phone":  {
      "area_code": "11",
      "number": "55565656",
      "extension": null,
    },
    "first_name": "Name",
    "last_name": "Last Name",
    "billing_info": - {
      "doc_type": "CPF",
      "doc_number": "123456789",
    },
  },
  "seller":  {
    "id": "123456",
    "nickname": "SELLER NICKNAME",
    "email": "email@seller.com",
    "phone": - {
      "area_code": null,
      "number": "011 4444 1234",
      "extension": null,
    },
    "first_name": "Name.",
    "last_name": "Last Name LTDA.",
  },
  "payments":  [
    - {
      "id": "459656119",
      "transaction_amount": 99.98,
      "currency_id": "BRL",
      "status": "approved",
      "date_created": null,
      "date_last_modified": null,
    },
  ],
  "feedback":  {
    "purchase": null,
    "sale": null,
  },
  "shipping":  {
    "id": 20176304039,
    "status": "pending",
    "date_created": "2012-12-18T09:37:35.000-04:00",
    "receiver_address":  {
      "id": 123456789,
      "address_line": "Rua Júlio Sérgio de Castro 262 0  ",
      "zip_code": "223232",
      "city": - {
        "id": "BR-SP-44",
        "name": "São Paulo",
      },
      "state":  {
        "id": "BR-SP",
        "name": "São Paulo",
      },
      "country": - {
        "id": "BR",
        "name": "Brasil",
      },
      "latitude": null,
      "longitude": null,
      "comment": null,
    },
    "currency_id": "BRL",
    "cost": 5.9,
  },
  "tags":  [
    "paid",
    "not_delivered",
  ],
}
{% endhighlight %}



To obtain the complete details of a shipment: status detail, date created, shipping options such as shipping speed, Express or Standard and such do a GET to any of these resources:


<pre class="terminal">
  https://api.mercadolibre.com/orders/:order_id/shipments?access_token=
</pre>


Or, if you already know the shipment_id

<pre class="terminal">
  https://api.mercadolibre.com/shipments/:shipment_id?access_token=
</pre>


{% highlight javascript %}
{
  "id": 12345678,
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
    "address_line": "Rua X",
    "comment": null,
    "zip_code": "01154020",
    "city":  {
      "id": "null",
      "name": "Sao Paulo",
    },
    "state":  {
      "id": "BR-SP",
      "name": "Sao Paulo",
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
If the shipping service is not in this list, automatic tracking is not supported.

<pre class="terminal">
https://api.mercadolibre.com/sites/MLB/shipping_services
</pre>

{% highlight javascript %}
[
  {
    "id": 1,
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
    "id": 2,
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

All you have to do is a PUT to the shipment with the **service_id** and **tracking_number** attributes.

<pre class="terminal">
https://api.mercadolibre.com/shipments/:shipment_id?access_token=
</pre>

{% highlight javascript %}
{
  "tracking_number": "TR1234567891",
  "service_id": 1
}
{% endhighlight %}
