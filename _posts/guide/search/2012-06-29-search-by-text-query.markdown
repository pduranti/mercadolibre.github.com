---
layout: guides
title: By text query
categories: 
- Searching
menu: 
- Searching
tags: 
- Searching
---

## Overview {#search-overview}

The search operation retrieves items that satisfy the search criteria. The text query is the basic option to search items. For multiple words searches, use spaces between the words. This search will match one of the words with the item title. Queries aren't case-sensitive.

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-request')">Request</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-response')">Response</a></dt>
  </dl>
</div>


## Request {#search-request}

The MELI API is very intuitive and straightforward. If you want to search for specific items as if you were doing it through our website, you can
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



The search response has a lot of parameters. Use <code>OPTIONS</code> http method to get a <code>JSON</code> encoded response that will describe the API, with all the allowed methods and connections to another part of the API. It is a standard format to get [API documentation](/design-considerations/#options).  


For more information about search options, you can check this website: [https://api.mercadolibre.com/sites/MLA/search/](https://api.mercadolibre.com/sites/MLA/search/)




