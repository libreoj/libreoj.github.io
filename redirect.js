window.addEventListener('click', function (e) {
	if (e.target.tagName === 'A') {
		var path = e.target.getAttribute('href');
		if (path.indexOf('//') === -1 && !path.startsWith('/contest')) {
			e.preventDefault();
			location = 'https://loj.ac' + path;
		}
	}
})
