---
layout: 2columns
title: Listening to Notifications
categories: guides
tag: Notifications
---

#Notifications

Listening to Notifications gives you the ability to have a real-time feed of the changes that occur on the different resources of the MercadoLibre API.

For example if you published an item and later it was paused, someone made you a question, purchase your item or even paid for it and requested a shipping; you will receive a Notification of a change on the resource.

Notifications are a very convenient way to stay up-to-date with everything that you care, in the most efficient way for you, without having to query our APIs on a constant basis. You only get notified of the resource that changed.


## Table of Contents 
- [How to Subscribe](#how-to-subscribe)
- [Available Topics](#topics)
- [Considerations](#considerations)
- [Structure of Notifications](#structure)
+ [Order topic](#orders-topic)
+ [Questions topic](#questions-topic)
+ [Items topic](#items-topic)


---
##How do I subscribe to the Notifications? {#how-to-subscribe}
In the Applications Page where you created your App, you can edit the details and specify which 'topics' you will listen to.
(see [Applications Page](http://applications.mercadolibre.com)).
_If you haven't created your App yet go to [Creating your app section] (http://developers.mercadolibre.com/creating-your-own-application/)_

  - **Notifications callback URL** Configure the public URL of your domain where you want to receive notifications for the different topics. e.g.: “http://myshoes-app.com/callbacks”.

  - **Topics** Comma separated list of 'topics' you want to subscribe to.

###Available Topics: {#topics}
- **orders**  — To get notified of any change on one of your orders. e.g.: you received an order from a purchase, the buyer added shipping instructions or the buyer added a payment to an order.

- **items**   — To get notified of any changes on an item you have published. 
	e.g.: Due to of MercadoLibre's rules your item was set to 'under_review'.
	The seller changed any of an item's attribute (price, title, description) and all the application's subscribed to that seller's feed get notified of the change.
	The 60 days period of a listing finished.

- **questions**   — To receive a notification for every question made to you or answered.

> NOTE: All the applications subscribed to the question feed will receive notifications for every answer the seller sends.

![App create](/images/application-topics.png)

##Considerations receiving notifications {#considerations}
* Messages will be sent out and retried during 12 hours. After that period, if not accepted by the app, they will be discarded.

* Your application must acknowledge the reception with an HTTP status code 200, otherwise the message will be considered not delivered and it will be retried.

* Your application must send a response within 20 seconds, otherwise it will timeout considered not delivered and retried.


##What events trigger Notifications?

###orders
— Stock decremented: Somebody purchased one of your items and decremented the stock. A new order has been created.

— Payment: the buyer added a payment to the order.

— Shipping: there is new shipping information associated to the order. Or the status of the shipping has changed to: pending, handling, active, delivered, not_delivered.

— Feedback: the buyer rated you as a seller or you sent feedback to the buyer. A feed is received on the order.

###items
— Changes on any of the attributes.

— Changes on the status: the listing has to be reviewed by an operator and the status changed to "under_review" or it was paused and status changed to "paused"

— 60 days passed and the listing expired: status changed to "closed"

###questions 
— You received a new question.

— You answered a question.

— You deleted a question that you considered inappropriate.

##JSON Structure of Notifications {#structure}

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



