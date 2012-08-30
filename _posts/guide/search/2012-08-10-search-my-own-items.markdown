---
layout: guides
title: Search my own items
categories: 
- Selling 
- Orders
- Notifications
menu: seller
tags: 
- Orders
---


# Search my own items

A very common use case is to search and show your own items. 


<pre class="terminal">
curl https://api.mercadolibre.com/users/$USER_ID/items/search?access_token=$ACCESS_TOKEN
</pre>

Notice that this information is private. So `$USER_ID` is the ID of a user whose `ACCESS_TOKEN` is required as well.
