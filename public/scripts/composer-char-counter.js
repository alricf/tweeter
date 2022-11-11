$(document).ready(function() {
  $("textarea#tweet-text").on("input", function() {
    const inputChars = this.value.length;
    const charsAllowed = 140 - inputChars;
    const targetCounterElement = $(this).next(".button-count").find(".counter");
    if (charsAllowed < 0) {
      targetCounterElement.css("color", "red");
    }
    if (charsAllowed >= 0) {
      targetCounterElement.css("color", "#545149");
    }
    targetCounterElement.html(charsAllowed);
  });
});