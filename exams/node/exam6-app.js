/* [10 punktów] Napisz aplikację pozwalającą na przechowywanie w pliku listy zadań do wykonania (klasyczna lista TODO). Aplikacja powinna pozwalać na dodanie do listy nowego zadania, jak również wyświetlić zawartość całej listy. Przy uruchomieniu bez parametrów aplikacja powinna informować o możliwych parametrach wywołania.

zapis/odczyt wykonuj asynchronicznie
pamiętaj o obsłudze błędów
poinformuj użytkownika o poprawności wykonanych operacji
wydziel odczyt i zapis informacji do osobnych modułów
Sugeruje użyć modułu yargs z konstrukcją yargs.command.

Przykład wywołania programu:

> node app.js dodaj "napisac program na zaliczenie z NodeJS"
> node app.js lista */

const yargs = require('yargs');
const readTodos = require('./exam6-readtodos');
const writeTodos = require('./exam6-writetodos');

yargs
	.command(
		'add',
		'Add a new TODO with --todo flag',
		{ todo: { type: 'string', demandOption: true } },
		async (argv) => {
			try {
				const todos = await readTodos();
				todos.push(argv.todo);
				await writeTodos(todos);
				console.log(`TODO added successfully: ${argv.todo}`);
			} catch {
				console.log('Error adding TODO!');
			}
		}
	)
	// .command(
	// 	'remove',
	// 	'Remove a TODO using its index with --index flag',
	// 	{ index: { type: 'number', demandOption: true } },
	// 	async (argv) => {
	// 		try {
	// 			const todos = await readTodos();
	// 			if (argv.index >= 0 && argv.index < todos.length) {
	// 				const removed = todos.splice(argv.index, 1);
	// 				await writeTodos(todos);
	// 				console.log(`TODO removed: ${removed[0]}`);
	// 			} else {
	// 				console.log('Invalid index!');
	// 			}
	// 		} catch {
	// 			console.log('Error removing TODO!');
	// 		}
	// 	}
	// )
	.command('list', 'List all TODOS', async () => {
		try {
			const todos = await readTodos();
			console.log('Your TODOs:');
			todos.forEach((todo, index) => {
				console.log(`${index}. ${todo}`);
			});
		} catch {
			console.log('Error reading TODOs!');
		}
	})
	.demandCommand(1, 'You need at least one command to execute program!')
	.help().argv;

// Example: node exam6-app.js add "napisac program na zaliczenie z NodeJS"
