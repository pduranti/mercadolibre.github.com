---
layout: guides
title: Delete a question
categories: 
- Listing
- Real Estate
- Manage Listings
- Orders
- Manage Questions
- Notifications
menu: 
- List &amp; Sell
tags: 
- Manage Questions
---

Sometimes you want to delete the question someone made you.

Just do a DELETE request with the questionId and an access token of the seller of that item.

<pre class="terminal">
curl -X DELETE 'https://api.mercadolibre.com/questions/${question_id}?access_token=$ACCESS_TOKEN'
</pre>

Successful response

{% highlight javascript %}

{"message":"Question deleted."}

{% endhighlight %}


