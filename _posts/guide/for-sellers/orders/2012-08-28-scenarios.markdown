---
layout: guides
title: Orders Scenarios
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
- Shipping
menu: 
- Listing &amp; Selling
tags: 
- Orders
---

Using Orders API you can build your own Sales Management System.

There are two general scenarios where you can use Orders API:

**Scenario 1**: When we have several stores and we want to manage these stores using only one channel or app. In this page we will see how the user is notified when he sell something and three most common operations: check and update stock, track an order and give feedback.

**Scenario 2**: When we want to use mercadolibre as a backend.

<br />

##Scenario 1: Building a Sales Management System

###How to be aware of a purchase?

First of all, we have to configure our application to be capable of getting notifications. This can be done by subscribing your application to orders notifications. Go to [http://applications.mercadolibre.com](http://applications.mercadolibre.com) then edit your application and set up the Notifications Settings.

You must choose a Callback URL, configure the public URL of your domain where you want to receive all the notifications from MercadoLibre. E.g.: “http://backend.soleorigami.com/notif”. 

<img src="/images/notificaciones.png" alt="applications scopes" />

Also you need to specify which ‘topic’ you will listen, in this case you must select orders.

This configuration allows you to interact with MercadoLibre notifications. All the events (like payments and shipping) related with an order will be notified to your callback URL.

If you have any doubt about how to create an application go [here](/application-manager/).

<br />

###Receiving a Notification

MercadoLibre will send us notifications throw a POST message with information inside it’s body. The most important attribute in the message is the user_id which is related to the notification and second one is the resource. The resource is the element that has been updated or it just has been created.

{% highlight javascript %}
{
  "user_id": 1234,
  "resource": "/orders/731867397",
  "topic": "orders",
  "received": "2011-10-19T16:38:34.425Z",
  "application_id" : 14529
  "sent" : "2011-10-19T16:40:34.425Z",
  "attempts" : 0
}
{% endhighlight %}

After receiving the notification we must send an acknowledgment (ACK 200) to MercadoLibre in order to stop receiving the notification.

See more about [Notifications](/notifications/).

<br />

###Getting an Order

To get the info of the new order or the updated order we can make a GET message using the resource given in the previous notification.

<pre class="terminal">
https://api.mercadolibre.com/orders/{order_id}?access_token={...}
</pre>

The response of the GET message would be like this:

{% highlight javascript %}
{
  "id": order_id,
  "status": "paid",
  "status_detail": null,
  "date_created": "2011-10-19T18:40:34.425Z",
  "date_closed": "2011-10-19T18:40:34.425Z",
  "order_items": [...],
  "total_amount": 20,
  "currency_id": ARS,
  "buyer": {...},
  "seller": {...},
  "payments":{...},
  "feedback":{...},
  "shipping":{...},
  "tags": [],
}
{% endhighlight %}

Please check orders documentation [here](/orders/), for more information.  

<br />

###Synchronizing Stock

When we receive an order of a purchase we can get how many units were sold.

In this particular scenario, we want to maintain our stock updated in both MercadoLibre account and in our application.

From MercadoLibre: when we obtain the order by doing a GET request, we will get the quantity of the items sold. With this info we can update our database.

From our application: when we sell items from our site, we must update the quantity of items available in MercadoLibre. Doing this is really simply, we just do an update of the item by a PUT request with the new quantity available.

<pre class="terminal">
curl -X PUT 'https://api.mercadolibre.com/items/731867397?' -d {"available_quantity"=2}</pre>

<br />

###Giving feedback

Another thing that we can do is give feedback to an order. 

After completing a sale and a purchase, according to MercadoLibre’s rules, both parties must provide feedback about the transaction (an order).

Please check the section [giving feedback](/giving-feedback-of-an-order/) to an order to know more about this.

<br />

##Scenario 2: Building a Sales Management System

The other possible scenario is to use MercadoLibre API directly. This scenario is more common when we need a view of the purchases made in MercadoLibre. The big difference with first scenario is that instead of receiving notifications we will use the search resource in orders to obtain the purchases of the seller. There are also available queries and filters to apply in the search.

This is a private resource so we will need the access tokens in order to exchange information.

<pre class="terminal">
https://api.mercadolibre.com/orders/search?seller=seller_id&#038;access_token={...}
</pre>

Please check orders documentation [here](/orders/), for more information.  

One possible application for this scenario is in mobile environment and we don’t want to store the orders information in the device.

