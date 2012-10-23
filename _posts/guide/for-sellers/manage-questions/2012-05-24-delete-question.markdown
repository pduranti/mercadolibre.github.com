---
layout: guides
title: Delete a question
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
menu: 
- Listing &amp; Selling
tags: 
- Manage Questions
---

Sometimes you may want to delete a question someone has made you.

Just do a DELETE request with the question ID and an access token of the seller of that item.

<pre class="terminal">
curl -X DELETE 'https://api.mercadolibre.com/questions/${question_id}?access_token=$ACCESS_TOKEN'
</pre>

Successful response

{% highlight javascript %}

{"message":"Question deleted."}

{% endhighlight %}


