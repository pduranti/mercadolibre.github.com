---
layout: guides
title: Answer a Question
categories: 
- Listing
- Real Estate
- Manage Listings
- Orders
- Manage Questions
- Notifications
menu: 
- Sellers &amp; Integrators
tags: 
- Manage Questions
---

We also provide a way to answer a question.

First, lets check all questions on our own item. You can do a GET request with the ItemID and an access token of the seller of that item.

<pre class="terminal">
curl 'https://api.mercadolibre.com/questions/search?item_id=ITEM_ID&amp;access_token=XXXX'
</pre>

You can check all unanswered questions about this item through the STATUS attribute.

Let's answer a question

<pre class="terminal">
curl -i -X POST -H "Content-Type: application/json" -d 
'{
	question_id: QUESTION_ID, 
	text:"Some text here..."
}'

https://api.mercadolibre.com/answers?access_token=XXXX
</pre>

We also provide an [Notifications API](/notifications). Listening to Notifications gives you the ability to have a real-time feed of the changes that occur on the different resources of the MercadoLibre API.