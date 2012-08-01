---
layout: 2columns
title: Searching using filters
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

The search operation can retrieve a list of item filtered by special filters. Tipically, you use these filters when you are interested in refine a previous search result. There are different filters and each article has different ones. 


## Request {#search-request}

When you call a search operation, it returns metadata information that can be used to perform subsequents search that refines search result.  

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

In order to refine the search you can add those filters that you need following the pattern: <code>&amp;FilterID=FilterValue</code>. An example of this could be this filtering:

<pre class="terminal">
https://api.mercadolibre.com/sites/MLA/search?q=ipod&amp;price=700.0-1000.0
</pre>


## Pagging {#search-pagging}

Search returns 50 search results per page. You can navigate towards limit going through the pages of 50 to 50.

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
            document.getElementById('search_api_embed').src ='https://api.mercadolibre.com/sites/MLA/search?category=MLA5726';
</script>


For more information about search options you can check the website [https://api.mercadolibre.com/sites/MLA/search/](https://api.mercadolibre.com/sites/MLA/search/)




