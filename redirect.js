window.addEventListener('click', function (e) {
	for (var elem = e.target; elem; elem = elem.parentElement)
		if (elem.tagName === 'A') {
			var path = elem.getAttribute('href');
			if (path.indexOf('//') === -1 && !path.startsWith('/contest')) {
				e.preventDefault();
				location = 'https://loj.ac' + path;
				return;
			}
		}
})
