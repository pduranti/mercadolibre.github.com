
JQTWEET = {
    // Set twitter username, number of tweets & id/class to append tweets
    user: 'MeliApi',
    numTweets: 5,
    appendTo: '#lastTweets',
    apiStatusDiv: '#apiStatus',
    feedStatusDiv: '#feedStatus',
 
    // core function of jqtweet
    loadTweets: function() {
        $.ajax({
            url: 'https://api.twitter.com/1/statuses/user_timeline.json/',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                screen_name: JQTWEET.user,
                include_rts: true,
                count: JQTWEET.numTweets,
                include_entities: true
            },
            success: function(data, textStatus, xhr) {
 
                 var html = '<div class="tweet">TWEET_TEXT<div class="time">AGO</div></div>';
                 

                 for (var i = 0; i < data.length; i++) {
                 var tweetText = data[i].text
                                    .replace('#apiStatus', 'API status: ')
                                    .replace('#feedStatus', 'Feed status: ')
                                    .replace('[red]', '')
                                    .replace('[yellow]', '')
                                    .replace('[green]', '');
                    $(JQTWEET.appendTo).append(
                        html.replace('TWEET_TEXT', JQTWEET.ify.clean(tweetText) )
                            .replace(/USER/g, data[i].user.screen_name)
                            .replace('AGO', JQTWEET.timeAgo(data[i].created_at) )
                            .replace(/ID/g, data[i].id_str)
                    );
                 }                  
            }   
 
        });
         
    }, 
    apiStatus: function() {
        $.ajax({
            url: 'http://search.twitter.com/search.json',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                q: 'from:MeliApi AND #apiStatus',
                rpp: 1  
            },
            success: function(data, textStatus, xhr) {
 
              var html = '<div class="tweet">STATUS_IMAGE TWEET_TEXT<div class="time">AGO</div></div>';
              
              var status = data.results;

              if(status.length == 1){
              
                var tweetText = status[0].text.replace('#apiStatus', '');
                
                $(JQTWEET.apiStatusDiv).html(
                    JQTWEET.ify.lightColor(tweetText).replace('TWEET_TEXT', JQTWEET.ify.clean(tweetText) )
                          + " " + JQTWEET.ify.statusText('API', tweetText)
                          .replace('AGO', JQTWEET.timeAgo(status[0].created_at) )
                    );
              
              }else {
                 $(JQTWEET.apiStatusDiv).html('<div class="tweet"><IMG src="/images/icn-green.png"/> API is UP</div>');
              }

            }   
        });
         
    }, 
    feedStatus: function() {
        $.ajax({
            url: 'http://search.twitter.com/search.json',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                q: 'from:MeliApi AND #feedStatus',
                rpp: 1  
            },
            success: function(data, textStatus, xhr) {
 
              var html = '<div class="tweet">STATUS_IMAGE TWEET_TEXT<div class="time">AGO</div></div>';
              var status = data.results;

              if(status.length == 1){

                var tweetText = status[0].text.replace('#feedStatus', '');
                
                $(JQTWEET.feedStatusDiv).html(
                    JQTWEET.ify.lightColor(tweetText).
                          replace('TWEET_TEXT', JQTWEET.ify.clean(tweetText) )
                          + " " + JQTWEET.ify.statusText('Feed', tweetText)
                          .replace('AGO', JQTWEET.timeAgo(status[0].created_at) )
                  );

              }else{
                 $(JQTWEET.feedStatusDiv).html('<div class="tweet"><IMG src="/images/icn-green.png"/> Feeds are up</div>');
              }    
            }
        });
    }, 
    /**
      * relative time calculator FROM TWITTER
      * @param {string} twitter date string returned from Twitter API
      * @return {string} relative time like "2 minutes ago"
      */
    timeAgo: function(dateString) {
        var rightNow = new Date();
        var then = new Date(dateString);
         
        if ($.browser.msie) {
            // IE can't parse these crazy Ruby dates
            then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
        }
 
        var diff = rightNow - then;
 
        var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;
 
        if (isNaN(diff) || diff < 0) {
            return ""; // return blank string if unknown
        }
 
        if (diff < second * 2) {
            // within 2 seconds
            return "right now";
        }
 
        if (diff < minute) {
            return Math.floor(diff / second) + " seconds ago";
        }
 
        if (diff < minute * 2) {
            return "about 1 minute ago";
        }
 
        if (diff < hour) {
            return Math.floor(diff / minute) + " minutes ago";
        }
 
        if (diff < hour * 2) {
            return "about 1 hour ago";
        }
 
        if (diff < day) {
            return  Math.floor(diff / hour) + " hours ago";
        }
 
        if (diff > day && diff < day * 2) {
            return "yesterday";
        }
 
        if (diff < day * 365) {
            return Math.floor(diff / day) + " days ago";
        }
 
        else {
            return "over a year ago";
        }
    }, // timeAgo()
     
     
    /**
      * The Twitalinkahashifyer!
      * http://www.dustindiaz.com/basement/ify.html
      * Eg:
      * ify.clean('your tweet text');
      */
    ify:  {
      link: function(tweet) {
        return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
          var http = m2.match(/w/) ? 'http://' : '';
          return '<a class="twtr-hyperlink" target="_blank" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
        });
      },
 
      at: function(tweet) {
        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
        });
      },
 
      list: function(tweet) {
        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g, function(m, userlist) {
          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/' + userlist + '">@' + userlist + '</a>';
        });
      },
 
      lightColor: function(tweet) {
        var match = tweet.match(/(^|\s+)\[(red|green|yellow)\](\ |$)/);
        var rsp = "";
        if (match) {
          if (match[2] == "red")
            rsp = '<IMG src="/images/icn-red.png"/>';
          else if (match[2] == "yellow")
            rsp = '<IMG src="/images/icn-yellow.png"/>';
          else if (match[2] == "green")
            rsp = '<IMG src="/images/icn-green.png"/>';
        };

        return rsp;
      },
      statusText: function(api, tweet) {
        var match = tweet.match(/(^|\s+)\[(red|green|yellow)\](\ |$)/);
        var rsp = api + " is ";
        if (match) {
          if (match[2] == "red")
            rsp += 'down';
          else if (match[2] == "yellow")
            rsp += 'having some problems';
          else if (match[2] == "green")
            rsp += 'up and running';
        };

        return rsp;
      },
      hash: function(tweet) {
        return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
          var rsp = "";
          if (hash != "red" && hash != "yellow" && hash != "green")
            rsp = '<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
          return before + rsp;
        });
      },
 
      clean: function(tweet) {
        return this.hash(this.at(this.list(this.link(tweet))));
      }
    } // ify
 
     
};
 

  window.onload = function() {
    // start jqtweet!
    JQTWEET.loadTweets();
    JQTWEET.apiStatus(); 
    JQTWEET.feedStatus(); 
  };

