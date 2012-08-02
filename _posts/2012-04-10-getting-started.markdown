---
layout: 2columns
title: Getting Started
categories: tutorials popular
tags: home
---

# Getting Started

If you're reading this it's because you're wondering which is the easiest way to start using our APIs. Good news! It is dead simple!

### Table of Contents
- [Your first approach to the APIs](#first-approach)
- [Get your access token!](#access-token-title)
- [Use your access token!](#use-access-token)
- [What's next?](#whats-next)

## Your first approach to the APIs {#first-approach}
Our APIs are [RESTful](http://es.wikipedia.org/wiki/Representational_State_Transfer), which means that every url provides information on different business entities. We call this _resource_. The way you can operate on resources is by using HTTP _methods_ (see [HTTP Methods](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9)).  

Some of these basic methods are:
* GET: Retrieve information identified by the resource (see [GET](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3)).
* POST: Create a new resource (see [POST](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5)).
* PUT: Change a resource (see [PUT](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.6)).
* DELETE: Delete a resource (see [DELETE](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.7)).

So for example if you curl:

<pre class="terminal">$ curl https://api.mercadolibre.com/countries</pre>

You'll get a list of countries:
    
{% highlight javascript %}
[
  {
    "id": "AR",
    "name": "Argentina",
    "locale": "es_AR",
    "currency_id": "ARS",
  },
  ...
]
{% endhighlight %}

And if you want a specific country you can do:

<pre class="terminal">$ curl https://api.mercadolibre.com/countries/BR</pre>

In this case you'll get the information of Brazil.

{% highlight javascript %}
{
  "id": "BR",
  "name": "Brasil",
  "locale": "pt_BR",
  "currency_id": "BRL",
  "decimal_separator": ",",
  "thousands_separator": ".",
  "time_zone": "GMT-03:00",
  "geo_information": {...},
  "states": [...],
}
{% endhighlight %}

## Get your access token! {#access-token-title}
Our APIs will give you lots of information. Some of it is private, meaning you'll get access only if you have an _access token_.
For example if you want to get your own information:

<pre class="terminal">$ curl https://api.mercadolibre.com/users/me</pre>

You'll get a `403 Forbidden` http status code. This means you need this special access token that will validate that you actually gave the application permissions to access your information. See [HTTP Status Codes](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).

> NOTE: Access tokens will be granted to you by the owner of the information you are trying to access. See [Authentication & Authorization](/authentication-and-authorization).

In order to start playing with the APIs, click the button to get an access token.
<p><input class="ch-btn ch-btn-small" type="button" id="get-access-token" value="Get my access token" />
<pre id="token"><code id="access_token">token</code></pre></p>

> NOTE: You'll be granting to this developer site basic access to your information.

## Use your access token! {#use-access-token}

Now that you have an acccess token, the developers site application can access your basic information by requesting `/users/me` and appending a query string parameter called `access_token` with the value of the access token:

<pre class="terminal">$ curl https://api.mercadolibre.com/users/me?access_token=...</pre>

<input class="ch-btn ch-btn-small" type="button" id="show-my-info" value="Show my information" />
<p><pre id="me">info</pre></p>

## What's next? {#whats-next}

Now you know what are our REST APIs, and you know how to obtain an access token and use it to access different resources. Probably the next step should be [creating your own application](/creating-your-own-application) or you can also check [what can you do with the APIs](/guides).

<script>
    $(document).ready(function() {
        MELI.init({client_id: 6092});
        MELI.getLoginStatus();
        $('#token').hide();
        $('#me').hide();

        $('#get-access-token').click(function() {
            if(!MELI.getToken()) {
                MELI.login(function() {
                    $('#get-access-token').hide();
                    $('#token').show();
                    $('#access_token').html(MELI.getToken());
                });
            } else {
                $('#get-access-token').hide();
                $('#token').show();
                $('#access_token').html(MELI.getToken());
            }
        });

        $('#show-my-info').click(function() {
            if(!MELI.getToken()) {
                MELI.login(function() {
                    MELI.get('/users/me', null, function(data) {
                        $('#show-my-info').hide();
                        $('#me').html(JSON.stringify(data[2]));
                        $('#me').show();
                    });
                });
            } else {
                MELI.get('/users/me', null, function(data) {
                    $('#show-my-info').hide();
                    $('#me').html(JSON.stringify(data[2]));
                    $('#me').show();
                });
            }
        });
    });
</script>
