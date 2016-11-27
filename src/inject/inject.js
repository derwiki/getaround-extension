chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      console.log("Loading GetAround Buddy...");

      var arr = $(".rental-price-info").map(function(idx, ele) {
        var price = $(ele).text().split("\n")[1].trim();
        var decimal = parseFloat(price.substring(1));
        return decimal;
      });
      var n = arr.length;
      var sum = 0;
      while (n--) { sum += arr[n] }

      var t = $('.card-text-details:first').text();
      $('.card-text-details:first').text(t + ' (current $' + sum + ')');
    }
	}, 12000);
});
