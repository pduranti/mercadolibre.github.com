---
layout: 2columns
title: Searching by text query
categories: guides
tags: 
- Searching
---

# Search by text query

## Table of Contents
- [Description](#search-description)
- [Request](#search-request)
- [Response](#search-response)

### Description:

Search operation retrieves items that satisfy the search criteria. Use text query is the basic option to search items. You use space between words if you have multiple words. It searches items when one of the specified word matches with the item title. Queries aren't case-sensitive.

## Request {#search-request}

Searching using the MELI API is very intuitive and straightforward. If you want search for specific items as if you were doing it through our website, you can
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




