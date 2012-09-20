---
layout: guides
title: Update an item
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
- Notifications
menu: 
- Sellers &amp; Integrators
tags: 
- Manage Listings
---


You can modify any item attribute by sending a PUT message to the Items API.

Just, send a JSON describing the attributes you want to modify, here there is an example in which the item title is changed for a more descriptive one:


<pre class="terminal">
curl -X PUT -H "Content-Type: application/json" -d
'{
"title":"Test Item - Do not offer - Harry Potter Book"
}'

https://api.mercadolibre.com/items/MLA430387888?access_token=$ACCESS_TOKEN

</pre>
Access the item’s VIP to see the modified title!
