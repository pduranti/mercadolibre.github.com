---
layout: firststep
title: Design Considerations
categories: 
- Design Considerations
menu:
- Design Considerations
tags: 
- Design Considerations
---

There are some things you should know about our API to make your life easier.

<div class="contents">
<h5>Table of Contents</h5>

<dl>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('json')">JSON</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('jsonp')">JSONP</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('cors')">CORS</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('utf8')">UTF-8</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('iso8601')">Date format (ISO 8601)</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('error-format')">Handling errors</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('selection')">Reducing responses</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('options')">Using OPTIONS</a></dt>
</dl>
</div>


## All responses are JSON encoded. {#json}

JSON is a lightweight text-based open standard designed for human-readable data interchange. You can read more [here](http://en.wikipedia.org/wiki/JSON).

Our API supports and returns JSON by default.

We also return HTML responses when you surf out the API through a browser.

We use `Accept` header to decide which response we return.

## To overcome same origin policy, JSONP is also supported. {#jsonp}
The [same origin policy](http://en.wikipedia.org/wiki/Same_origin_policy) is an important security concept. To overcome it, we suggest using [JSONP](http://en.wikipedia.org/wiki/JSONP) and [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing).
### JSONP Usage
The API will respond JSONP if you provide a `callback` parameter. The value of this parameter will be used as the callback function.

For example, doing:

<pre class="terminal">$ curl https://api.mercadolibre.com/currencies/ARS</pre>

will return:

{% highlight javascript %}
{
  "id": "ARS",
  "description": "Peso argentino",
  "symbol": "$",
  "decimal_places": 2,
}
{% endhighlight %}

For a JSONP response, add a callback parameter as follows:


<pre class="terminal">$ curl https://api.mercadolibre.com/currencies/ARS?callback=foo</pre>

which will respond:

{% highlight javascript %}
foo(
    [
        200, 
        {
            "ETag":"2995de5a04da39af0a8677b1d02d1cdb",
            "Vary":"Accept,Accept-Encoding",
            "Content-Type":"application/json;charset=UTF-8",
            "Cache-Control":"max-age=86400"
        }, 
        {
            "id":"ARS",
            "description":"Peso argentino",
            "symbol":"$",
            "decimal_places":2
        }
    ]
);
{% endhighlight %}

As you can see, the response is an array with 3 values:
1. Http status code
2. Http response headers
3. Body of the response

**All JSONP responses will always be 200 OK. This is in order to give you the chance to handle 30x, 40x, and 50x responses on the client side. The real response data is in the array.**


### CORS
[Cross-origin resource sharing (CORS)](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) is a web browser technology specification which defines ways for a web server to allow its resources to be accessed by a web page from a different domain.
This is a way to overcome the [same origin policy](http://en.wikipedia.org/wiki/Same_origin_policy).

All the APIs return a special header:

{% highlight http %}
Access-Control-Allow-Origin: *
{% endhighlight %}

This allows the browser to access information provided by the API, even being in a different domain.

All the major browsers have support for CORS.

So basically this means that you **don't have to do anything** and you get to access the API directly from your browser doing regular ajax calls with all the standard method and avoiding things like JSONP.

## All requests/responses are UTF-8 encoded. {#utf8}

<pre>
User: Are you really telling me that I can only use UTF-8 with MELI APIs?
We: Yes.
User: Really?
We: Yes.
User: Only?
We: Yes. We hope this has been enlightening for you.
User: But, I must--
We: Thank you, come again.
User: But--
We: Thank you, come again.
</pre>

Any similarities with a dialog among Apu, Homer and Kwik-E- Mart's CEO… it is not pure coincidence.

## All dates are ISO 8601 encoded. {#iso8601}

We use [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) to encode dates in responses.

**Not all dates will use the same timezone. So dates will include the proper timezone.**

## All errors have a standard format. {#error-format}

The standard format of an error is as follows:

{% highlight javascript %}
{
  "message": "human readable text",
  "error": "machine_readable_error_code",
  "status": 400,
  "cause": [
  ],
}
{% endhighlight %}

## Use selection to reduce the amount of returned attributes. {#selection}

In order to have smaller responses, with less data, you can add the `attributes` parameter with a comma separated list of fields that should be included in the response. All the other fields of the original response will be ignored.

<pre class="terminal">$ curl https://api.mercadolibre.com/currencies?attributes=id</pre>

{% highlight javascript %}
[
  {
    "id": "BRL"
  },
  {
    "id": "UYU"
  },
  {
    "id": "CLP"
  },
  ...
]
{% endhighlight %}

**This is supported only for array responses**.

## Filter by the IDs of resources {#filter-by-id}

If you have a list of IDs of the resources you want to retrieve, you can avoid doing N calls to get them by just doing 1 call. This is done by adding the `ids` parameter to the query string.

<pre class="terminal">$ curl https://api.mercadolibre.com/currencies?ids=ARS,USD</pre>


## API will provide documentation in JSON format using OPTIONS. {#options}

There is a standard format to get API documentation. Use `OPTIONS` http method to get a `JSON` encoded response that will describe the API with all the allowed methods and connections to another part of the API.

<pre class="terminal">$ curl -X OPTIONS https://api.mercadolibre.com/currencies</pre>


{% highlight javascript %}
{
    "name":"Monedas",
    "description":"Devuelve información correspondiente al ISO de las monedas que se usan en MercadoLibre.",
    "attributes": {
        "id":"ID de la moneda (Código ISO)",
        "description":"Denominación oficial de la moneda",
        "symbol":"Símbolo ISO para representar la moneda",
        "decimal_places":"Número de decimales manejados con la moneda"
    },
    "methods": [
        {
            "method":"GET",
            "example":"/currencies/",
            "description":"Devuelve el listado con todas las monedas."
        },
        {
            "method":"GET",
            "example":"/currencies/:id",
            "description":"Devuelve información con respecto a una moneda específica."
        }
    ],
    "related_resources":[],
    "connections": {
        "id":"/currencies/:id"
    }
}
{% endhighlight %}
