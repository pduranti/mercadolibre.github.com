---
layout: 2columns
title: Relist an item
categories: guides
tags: Selling
---

#Relist an Item
In case you need to list an item again (it could happen if you sold the specified quantity or the allowed listing time expired), you can use the relist function that Items API provides.

It’s different from creating a new listing from scratch. Relisting an Item will keep the questions, sells and visits your item had. It’s like extending the listing period with a new listing.

To relist a finished listing, do the following API call:

<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -d
'{
"listing_type_id": "silver",
"quantity": 20,
"price": 30
}'

https://api.mercadolibre.com/items/MLA421104745/relist?access_token=$ACCESS_TOKEN
</pre>
In this example, you are relisting the item: “MLA421104745” increasing the quantity to 20 units, modifying the listing type to “silver” and setting a new price to 30.

Remember to check the Listing Type API for valid listing type codes.

