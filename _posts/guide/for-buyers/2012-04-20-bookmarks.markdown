---
layout: guides
title: Bookmark your items
categories: Guides
tags: 
- For Buyers
---

<div class="contents">
<h5>Table of Contents</h5>

<dl>
	<dt><a href="javascript:void(0)" onClick="goToByScroll('find-bookmarks')">All your bookmarks</a></dt>
	<dt><a href="javascript:void(0)" onClick="goToByScroll('bookmark-item')">Bookmark an item</a></dt>
	<dt><a href="javascript:void(0)" onClick="goToByScroll('bookmark-delete')">Remove a bookmark</a></dt>
	<dt><a href="javascript:void(0)" onClick="goToByScroll('bookmark-response')">Response</a></dt>
</dl>
</div>


## All your bookmarks {#find-bookmarks}

In order to retrieve user bookmarks, you can use following URL:

<pre class="terminal">
curl https://api.mercadolibre.com/users/me/bookmarks?access_token=...
</pre>

{% highlight javascript %} 
[
  ....
  {
    "bookmarked_date": "2012-07-20T10:22:04.736-04:00",
    "item_id": "MLA428108770",
  },
  {
    "bookmarked_date": "2012-07-17T16:46:46.079-04:00",
    "item_id": "MLA428424006",
  },
  {
    "bookmarked_date": "2012-07-13T16:41:43.937-04:00",
    "item_id": "MLA428112474",
  },
  ....
]
{% endhighlight %}

## Bookmark an item {#bookmark-item}

To bookmark an item, you can use the following URL:

<pre class="terminal">

curl -X POST -H "Content-Type: application/json" -d
'{
	"item_id":"MLA5529"
 }'

https://api.mercadolibre.com/users/me/bookmarks?access_token=$ACCESS_TOKEN  
</pre>

## Remove a bookmark {#bookmark-delete}

<pre class="terminal">

curl -X DELETE -H "Content-Type: application/json" -d

https://api.mercadolibre.com/users/me/bookmarks/MLA5529?access_token=$ACCESS_TOKEN  
</pre>


## Response {#bookmark-response}

{% highlight javascript %}
{
  "item_id":"MLA426609874",
  "bookmarked_date":"2012-08-21T10:43:32.978-04:00"
}
{% endhighlight %}

