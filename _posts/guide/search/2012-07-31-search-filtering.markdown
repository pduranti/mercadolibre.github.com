---
layout: guides
title: Search by using filters
categories: Guides
tags: 
- Searching
---

# Search using filters

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-overview')">Overview</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-request')">Request</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-response')">Response</a></dt>
  </dl>
</div>


## Overview: {#search-overview}

The search operation retrieves a list of items. Then you can refine your search using search filters. Search filters allow to limit your results to those that matches a criteria. Typically, you use these filters when you are interested in refining a previous search result. 

There are different kind of filters and each article has different ones.  

## Request {#search-request}

When you call a search operation, it returns metadata information that can be used to perform subsequent searches and refine search results.  

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod
</pre>

You will obtain a list of special filters which can apply to reduce results.

{% highlight javascript %}

"available_filters": - [
    {...},
    {
      "id": "price",
      "name": "Rango de precios",
      "type": "range",
      "values": [
        {
          "id": "*-750.0",
          "name": "Hasta $750",
          "results": 385,
        },
        {
          "id": "750.0-1000.0",
          "name": "$750 a $1.000",
          "results": 265,
        },
        {
          "id": "1000.0-*",
          "name": "Más de $1.000",
          "results": 512,
        },
      ],
    },
    {...},
    {...},
  ]
{% endhighlight %}

In order to refine the search you can add those filters that you need following this pattern: <code>&amp;FilterID=FilterValue</code>. An example of this could be this filtering:

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod&amp;price=700.0-1000.0
</pre>

## Response {#search-response}

Search response has a lot of parameters. Use <code>OPTIONS</code> http method to get a <code>JSON</code> encoded response that will describe the API, with all the allowed methods and connections to other APIs. It is a standard format to get [API documentation](/design-considerations/#options) 

<iframe id="search_api_embed"
  src="javascript:void(0)"
    scrolling="no"
      frameborder="0"
        width="100%"
          height="900">
</iframe>
<script type="text/javascript">
            document.getElementById('search_api_embed').src ='https://api.mercadolibre.com/sites/MLA/search?q=ipod';
</script>


For more information about search options you can check the website [https://api.mercadolibre.com/sites/MLA/search/](https://api.mercadolibre.com/sites/MLA/search/)




