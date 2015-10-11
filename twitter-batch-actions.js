// General structure of the scripts, doing the mouse clicks and the scrolling:

setInterval(function() {
    t = $(".following").find(".follow-button");
    if (!t[0]) {
        window.scrollTo(0,
            $(document).height());
    } else {
        console.log(t.attr("class"));
        t.trigger("click");
    }
}, 100)

// Run from browser console, on the relevant pages. Tested in Firefox.

// Twitter - Unfollow All (https://twitter.com/following)
setInterval(function(){t=$(".following").find(".follow-button");if(!t[0]){window.scrollTo(0,$(document).height());}else{console.log(t.attr("class"));t.trigger("click");}},100)

// Twitter - Unblock All (https://twitter.com/settings/blocked)
setInterval(function(){t=$(".blocked").find(".follow-button");if(!t[0]){window.scrollTo(0,$(document).height());}else{console.log(t.attr("class"));t.trigger("click");}},100)

// Twitter - Unmute All (https://twitter.com/settings/muted_following and/or https://twitter.com/settings/muted)
setInterval(function(){t=$(".muting").find(".unmute-button");if(!t[0]){window.scrollTo(0,$(document).height());}else{console.log(t.attr("class"));t.trigger("click");}},100)

// Tweetdeck - Unmute All (https://tweetdeck.twitter.com > Settings > Mute)
setInterval(function(){t=$(".list-filter").find(".btn-negative");if(!t[0]){window.scrollTo(0,$(document).height());}else{console.log(t.attr("class"));t.trigger("click");}},100)
