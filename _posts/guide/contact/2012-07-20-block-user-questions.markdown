---
layout: 2columns
title: Managing questions blacklist
categories: guides
tags: Contact
---

###Overview
Managing the question's blacklist allows you to block users from asking questions on your items. Later on you can remove them from the blacklist to allow questions.

This blacklist is user-based and the seller has full control over the list of users in it.

## To block someone from asking questions:

   <ul>
     <li> Method: POST</li>
     <li> URL: https://api.mercadolibre.com/users/$SELLER_ID/questions_blacklist/?access_token=SELLER ACCESS TOKEN</li>
     <li>
   	{% highlight javascript %}

   	{
            "user_id": blocked user id
   	}
   	{% endhighlight %}
     </li>
   </ul>
## To see the list of blocked users

   <ul>
     <li> Method: GET</li>
     <li> URL: https://api.mercadolibre.com/users/$SELLER_ID/questions_blacklist/?access_token=SELLER ACCESS TOKEN</li>
   </ul>
## Removing a user from the blacklist

   <ul>
     <li> Method: DELETE</li>
     <li> URL: https://api.mercadolibre.com/users/$SELLER_ID/questions_blacklist/$USER_ID?access_token=SELLER ACCESS TOKEN</li>
   </ul>


