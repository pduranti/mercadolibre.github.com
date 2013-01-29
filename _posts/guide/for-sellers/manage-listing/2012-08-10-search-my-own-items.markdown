---
layout: guides
title: Search my own items
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
- Shipping
menu: 
- Listing &amp; Selling
tags: 
- Manage Listings
---

A very common use case is to search and show your own items. 


<pre class="terminal">
curl https://api.mercadolibre.com/users/$USER_ID/items/search?access_token=$ACCESS_TOKEN
</pre>

Notice that this information is private. So `$USER_ID` is the ID of a user whose `ACCESS_TOKEN` is required as well.
