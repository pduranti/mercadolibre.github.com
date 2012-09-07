---
layout: 2columns
title: Create Test Users
categories: 
- SDKs 
- More Tools
menu: 
- Tools
tags: 
- More Tools
---

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('overview')">Overview</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('create-user')">Create a user</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('Considerations')">Considerations using Test Users</a></dt>
  </dl>
</div>

## Overview {#overview}

You can create test users to support you in the process of developing with our APIs. Test users you can operate as normal users: listing, buying and asking questions.
Test users don't have to pay for the charges generated.

Test users will eventually be washed out and you can create new ones.

For the moment each user can create up to 10 test users.

## How to create a test user 

You need to have your application and a valid user to obtain an access_token.
If you didn't get your access_token yet, start here [Authentication &amp; Authorization guide](/authentication-and-authorization).

site_id is the input parameter. It is the site where the user is allowed to operate e.g.: MLA, MLB, MLM

For a complete list of sites see [Site API](https://api.mercadolibre.com/sites)

### POST to create the user
Each API call creates 1 test user.


<pre class="terminal">

curl -X POST -H "Content-Type: application/json" -d
'{
 	"site_id":"MLA"
}'
https://api.mercadolibre.com/users/test_user?access_token=...

</pre>

### Response {#response}
Id, nickname and password are returned in the response.

{% highlight javascript %}
{
	"id":120506781,
	"nickname":"TEST0548",
	"password":"qatest328",
	"site_status":"active"
}
{% endhighlight %}

## Considerations using Test Users {#policies}

There are some consideration you need to know while working with test users.

<ul class="ch-list parameters">
	<li>When you publish an item, the title must say it is a testing item.</li>
	<li>List in "Others" categories as much as possible. </li>
	<li>Do not publish items with listing types "gold" or "gold_premium" that can appear in the home page</li>
	<li>Test users can only operate with test items. Test users can only buy and make questions on test items.</li>
	<li>Test users without activity (buy, ask, publish, etc) in last 60 days will be removed.</li>
	<li>Test items are removed regularly.</li>
</ul>

