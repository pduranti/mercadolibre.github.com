---
layout: guides
title: Paging results
categories: 
- Searching
menu: 
- Searching
tags: 
- Searching
---

##  Overview {#paging-overview}

You can define the page size of the result list. There are 2 parameters: <a href="javascript:void(0)" onClick="goToByScroll('paging-limit')">Limit</a> and <a href="javascript:void(0)" onClick="goToByScroll('paging-offset')">Offset</a>. Both parameters define the size block of the results. 
                          
![range slider](/images/range-slider.png)

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('paging-values')">Default values</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('paging-limit')">Limit</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('paging-offset')">Offset</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('paging-range')">Define a range of results</a></dt>
  </dl>
</div>

## Default values {#values}

Default values are offset=0 and limit=50. 

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod nano
</pre>

In the paging section of the JSON response, you can see the total number of items that match the search and the offset value with the default limit applied.  

{% highlight javascript %}
  .....
  "paging": {
    "total": 285,
    "offset": 0,
    "limit": 50,
  }
  .....
{% endhighlight %}

## Limit {#paging-limit}

To reduce the page size you can change the limit parameter. For example, if you are insterested in retrieving just the first 3 items:

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod nano&amp;limit=3
</pre>

This action retrieves a JSON data with an array of 3 items as shown:

{% highlight javascript %}
{
  "site_id": "MLA",
  "query": "ipod nano",
  "paging": {
    "total": 284,
    "offset": 0,
    "limit": 3,
  },
  "results": [
    {...},
    {...},
    {...},
  ],
  "sort": {...},
  "available_sorts": [...],
  "filters": [...],
  "available_filters": [...],
}
{% endhighlight %}

## Offset {#paging-offset}

By using the offset attribute, you can move the lower limit of the result block. For example, if you are insterested in retrieving the 50 items that follow the default response:

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod nano&amp;offset=50
</pre>

{% highlight javascript %}
{
  "site_id": "MLA",
  "query": "ipod nano",
  "paging": {
    "total": 285,
    "offset": 50,
    "limit": 50,
  },
  "results": [...],
  "sort": {...},
  "available_sorts": [...],
  "filters": [...],
  "available_filters": [...],
}
{% endhighlight %}

This response retrieves 50 items starting from the first fifty items.

## Define a range of results {#paging-range}

It is possible to combine both parameters. You can retrieve items from the third to the sixth item in the original search result:


<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod nano&amp;offset=3&amp;limit=3
</pre>

This action retrieves a JSON data with an array of 5 items as shown:

{% highlight javascript %}
{
  "site_id": "MLA",
  "query": "ipod nano",
  "paging": {
    "total": 285,
    "offset": 3,
    "limit": 3,
  },
  "results": [
    {...},
    {...},
    {...},
  ],
  "sort": {...},
  "available_sorts": [...],
  "filters": [...],
  "available_filters": [...],
}
{% endhighlight %}


## Response {#search-response}

The Search response has a lot of parameters. Use <code>OPTIONS</code> http method to get a <code>JSON</code> encoded response that will describe the API, with all the allowed methods and connections to another part of the API. It is a standard format to get [API documentation](/design-considerations/#options). 

For more information about search options, you can check this website: [https://api.mercadolibre.com/sites/MLA/search/](https://api.mercadolibre.com/sites/MLA/search/)
