/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // Creating and Rendering Tweets Code
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
        <p>${timeago.format(tweetData.created_at)}</p>
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

  // Posting Tweets
  $(".container form").submit(function(event) {
    event.preventDefault();
    // Validation checks
    const tweetText = $("textarea#tweet-text").val();
    if (!tweetText) {
      return alert("Error: Tweet text empty");
    };
    if (tweetText.length > 140) {
      return alert("Error: Maximum characters for tweet exceeded - 140 characters max allowed");
    };

    const formData = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: formData,
    });
  });

  // Fetching Tweets
  const loadTweets = () => {
    $.get("/tweets", function(data) {
      renderTweets(data);
    });
  };
  loadTweets();

});