---
layout: guides
title: Adding description
categories: 
- Listing
- Orders
- Manage Questions
- Notifications
menu: 
- Sellers &amp; Integrators
tags: 
- Listing
---


An item description is a large HTML which contains detailed information about the item you are selling. Ex: specifications, descriptions, images, all you think useful to buyers. The description will appears in the item’s VIP.


See [List an item](/list-your-item) for adding description and pictures at the time of listing.

##Why add description after listing?

You can’t modify the Item description if that listing already has bids. But, you can add information to existing descriptions. That prevents fraud mechanisms.

You can add a description to your item with the following POST, specifying the item “id” and the description HTML.


<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -H "Accept: application/json" -d
'{
  "text":"Need more information, Please ask. We will be happy to answer."
}'

https://api.mercadolibre.com/items/MLA430387888/descriptions?access_token=$ACCESS_TOKEN

</pre>

That’s all!. Go to your item’s VIP (using the permalink field) and check the description.
