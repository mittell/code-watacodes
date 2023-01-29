const button = document.getElementById('button');

button.addEventListener('click', function () {
	fetch('http://localhost:3000/')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);

			const header = document.querySelector('h1');
			header.innerHTML = data.title;

			const text = document.querySelector('.lead');
			text.innerHTML = data.text;
		})
		.catch((error) => console.log(error));
});
