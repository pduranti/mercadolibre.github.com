---
layout: guides
title: Search by text query
categories: Guides
guide: search
tags: 
- Searching
---

# Search by text query

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-overview')">Overview</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-request')">Request</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-response')">Response</a></dt>
  </dl>
</div>

## Overview: {#search-overview}

Search operation retrieves items that satisfy the search criteria. Text query is the basic option to search items. You should use space between words if you have multiple words. It searches items when one of the specified words matches with the item title. Queries aren't case-sensitive.

## Request {#search-request}

The MELI API is very intuitive and straightforward. If you want search to specific items as if you were doing it through our website, you can
use the search API as follows:

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod
</pre>

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod nano
</pre>

## Response {#search-response}

{% highlight javascript %}
{
  "site_id": "MLA",
  "paging": {...},
  "results": [...],
  "sort": {...},
  "available_sorts": [...],
  "filters": [...],
  "available_filters": [...],
}
{% endhighlight %}



Search response has a lot of parameters. Use <code>OPTIONS</code> http method to get a <code>JSON</code> encoded response that will describe the API, with all the allowed methods and connections to other APIs. It is a standard format to get [API documentation](/design-considerations/#options) 


For more information about search options you can check the website [https://api.mercadolibre.com/sites/MLA/search/](https://api.mercadolibre.com/sites/MLA/search/)




