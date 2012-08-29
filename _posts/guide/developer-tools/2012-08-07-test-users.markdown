---
layout: 2columns
title: Test users
categories: [Developer Tools]
menu: developer-tools
tags: SDKs
---

# Create test users

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('overview')">Overview</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('create-user')">Create an user</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('response')">Response</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('Policies')">Policies</a></dt>
  </dl>
</div>

## Overview {#overview}

You can create test users to use in your application. With test users you can operate as a normal user publishing, buying, asking, etc. 

We strongly recommend working responsably with test users. Create only those are actually necessary.  

You can create up to 10 users.

## Create an user 

To create a new one you need to use an access token. For more details about access token see [Authentication &amp; Authorization guide](/authentication-and-authorization). You must define MercadoLibre site id. For more details about sites see [Site API](https://api.mercadolibre.com/sites)

<pre class="terminal">

curl -X POST -H "Content-Type: application/json" -d
'{
 	"site_id":"MLA"
}'
https://api.mercadolibre.com/users/test_user?access_token=...

</pre>

## Response {#response}

{% highlight javascript %}
{
	"id":120506781,
	"nickname":"TEST0548",
	"password":"qatest328",
	"site_status":"active"
}
{% endhighlight %}

## Policies {#policies}

There are some consideration when working with test users.

<ul class="ch-list parameters">
	<li>Items must clarify that are for test porpouse. </li>
	<li>Whenever possible you must list in categories like "others". </li>
	<li>Don't publish items with high exposure with listing types "gold" and "gold_premium" that can appear in the home page</li>
	<li>Test users must operate (buy, ask, etc) only between them.</li>
	<li>Test users operate only over test items.</li>
	<li>Test users without activity (buy, ask, publish, etc) in last 60 days will be removed.</li>
	<li>Test items published by user test will be removed.</li>
</ul>




