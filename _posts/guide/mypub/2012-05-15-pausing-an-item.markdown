---
layout: 2columns
title: Pausing an item
categories: guides
tags: 
- My Publications
---
#Pausing an item

 Sometimes you need to pause an item for different reasons. When you pause it, an item will not show up in the listings and nobody will be able to purchase it.

##How to pause an item
 
 Make a PUT request to the Items API with the corresponding itemId and the new status to "paused"

 <pre class="terminal">
 curl -i -X PUT -H "Content-Type: application/json" -d
 '{
    "status":"paused"
  }'

 https://api.mercadolibre.com/items/MLA123456?access_token=$ACCESS_TOKEN
 </pre>

