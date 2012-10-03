---
layout: 2columns
title: Platform Health
menu: developer-tools
categories: 
- SDKs 
- More Tools
menu: 
- Tools
tags: 
---
<script src="/javascripts/twitter.js">
</script>


<div class="ch-g1-2">
    <div class="ch-leftcolumn" >
        <div id="apiStatus" style="border: 1px solid #efefef;padding: 10px; font-size: 20px;">
        </div>
    </div>
</div>
<div class="ch-g1-2">
    <div class="ch-rightcolumn">
        <div id="feedStatus" style="border: 1px solid #efefef;padding: 10px; font-size: 20px;">
        </div>
    </div>
</div>

<div class="ch-g1">
    <div id="lastTweets">
    </div>
</div>
     

<style>
#lastTweets {
    width: 600px;
    font-family: georgia;
    font-size: 15px;
    color: #333333;
    padding: 10px;
}
 
#lastTweets .tweet {
    margin: 0 auto 15px auto;
    padding: 0 0 15px 0;
    border-bottom: 1px dotted #ccc;
}
 
#lastTweets .tweet a {
    text-decoration: none;
    color: #13c9d0;
}
 
#lastTweets .tweet a:hover {
    text-decoration: underline;
}
 
#lastTweets .tweet .time {
    font-size: 10px;
    font-style: italic;
    color: #666666;
}
</style>

