var totalScore = 0;
var wins = 0;
var losses = 0;


window.onload = function () {

  reset();

  $('.butterflies').click(function () {
    totalScore += parseInt($(this).attr("value"));
    $('.totalScore').text(totalScore);


    if (totalScore == scoreToMatch) {
      wins += 1;
      $(".wins").text(wins);
      reset();
    }
    else if (totalScore > scoreToMatch) {
      losses += 1;
      $(".losses").text(losses);
      reset()
    }
  });

};

function reset() {
  $('.butterflies').each(function (index) {
    $(this).attr("value", Math.floor(Math.random() * Math.floor(11)) + 1);
  });
  $('.scoreToMatch').text(Math.floor(Math.random() * Math.floor(101) + 19));
  scoreToMatch = $('.scoreToMatch').text();
  totalScore = 0;
  $('.totalScore').text(totalScore);
}
