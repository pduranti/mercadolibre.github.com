---
layout: guides
title: Listing with shipping me2
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


## Verify the shipping mode

Use the **shipping_modes** resource to verify if a seller can list an Item with me2 shipping on a given category.
The response indicates if me2 mode is available and the shipping methods that can be used.

**URL**
<pre class="terminal">
https://api.mercadolibre.com/users/:user_id/shipping_modes?category_id=MLB39373
</pre>

**Response**

{% highlight javascript %}
[
  {
    "mode": "me2",
    "shipping_attributes": {
      "dimensions": "optional",
      "methods": "optional",
      "costs": "not_allowed",
      "accepted_methods": [
        182,
        100009,
      ],
    },
  },
  {
    "mode": "not_specified",
    "shipping_attributes": {
      "dimensions": "optional",
      "methods": "not_allowed",
      "costs": "not_allowed",
      "accepted_methods": [
      ],
    },
  },
]
{% endhighlight %}

## Listing
Just list an item as usual, except you can specify free shipping methods.


## Free shipping

Sellers can list items offering one of the shipping methods for free.

This type of listing has some benefits: it is a superior shopping experience for the buyer, it is highlighted in the search results.

<i class="ch-icon-exclamation-sign">ML will charge the seller on MercadoPago for the costs of free shippings.</i>
<br>
<br>
<i class="ch-icon-exclamation-sign">IMPORTANT: For the moment the only option for free shipping is “country”.
To list offering Standard shipping for free with the country option, add the shipping method array "methods": [{ "id": 100009, "free": "country"}]
</i>

This examples shows a listing with free Standard shipping.


**URL**
<pre class="terminal">
https://api.mercadolibre.com/items?access_token=
</pre>

**Response**
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

   }
}
{% endhighlight %}




## Local Pick Up

The *local_pick_up* attribute enables the option for buyers to choose to pick up the item from the store and don’t incur in shipping costs.
Set *local_pick_up* to true for sellers that offer this option to buyers.


## Print the label

Once you have a sale with shipping option paid by the buyer, Sellers need to print the label pre-paid by ML.

The shipments have to be in status *ready_to_ship* to be able to get a label.
This means the payment has been processed and there a pre-paid label is available for the seller.

The API to obtain a label, or a set of labels, receives a list of shipment IDs, an access token and returns labels in PDF format.

**Shipping labels URL**
<pre class="terminal">
https://api.mercadolibre.com/shipment_labels?shipment_ids=20178600648,20182100995&access_token=
</pre>

The response will be a PDF file containing one or more pre-paid shipping labels ready to print.


![Sample label](/images/shipping-label.png)