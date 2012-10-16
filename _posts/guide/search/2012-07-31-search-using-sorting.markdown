---
layout: guides
title: Sorting results
categories: 
- Searching
menu: 
- Searching
tags: 
- Searching
---

## Overview {#search-overview}

Every search result can be sorted using the available sorts. You must check the available sorts and use them to refine your search. 


<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-available')">Check available sorts</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-response')">Request</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-response')">Response</a></dt>
  </dl>
</div>


## Check available sorts {#search-available}

For example, if you search an item using a simple [search by query](/search-by-text-query)

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod
</pre>

you can check which sorts are available:

{% highlight javascript %}
{
  ...
  "available_sorts": [
    {
      "id": "price_asc",
      "name": "Menor precio",
    },
    {
      "id": "price_desc",
      "name": "Mayor precio",
    }
  ],
  ...
}
{% endhighlight %}

## Request {#search-request}

To search and sort the results, you can specify a sort attribute:

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod&amp;sort=price_asc
</pre>

## Response {#search-response}

The search response has a lot of parameters. Use <code>OPTIONS</code> http method to get a <code>JSON</code> encoded response that will describe the API, with all the allowed methods and connections to other part of the API. It is a standard format to get [API documentation](/design-considerations/#options).

If you are interested in defining a block size response, read the [search paging](/search-paging) section.

For more information about search options, you can check this website: [https://api.mercadolibre.com/sites/MLA/search/](https://api.mercadolibre.com/sites/MLA/search/)




