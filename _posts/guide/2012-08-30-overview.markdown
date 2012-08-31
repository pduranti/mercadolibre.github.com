---
layout: guides
title: TTFHW
menu: quickstart
---


<div class="contents">
<h5>Table of Contents</h5>

<dl>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('register')">Register an application in MELI</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('profile')">Retrieves your own profile</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('apis')">Public &amp; Private APIs</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('response')">Response</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('next')">How to continue</a></dt>
</dl>
</div>

## Register an application in MELI {#register}



The very first thing you'll probably want to do is to create an _application_ for MELI. When you do that you get a _client ID_ and a _client secret_, which are very important to use when [authenticating and authorizing](/authentication-and-authorization).

When you create an application you can start requesting users to grant you access to their information on their behalf, and offer them in exchange some cool features.

So before continuing, make sure you are registered as a user. In case you want to create a user, do it now by browsing to [http://www.mercadolibre.com](http://www.mercadolibre.com).

Now that you have a registered user, go to the [application manager](http://applications.mercadolibre.com) and create an application as described below:

## Retrieves your own profile {#profile}

Using our [SDKs](/javascript-sdk) you be able to retrieve your own user profile using your application. 

<center>
  <a href="/images/application-details.png">
      <img src="/images/application-detail.png" alt="App details">
  </a>
</center>


<div id="code">
	<ul>
		<li><a href="#javascript">Javascript</a></li>
		<li><a href="#php">PHP</a></li>
		<li><a href="#java">Java</a></li>
	</ul>
	<div>
		<div id="javascript">
Initialize the API with your client_id as follows:

{% highlight javascript %}
MELI.init({client_id: 10115});
{% endhighlight %}
				

That's it. Afterwards, this line of code will show the First Name of your registration in MELI:

{% highlight javascript %}
MELI.get(
  "/users/me",{},
    function(data) { alert("Hello "+data[2].first_name) }
);
{% endhighlight %}
		</div>
		<div id="php">
Initialize the SDK with your __client_id__ as follows:

{% highlight php %}
// Try to put this code at the top
require '../src/meli.php';

// Create our Application instance (replace this with your appId and secret).
$meli = new Meli(array(
    'appId'         => 10115,
    'secret'        => 9ykscT65bzPBNQ2SrLqdapp5HbDYddzX,
));
			{% endhighlight %}
		</div>
		<div id="java">
			{% highlight java %}

Meli m = new Meli(10115, "9ykscT65bzPBNQ2SrLqdapp5HbDYddzX");

m.authorize("the received code", "http://somecallbackurl");

FluentStringsMap params = new FluentStringsMap();
params.add("access_token", m.getAccessToken());
Response response = m.get("/users/me", params);

{% endhighlight %}
		</div>
	</div>
</div>

<script type="text/javascript">
	$("#code").tabNavigator();
</script>

## Public &amp; Private APIs {#apis}


Our APIs are [RESTful](http://es.wikipedia.org/wiki/Representational_State_Transfer), which means that every url provides information on different business entities. We call this _resource_. The way you can operate on resources is by using HTTP _methods_ (see [HTTP Methods](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9)).  

Some of these basic methods are:
* GET: Retrieve information identified by the resource (see [GET](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3)).
* POST: Create a new resource (see [POST](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5)).
* PUT: Change a resource (see [PUT](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.6)).
* DELETE: Delete a resource (see [DELETE](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.7)).


Our APIs will give you lots of information. Some of it is private, some of it is public. To access to public information you can use just an URL:

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

But if you need to access to private informtaion you will get access only if you have an access token:

<pre class="terminal">$ curl https://api.mercadolibre.com/users/me?access_token=...</pre>


## Authentication &amp; Authorization {#authentication-authorization}

To allow an application to access to your data you need to be [authenticated](/authentication) in MercadoLibre and confirm using [authorization](/authorization) stage. 

<img src="/images/authentication-authorization.png" alt="Authentication" />


## Response {#response}


{% highlight javascript %}
{
   "id":57249824,
   "nickname":"TEST_VENTA_MLA1",
   "registration_date":"2011-05-31T13:26:09.000-04:00",
   "first_name":"Test",
   "last_name":"Test",
   "country_id":"AR",
   "email":"test310511_5959@robot.com",
   "identification":{
      "type":"DNI",
      "number":"27687784"
   },
   "phone":{
      "area_code":"11",
      "number":"4242-9990",
      "extension":"8202",
      "verified":false
   },
   "alternative_phone":{
      "area_code":"",
      "number":"46154789",
      "extension":""
   },
   "user_type":"normal",
   "logo":null,
   "points":35,
   "site_id":"MLA",
   "permalink":"http://perfil.mercadolibre.com.ar/TEST_VENTA_MLA1",
   "seller_experience":"ADVANCED",
   "seller_reputation":{
      "level_id":"5_green",
      "power_seller_status":null,
      "transactions":{
         "period":"12 months",
         "total":601,
         "completed":539,
         "canceled":62,
         "ratings":{
            "positive":1,
            "negative":0,
            "neutral":0
         }
      }
   },
   "buyer_reputation":{
      "canceled_transactions":0,
      "transactions":{
         "period":"historic",
         "total":22,
         "completed":1,
         "canceled":{
            "total":0,
            "paid":0
         },
         "unrated":{
            "total":6,
            "paid":0
         },
         "not_yet_rated":{
            "total":15,
            "paid":0,
            "units":15
         }
      }
   },
   "status":{
      "site_status":"active",
      "list":{
         "allow":true,
         "codes":[

         ],
         "immediate_payment":{
            "required":false,
            "reasons":[

            ]
         }
      },
      "buy":{
         "allow":true,
         "codes":[

         ],
         "immediate_payment":{
            "required":false,
            "reasons":[

            ]
         }
      },
      "sell":{
         "allow":true,
         "codes":[

         ],
         "immediate_payment":{
            "required":true,
            "reasons":[
               "mandatory"
            ]
         }
      },
      "billing":{
         "allow":true,
         "codes":[

         ]
      },
      "mercadopago_tc_accepted":true,
      "mercadopago_account_type":"personal",
      "mercadoenvios":"not_accepted",
      "immediate_payment":true
   },
   "credit":{
      "consumed":470301.16,
      "credit_level_id":"MLA1"
   }
}
{% endhighlight %}



## Try by yourself {#try}

<div class="ch-g1-3">
  <div class="ch-leftcolumn">
    <input id="target" type="text" value="" /><BR>    
    <input id="target" type="text" value="" /><BR>    
    <input id="target" type="text" value="" /><BR>    
    <input id="target" type="text" value="" /><BR>    
    <input id="target" type="text" value="" /><BR>    
    <input id="target" type="text" value="" /><BR>    
  </div>
</div>
<div class="ch-g2-3">
  <div class="ch-rightcolumn">
{% highlight javascript %}
{
   "id":57249824,
   "nickname":"TEST_VENTA_MLA1",
   "registration_date":"2011-05-31T13:26:09.000-04:00",
   "first_name":"Test",
   "last_name":"Test",
   "country_id":"AR",
   "email":"test310511_5959@robot.com",
   "identification":{
      "type":"DNI",
      "number":"27687784"
   },
...
}
{% endhighlight %}
  </div>
</div>

<center>
  <input id="target" type="text" value="10115" />
  <input class="ch-btn ch-btn-small" type="button" id="show-my-info" value="Show my information"/>
</center>


<script>
    $(document).ready(function() {
 
        $('#show-my-info').click(function() {
          var ID = parseInt($('#target').val());
          console.log(ID);

          MELI.init({client_id: ID});
          MELI.logout();

          MELI.login(function() {

            MELI.get('/users/me', null, function(data) {
              
              var userInfo = JSON.stringify(data[2]);
              console.log(userInfo);
            });

          });
        });
     });
</script>


## How to continue {#next}

Going through the [Authentication](/authentication) section will give you the knowledge about registration and gign-in. Reading [Authorization](/authorization) section you will see how applications grants and permission scopes. Platform uses [OAuth 2.0](http://tools.ietf.org/pdf/draft-ietf-oauth-v2-12.pdf) for authentication and authorization. Our [Developer Tools](/javascript-sdk) hide all the complexity of OAuth 2.0, but you can read [OAuth](/oauth-introduction) section to implement your connection tool. 

[Documentation](/guides) section shows all available guides. If you are interested in to search items using MELI's APIs visit [Searching](/search-visual-introduction) section. If you are buy an item you can visit [Buyer](/bookmarks) guides. But if you are thinking in sell over MercadoLibre visit [Selling](/listing-introduction) guides.

When you're ready, feel free to dive right into the [API reference](/guide-appendix) section to learn about the resources available via the MELI API.

Visit [Forums](/discuss) section to know more about community. 

