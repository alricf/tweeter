/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    tweets.map(tweet => {
      const t = createTweetElement(tweet);
      $('section.tweets-container').prepend(t);
    });
  };

  const createTweetElement = function(tweetData) {
    /* Your code for creating the tweet element */
    let $tweet = $(`
      <article class="tweet">
      <header>
        <p class="avatar-name">
        <img src="${tweetData.user.avatars}">
        &nbsp;&nbsp;${tweetData.user.name}</p>
        <p>${tweetData.user.handle}</p>
      </header>
      <section>
        <p>${tweetData.content.text}</p>
      </section>
      <footer>
        <p>${tweetData.created_at}</p>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
`);
    return $tweet;
  };
  renderTweets(data);
});