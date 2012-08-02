---
layout: 2columns
title: Delete a question
categories: guides
tags: Contact
---

#Delete a question
Sometimes you want to delete the question someone made you.

Just do a DELETE request with the questionId and an access token of the seller of that item.

<pre class="terminal">
curl -X DELETE 'https://api.mercadolibre.com/questions/2264284172?access_token=$ACCESS_TOKEN'
</pre>

Successful response
<pre class="terminal">
{"message":"Pregunta eliminada"}
</pre>

*For the moment the response text is in Spanish


