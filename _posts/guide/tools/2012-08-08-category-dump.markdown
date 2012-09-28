---
layout: 2columns
title: Category Dump
categories: 
- SDKs 
- More Tools
menu: 
- Tools
tags: 
- More Tools
---


The category tree does not change very often. If you prefer you can request a dump of the whole category tree for a given country site for offline processing.
This API returns the category tree in JSON format within a gzip-encoded response.

To get the categories for Brasil, use this URL:

<pre class='terminal'>
~$ curl	https://api.mercadolibre.com/sites/MLB/categories/all
</pre>

To get the categories for Argentina, use this URL:

<pre class='terminal'>
~$ curl	https://api.mercadolibre.com/sites/MLA/categories/all
</pre>


# Modification Headers

This URL contains 2 headers that can be used to check when was the dump last generated.

- **X-Content-Created**: contains the date of the last generation.
- **X-Content-MD5**: contains the MD5 checksum of last generation.

<pre class='terminal'>
~$ curl -I  https://api.mercadolibre.com/sites/MLB/categories/all
HTTP/1.1 200 OK
Server: nginx/1.0.4
Date: Tue, 24 Jul 2012 15:14:58 GMT
Content-Type: application/json;charset=UTF-8
Connection: keep-alive
X-MLAPI-Version: 1.9.5
Content-Encoding: gzip
X-Content-Created: 2012-07-24T14:00:59.716Z
X-Content-MD5: 943541196986770119b4af1e66bda2dc
</pre>
