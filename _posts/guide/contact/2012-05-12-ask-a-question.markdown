---
layout: 2columns
title: Ask a question
categories: guides
tags: Contact
---


#Asking a question

The purpose of this tutorial is to show how you can contact a seller by asking him questions.


## Asking a question example

Call the API with the corresponding JSON format with and required attributes.

<pre class="terminal">
curl -i -X POST -H "Content-Type: application/json" -d
'{
   "text":"Do you have these shoes in red?",
   "item_id":"MLA123456"
'

https://api.mercadolibre.com/questions/?access_token=$ACCESS_TOKEN
</pre>
    
**Congratulations!** you have asked your first question using the MELI API platform.

