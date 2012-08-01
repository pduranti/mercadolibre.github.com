---
layout: 2columns
title: Searching using sorts
categories: guides
tags: 
- Searching
---

# Search by text query

### Table of Contents
- [Description](#search-description)
- [Request](#search-request)
- [Pagging](#search-pagging)
- [Available sites](#search-sites)
- [Response](#search-response)

## Description:

Each search retrieved can be sorted using available sorts. You must check available sorts and use them to refine your search. 

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

In order to retrieve a sorted list of items you can specify a sort attribute 

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod&amp;sort=price_asc
</pre>


## Pagging {#search-pagging}

Search retrieves 50 results per page. 

{% highlight javascript %}

  "paging": {
    "total": 44301,
    "offset": 0,
    "limit": 50,
  }
{% endhighlight %}


## Available sites {#search-sites}

All Sites. 

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
            document.getElementById('search_api_embed').src ='https://api.mercadolibre.com/sites/MLA/search?seller_id=123456';
</script>


For more information about search options you can check the website [https://api.mercadolibre.com/sites/MLA/search/](https://api.mercadolibre.com/sites/MLA/search/)




