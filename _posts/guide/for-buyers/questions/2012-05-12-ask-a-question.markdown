---
layout: guides
title: Ask a question
categories: 
- Bookmarks
- Questions
menu:
- Buying Items
tags: 
- Questions
---


## Overview {#overview}

The purpose of this tutorial is to show how you can contact a seller by asking him questions.


## Asking a question - Example

Call the API with the corresponding JSON format and the required attributes.

<pre class="terminal">
curl -i -X POST -H "Content-Type: application/json" -d
'{
   "text":"Do you have these shoes in red?",
   "item_id":"MLA123456"
'

https://api.mercadolibre.com/questions/?access_token=$ACCESS_TOKEN
</pre>
    
**Congratulations!** You have asked your first question using the MELI API platform.

