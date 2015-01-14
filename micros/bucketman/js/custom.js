(function() {

	var statBoxes = document.querySelectorAll('.donation-stats > div');
	var statTexts = document.querySelectorAll('.donation-stats > div p');

	if (window.innerWidth <= 768) {
		for (var i = 0; i < statBoxes.length; i++) {
			var statBox = statBoxes[i];

			statBox.classList.remove('col-xs-3');
			statBox.classList.add('col-xs-12');
		}

		for (var j = 0; statTexts.length; j++) {
			var statText = statTexts[j];

			statText.classList.add('col-xs-6');
		}
	}

})();