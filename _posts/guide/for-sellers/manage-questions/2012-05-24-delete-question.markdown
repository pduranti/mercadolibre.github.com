---
layout: guides
title: Delete a question
categories: 
- Listing
- Orders
- Manage Questions
- Notifications
menu: seller
tags: 
- Manage Questions
---

Sometimes you want to delete the question someone made you.

Just do a DELETE request with the questionId and an access token of the seller of that item.

<pre class="terminal">
curl -X DELETE 'https://api.mercadolibre.com/questions/2264284172?access_token=$ACCESS_TOKEN'
</pre>

Successful response

{% highlight javascript %}
{"message":"Pregunta eliminada"}

{% highlight %}

*For the moment the response text is in Spanish


