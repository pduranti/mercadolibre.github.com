---
layout: 2columns
title: Create a Product Ad 
categories: 
- Product Ads
tags:
- Product Ads
---

There are two different ways to create a Product Ad.

**Note**: This attributes are optional:

<ul class="ch-list parameters">
  <li>camapaignID. If it is not given it will create the ProductAd in a default Campaign.</li>
  <li>adDailyBudget</li>
  <li>maxCPC</li>
  <li>categID. If you don't know the best categID for your PAD you just have to ignore this field and we will set the best category for the PAD depending on the title.</li>
</ul>

**Contact us to set your default Properties for this fields**

## Sending the URL of the image
One ways of creating a product Ad is sending the image URL in the request: The API will download and store it in our own image repository. In order to do this you need to pass the image URL using the "uriImage" attribute.
**Warning!: if you also define the fileInput attribute, the API will no take into account the uriImage.**

<pre class="terminal">
curl -i -H 'Accept:application/json' -H 'Content-Type: application/json' -X POST -d '
{
	"URLDestiny" : "http://www.google.com.ar",
  	"URLVisible" : "www.google.com.ar",
  	"adDailyBudget" : 1,
  	"campaignID" : 39003,
  	"categID" : "1652",
  	"custID" : 66258610,
  	"maxCPC" : 0.15,
  	"price" : 15,
  	"refFrom" : "Reference owner",
  	"refID" : "Reference ID1",
  	"siteID" : "MLA",
  	"title" : "Title Test",
  	"type" : "P",
  	"brand" : "ML",
	"uriImage": "http://static.mlstatic.com/org-img/chico/img/logo-mercadolibre.png"
}' 'https://api.mercadolibre.com/mclics/productAd?access_token=$ACCESS_TOKEN'
</pre>

You will receive the following JSON response:

{% highlight javascript %}
{
	"URLDestiny" : "http://www.google.com.ar",
  	"URLVisible" : "www.google.com.ar",
  	"adDailyBudget" : 1,
  	"campaignID" : 39003,
  	"categID" : "1652",
  	"custID" : 66258610,
  	"maxCPC" : 0.15,
  	"price" : 15,
  	"refFrom" : "Reference owner",
  	"refID" : "Reference ID1",
  	"name":"Default",
  	"siteID" : "MLA",
  	"title" : "Title Test",
  	"type" : "P",
  	"brand" : "ML",
  	"status":"A",
  	"invalidLink":false,
  	"image":"11139334.1343237431263",
	"uriImage": "http://static.mlstatic.com/org-img/chico/img/logo-mercadolibre.png"
}
{% endhighlight %}

## Sending the encoded image
The other way of doing this is to send the encoded bytes **(encodeBase64)** of an image in the **fileInput** attribute:

<pre class="terminal">
curl -i -H 'Accept:application/json' -H 'Content-Type:application/json' -X POST -d '
{
	"URLDestiny" : "http://www.google.com.ar",
  	"URLVisible" : "www.google.com.ar",
  	"adDailyBudget" : 1,
  	"campaignID" : 39003,
  	"categID" : "1652",
  	"custID" : 66258610,
  	"maxCPC" : 0.15,
  	"price" : 15,
  	"refFrom" : "Reference owner",
  	"refID" : "Reference ID1",
  	"siteID" : "MLA",
  	"title" : "Title Test",
  	"type" : "P",
  	"brand" : "ML",
	"fileInput":"/9j/4AAQSkZJRgABAQEASABIAAD/4QCARXhpZgAASUkqAAgAAAAEABoBBQABAAAAPgAAABsBBQABAAAARgAAACgBAwABAAAAAgAAAGmHBAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAAAAwAAkAcABAAAADAyMTAAoAcABAAAADAxMDABoAMAAQAAAP//AAAAAAAA/9sAQwACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwM/9sAQwEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAFAAcAwERAAIRAQMRAf/EABkAAAMAAwAAAAAAAAAAAAAAAAMFBgAHCf/EACgQAAICAgIBAQgDAAAAAAAAAAECAwQFEQAGElEHExYhMUGV1CJCUv/EABoBAAIDAQEAAAAAAAAAAAAAAAIEAAUGAQP/xAArEQACAQIDBgYDAQAAAAAAAAABAgMEEQAhMQUSQVFhYhMVIkJxkxQy0lL/2gAMAwEAAhEDEQA/AOveM6UbiZDs1eBM7Zt5fLjJYPIzOElWHIWYkNWbe4XCIB4tuM6/odtzCU2xfEVqlQJCZJN5HJztIwG43tNgBY3Q9v7Y19RtXwytOx3AEj3WUDK6KTvL7hc6izDu0xQYKr7L+wUJchUo1IFpx+9yMFqRonrqN/yl3Jrw+R04JRh81Yjj9DFsiriMiKosLsCbFepztbkwJU6gkYSq5dp00gRmJubAgXDfGWvafUOIGE9fB9f7k1qv1PGVqGHqze4v9nk8mmZ/FX8Kdd2+6uCJZR46IKpIDviaUNLtIstIgWMGzSG99AbRqTyIO+4tndVcZ4ZerqKABqlyzkXCcOV3YdQfSufAlTli59nlJMbg7uMryzSVsZmMlVqmxK8sgjisuqgu5JPLrYFOIadolJISR1FySbBjxxWbZk8WZZCBdkQmwsLlRwxJYCWTsdK31OjK0VCDL5l+3X0JUrFJlLTJRjYfSSZTtyPmkfoXQ8q6BmrIzSobKJJfFYcjK9owf9OP2/ynVlOH6xRSuKlx6ikfhjqI1u56Lw5t0U42Vd6x17Itj2v4WnZOK8Rjw8KERKuvFFGteIIBC/TYB1sDmjm2bSzbm/Gp3P1uBl0+OmlwDqBiiir6iLe3HYb2uevX5665nnhTnqljE3F7ZiIGsTQxrF2HFRDbXaabIZF+80Gyyf6XyT7qVVr4Xp5Py4RcgWdR70HEd6arzF14izNHKsyfjSmwJujH2N17W0bkbNwNxdAt1sjicnepWI7NO5m8nNVsRnavG9l2VlPoQeBsKdJYXkT1K0khB5gscHtmJopUR8mEaAjkd0YMehdYWSzPFVt1nv2JbVta2RvV0eaYl5H8Ip0UFmOzoc9fIaQMzAMCxLGzuoudTZWAz+MAu16kgKSpsABdEJsNBcqTlgvwL170yf5fJfs855LTd/2Sf3gfOKjs+uP+cZ8C9e9Mn+XyX7PJ5LTd/wBkn94nnFR2fXH/ADhzg8Hi8BQXG4isadKOSSURCR5CXlYyOzNIzMSzMSSTx6joYaOPw4VstydScybk3JJzOE6qplq38SVrtYDgNNMhYY//2Q=="
}' 'https://api.mercadolibre.com/mclics/productAd?access_token=$ACCESS_TOKEN'
</pre>

You will receive the following JSON response:

{% highlight javascript %}

{
	"URLDestiny" : "http://www.google.com.ar",
  	"URLVisible" : "www.google.com.ar",
  	"adDailyBudget" : 1,
  	"campaignID" : 39003,
  	"categID" : "1652",
  	"custID" : 66258610,
  	"maxCPC" : 0.14999999999999999,
  	"price" : 15,
  	"refFrom" : "Reference owner",
  	"refID" : "Reference ID1",
  	"name":"Default",
  	"siteID" : "MLA",
  	"title" : "Title Test",
  	"type" : "P",
  	"brand" : "ML",
  	"status":"A",
  	"invalidLink":false,
  	"image":"11139334.1343237431263",
	"fileInput":"/9j/4AAQSkZJRgABAQEASABIAAD/4QCARXhpZgAASUkqAAgAAAAEABoBBQABAAAAPgAAABsBBQABAAAARgAAACgBAwABAAAAAgAAAGmHBAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAAAAwAAkAcABAAAADAyMTAAoAcABAAAADAxMDABoAMAAQAAAP//AAAAAAAA/9sAQwACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwM/9sAQwEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAFAAcAwERAAIRAQMRAf/EABkAAAMAAwAAAAAAAAAAAAAAAAMFBgAHCf/EACgQAAICAgIBAQgDAAAAAAAAAAECAwQFEQAGElEHExYhMUGV1CJCUv/EABoBAAIDAQEAAAAAAAAAAAAAAAIEAAUGAQP/xAArEQACAQIDBgYDAQAAAAAAAAABAgMEEQAhMQUSQVFhYhMVIkJxkxQy0lL/2gAMAwEAAhEDEQA/AOveM6UbiZDs1eBM7Zt5fLjJYPIzOElWHIWYkNWbe4XCIB4tuM6/odtzCU2xfEVqlQJCZJN5HJztIwG43tNgBY3Q9v7Y19RtXwytOx3AEj3WUDK6KTvL7hc6izDu0xQYKr7L+wUJchUo1IFpx+9yMFqRonrqN/yl3Jrw+R04JRh81Yjj9DFsiriMiKosLsCbFepztbkwJU6gkYSq5dp00gRmJubAgXDfGWvafUOIGE9fB9f7k1qv1PGVqGHqze4v9nk8mmZ/FX8Kdd2+6uCJZR46IKpIDviaUNLtIstIgWMGzSG99AbRqTyIO+4tndVcZ4ZerqKABqlyzkXCcOV3YdQfSufAlTli59nlJMbg7uMryzSVsZmMlVqmxK8sgjisuqgu5JPLrYFOIadolJISR1FySbBjxxWbZk8WZZCBdkQmwsLlRwxJYCWTsdK31OjK0VCDL5l+3X0JUrFJlLTJRjYfSSZTtyPmkfoXQ8q6BmrIzSobKJJfFYcjK9owf9OP2/ynVlOH6xRSuKlx6ikfhjqI1u56Lw5t0U42Vd6x17Itj2v4WnZOK8Rjw8KERKuvFFGteIIBC/TYB1sDmjm2bSzbm/Gp3P1uBl0+OmlwDqBiiir6iLe3HYb2uevX5665nnhTnqljE3F7ZiIGsTQxrF2HFRDbXaabIZF+80Gyyf6XyT7qVVr4Xp5Py4RcgWdR70HEd6arzF14izNHKsyfjSmwJujH2N17W0bkbNwNxdAt1sjicnepWI7NO5m8nNVsRnavG9l2VlPoQeBsKdJYXkT1K0khB5gscHtmJopUR8mEaAjkd0YMehdYWSzPFVt1nv2JbVta2RvV0eaYl5H8Ip0UFmOzoc9fIaQMzAMCxLGzuoudTZWAz+MAu16kgKSpsABdEJsNBcqTlgvwL170yf5fJfs855LTd/2Sf3gfOKjs+uP+cZ8C9e9Mn+XyX7PJ5LTd/wBkn94nnFR2fXH/ADhzg8Hi8BQXG4isadKOSSURCR5CXlYyOzNIzMSzMSSTx6joYaOPw4VstydScybk3JJzOE6qplq38SVrtYDgNNMhYY//2Q=="
	}
{% endhighlight %}

**Congratulations!** you have created your first product Ad using the MELI API.