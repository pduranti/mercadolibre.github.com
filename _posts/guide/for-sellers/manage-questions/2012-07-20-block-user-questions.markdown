---
layout: guides
title: Managing questions blacklist
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
menu: 
- Listing &amp; Selling
tags:
- Manage Questions
---


##Overview

Managing the question's blacklist allows you to block users from asking questions on your items. Later on, you can remove them from the blacklist to allow questions.

This blacklist is user-based and the seller has full control over the list of users in it.

## To block someone from asking questions

<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -d
'{
  "user_id": blocked user id
}'
https://api.mercadolibre.com/users/$SELLER_ID/questions_blacklist?access_token=$ACCESS_TOKEN  
</pre>

## To see the list of blocked users

<pre class="terminal">
curl -X GET 'https://api.mercadolibre.com/users/$SELLER_ID/questions_blacklist?access_token=$ACCESS_TOKEN '
</pre>

## Removing a user from the blacklist

<pre class="terminal">
curl -X DELETE 'https://api.mercadolibre.com/users/$SELLER_ID/questions_blacklist/$USER_ID?access_token=$ACCESS_TOKEN '
</pre>

