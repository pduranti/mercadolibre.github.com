---
layout: guides
title: Search and sort the results
categories: guides
tags: 
- Searching
---

# Search and sort the results

### Table of Contents
- [Overview](#search-overview)
- [Request](#search-request)
- [Response](#search-response)

## Overview: {#search-overview}

Each search result can be sorted using available sorts. You must check available sorts and use them to refine your search. 

For example, if you search an item using a simple [search by query](/search-by-text-query)

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod
</pre>

you can check which the available sorts are:

{% highlight javascript %}
  "available_sorts": [
    {
      "id": "price_asc",
      "name": "Menor precio",
    },
    {
      "id": "price_desc",
      "name": "Mayor precio",
    }
  ]
{% endhighlight %}


## Request {#search-request}

To search and sort the results, you can specify a sort attribute 

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod&amp;sort=price_asc
</pre>

## Response {#search-response}

Search response has a lot of parameters. Use <code>OPTIONS</code> http method to get a <code>JSON</code> encoded response that will describe the API, with all the allowed methods and connections to other APIs. It is a standard format to get [API documentation](/design-considerations/#options).

If you are interested in define response block size read [search paging](/search-paging) section.

<iframe id="search_api_embed"
  src="javascript:void(0)"
    scrolling="no"
      frameborder="0"
        width="100%"
          height="900">
</iframe>
<script type="text/javascript">
            document.getElementById('search_api_embed').src ='https://api.mercadolibre.com/sites/MLA/search?seller_id=123456';
</script>


For more information about search options you can check the website [https://api.mercadolibre.com/sites/MLA/search/](https://api.mercadolibre.com/sites/MLA/search/)




