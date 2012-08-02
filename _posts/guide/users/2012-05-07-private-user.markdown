---
layout: 2columns
title: Private user information
categories: guides
tag: Users
---

#Private User Information
You can get your own Personal User information calling the following URL (You need to be authenticated)

<pre class="terminal">
curl https://api.mercadolibre.com/users/me?access_token=$ACCESS_TOKEN
</pre>

This API call decodes the user_id from your access_token and return your personal information which contains your email, address, identification, etc.

You can build your own profile page!

