---
layout: guides
title: Validate item
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
- Notifications
menu: 
- Listing &amp; Selling
tags: 
- Manage Listings
---

You can verify if you listing would be OK before sending a real POST to the Items API. The Items API provide a validation service to check you listing details before publishing it. It’s very useful to practice and check attributes variations!

To verify your listing POST using the validation service, execute the following API call:

<pre class="terminal">
curl -i -X POST -H "Content-Type: application/json" -d
'{
    "title": "Test Item - Do Not Bid",
    "category_id": "MLA3530",
    "price": 10,
    "currency_id": "ARS",
    "available_quantity": 1,
    "listing_type_id": "bronze",
    "condition":"new"
}'


https://api.mercadolibre.com/items/validate?access_token=$ACCESS_TOKEN
</pre>
You will receive a “HTTP/1.1 204 No Content” message from the Items API if the listing POST example would pass the Items API validation process. To see the “HTTP/1.1 204 No Content” message on screen add the -i parameter to the curl command.

**Important:** This validation process is not mandatory, but will most likely become handy when testing your APP. Keep in mind that there is no sandbox nor pre-production environment, so every property listed during your testing phase will be visible in our platform by all of our users. It is highly recommended that you finalize listed items posted while testing.