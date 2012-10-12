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
- More Tools
---
<script src="/javascripts/twitter.js">
</script>


<div class="status_bar">
    <div id="status_color_api">
        <div id="apiStatus" class="status">
        </div>
    </div>
</div>

<div class="status_bar">
    <div id="status_color_api">
        <div id="feedStatus" class="status">
        </div>
    </div>
</div>

<div class="ch-g1">
    <div class="SubTitles">Recent News</div>
    <div id="lastTweets">
    </div>
</div>
     

<style>
.status {
    border: 1px solid #efefef;
    padding: 30px; 
    font-size: 24px;
}

.status_bar {
    width: 100%;
    margin-bottom: 20px;
}

.SubTitles {
    color: #DC7B1C; 
    font-size: 18px; 
    font-weight: bold; 
    padding-bottom: 15px;
    margin-top: 20px;
}

.red {
    background-color: #FF7773;
}

.yellow {
    background-color: #FFDA40;
}

.green {
    background-color: #74E868;
}

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

