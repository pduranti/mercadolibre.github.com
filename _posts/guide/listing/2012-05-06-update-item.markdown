---
layout: 2columns
title: Update an item
categories: guides
tags: Selling
---


#Update an Item

You can modify any item attribute by sending a PUT message to the Items API.

Just, send a JSON describing the attributes you want to modify, here there is an example in which the item title is changed for a more descriptive one:


<pre class="terminal">
curl -X PUT -H "Content-Type: application/json" -d
'{
"title":"Test Item - Do not offer - Harry Potter Book"
}'

https://api.mercadolibre.com/items/MLA421104745?access_token=$ACCESS_TOKEN

</pre>
Access the item’s VIP to see the modified title!
