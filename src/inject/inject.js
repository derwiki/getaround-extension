var earnings = function() {
  if ($('.past-activity .rental-price-info').length === 0) {
    console.log('.');
    return setTimeout(earnings, 500);
  }

  var arr = $(".rental-price-info").map(function(idx, ele) {
    var price = $(ele).text().split("\n")[1].trim();
    var decimal = parseFloat(price.substring(1));
    return decimal;
  });
  var n = arr.length;
  var sum = 0;
  while (n--) { sum += arr[n] }

  var $carInfoBox = $('.card-text-details:first');
  $carInfoBox.append('<div>Current: $' + sum + '</div>');
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      console.log("Loading GetAround Buddy...");
      earnings();
    }

	}, 10);
});
