---
layout: firststep
title: Applications
---

##Getting Authorized Applications 

To get all the applications authorized by a user just use a GET request with the user_id and the access token. 

<pre class="terminal">
GET https://api.mercadolibre.com/users/{user_id}/applications?access_token={...}
</pre>

The response would be an array of applications with the following format:

{% highlight javascript %}
[
  - {
    "user_id": "26317316",
    "app_id": "13795",
    "date_created": "2012-12-20T15:38:27.000-04:00",
    "scopes": - [
      "read",
      "write",
    ],
   },
]
{% endhighlight %}

<br />

###Fields description

- `user_id` - The user identifier.
- `app_id` - The application identifier.
- `date_created` - Date when the authorization was created.
- `scopes` - permissions given to the application: read, write and offline_access. 

##Removing Authorized Applications

To remove any application you must specify the application id, the user id, and the access token. Just doing a DELETE request using this query:

<pre class="terminal">
DELETE https://api.mercadolibre.com/users/{user_id}/applications/{app_id}?access_token={...}
</pre>

The response should be: 

{% highlight javascript %}
{
	"user_id":"{user_id}",
	"app_id":"{app_id}",
	"msg":"Autorización eliminada"
}
{% endhighlight %}
