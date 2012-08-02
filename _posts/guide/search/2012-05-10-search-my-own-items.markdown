---
layout: 2columns
title: Searching my own items
categories: guides
tags:
- My Publications
---

A very common use case is to search and show your own items. You can do it very easily, just read the following tutorial.

# Searching my own items

<pre class="terminal">
curl https://api.mercadolibre.com/users/$USER_ID/items/search?access_token=$ACCESS_TOKEN
</pre>

Notice that this information is private. So `$USER_ID` is the ID of a user whose `ACCESS_TOKEN` is required as well.
