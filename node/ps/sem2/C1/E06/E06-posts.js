const express = require('express');
const router = express.Router();

let posts = [
	{
		title: '',
		body: '',
	},
];

//dodawanie nowego postu
router.post('/add', (request, response) => {
	const { title, body } = request.body;
	const newPost = {
		title,
		body,
	};
	posts.push(newPost);
	response.status(201).json(newPost);
	console.log('Dodano nowy post!');
});

// zwracanie wszystkich postów
router.get('/', (request, response) => {
	response.json(posts);
	console.log('Wyświetlono wszystkie posty!');
});

// wyświetlanie pojedynczego postu
router.get('/:index', (request, response) => {
	const index = Number(request.params.index) - 1;
	const post = posts[index];

	if (!post) {
		response.status(404).send('Nie znaleziono postu o tym numerze!');
	} else {
		response.json(post);
		console.log(`Wyświetlono post o numerze: ${index + 1}`);
	}
});

// usuwanie postu
router.delete('/:index', (request, response) => {
	const index = Number(request.params.index) - 1;
	if (index < 0 || index >= posts.length) {
		response.status(404).send('Nie znaleziono postu o tym numerze!');
	} else {
		const deletedPost = posts.splice(index, 1);
		response.status(200).json(deletedPost);
		console.log(`Usunięto post o numerze: ${index + 1}`);
	}
});

module.exports = router;
