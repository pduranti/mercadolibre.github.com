---
layout: firststep
title: Receiving notifications
categories: 
- Notifications
menu:
- Notifications
tags: 
- Notifications
---

Listening to Notifications enables you to have a real-time feed of the changes that occur on the different resources of the MercadoLibre API.

For example, if you listed an item and later it was paused, someone made you a question, purchased your item or even paid for it and requested shipment, you will receive a Notification of a change on the resource.

Notifications are a very convenient way to stay up-to-date with everything that you care, in the most efficient and without having to query our API on a constant basis. You only get notified of the resource that changes.

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('how-to-subscribe')">How to subscribe</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('topics')">Available Topics</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('considerations')">Considerations</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('structure')"></a>Structure of Notifications</dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('orders-topic')">Order topic</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('questions-topic')">Questions topic</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('items-topic')">Items topic</a></dt>
  </dl>
</div>

## How do I subscribe to the Notifications? {#how-to-subscribe}

In the Applications Page where you created your App, you can edit the details and specify which 'topics' you will listen to
(see [Applications Page](http://applications.mercadolibre.com)).
_If you haven't created your App yet, go to the [Creating your app section](http://developers.mercadolibre.com/creating-your-own-application/)_.

  - **Notifications callback URL:** Configure the public URL of your domain where you want to receive notifications for the different topics. E.g.: “http://myshoes-app.com/callbacks”.

  - **Topics:** Comma separated list of 'topics' you want to subscribe to.

###Available Topics: {#topics}
- **orders**  — To get notified of any change on one of your orders. E.g.: you received an order from a purchase, the buyer added shipping instructions or the buyer added a payment to an order.

- **items**   — To get notified of any changes on an item you have published. 
	E.g.: Due to MercadoLibre’s rules, your item is set to ‘under_review’; the seller changes an item’s attribute (price, title, description) and all the applications subscribed to that seller’s feed get notified of the change; or the 60 days' period of a listing has finished.

- **questions**   — To get notified of every question made to you or answered.

> NOTE: All the applications subscribed to the question feed will receive notifications for every answer the seller sends.

![App create](/images/application-topics.png)

##Considerations when receiving notifications {#considerations}
* Messages will be sent out and retried during 12 hours. After that period, if not accepted by the app, they will be discarded.

* Your application must acknowledge the reception with an HTTP status code 200, otherwise the message will be considered not delivered and it will be retried.

* Your application must send a response within 20 seconds, otherwise it will timeout, be considered not delivered and retried.


##What events trigger notifications?

###orders
— Stock decrement: Somebody purchases one of your items and the stock is decremented. A new order is created.

— Payment: The buyer adds a payment to the order.

— Shipping: There is new shipping information associated to the order or the status of the shipping is changed to: pending, handling, active, delivered, not_delivered.

— Feedback: The buyer rates you as a seller or you send feedback to the buyer. A feed is received on the order.

###items
— Changes on any of the attributes.

— Changes on the status: The listing has to be reviewed by an operator and the status is changed to “under_review” or it is paused and the status is changed to “paused”.

— 60 days passed and the listing expired: The status changes to "closed"

###questions 
— You receive a new question.

— You answer a question.

— You delete a question that you considered inappropriate.

##JSON structure of notifications {#structure}

##Order topic {#orders-topic}
{% highlight javascript %}
{
  "user_id": 1234,
  "resource": "/orders/139876",
  "topic": "orders",
  "received": "2011-10-19T16:38:34.425Z",
  "sent" : "2011-10-19T16:40:34.425Z",
}
{% endhighlight %}

##Item topic {#items-topic}
{% highlight javascript %}
{
  "user_id": 1234,
  "resource": "/items/MLB139876",
  "topic": "items",
  "received": "2011-10-19T16:38:34.425Z",
  "sent" : "2011-10-19T16:40:34.425Z",
}
{% endhighlight %}

##Questions topic {#questions-topic}
{% highlight javascript %}
{
  "user_id": 1234,
  "resource": "/questions/139876",
  "topic": "questions",
  "received": "2011-10-19T16:38:34.425Z",
  "sent" : "2011-10-19T16:40:34.425Z",
}
{% endhighlight %}

> NOTE: The resource path is relative to MercadoLibre API base path: http://api.mercadolibre.com

##Get the updated resource
After receiving a notification of one the topics, you need to do a GET on the corresponding API resource to get the data:

GET the order

<pre class="terminal">https://api.mercadolibre.com/orders/ORDER_ID?access_token=ACCESS_TOKEN</pre>


GET the item
<pre class="terminal">https://api.mercadolibre.com/items/ITEM_ID?access_token=ACCESS_TOKEN</pre>


GET the question
<pre class="terminal">https://api.mercadolibre.com/questions/QUESTION_ID?access_token=ACCESS_TOKEN</pre>



