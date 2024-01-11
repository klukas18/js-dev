const yargs = require('yargs');
const readTodos = require('./exam6-readtodos');
const writeTodos = require('./exam6-writetodos');

yargs
	.command(
		'add',
		'Add a new TODO',
		{ todo: { type: 'string', demandOption: true } },
		async (argv) => {
			const todos = await readTodos();
			todos.push(argv.todo);
			await writeTodos(todos);
			console.log(`TODO added successfully: ${argv.todo}`);
		}
	)
	.command(
		'remove',
		'Remove a TODO using its index',
		{ index: { type: 'number', demandOption: true } },
		async (argv) => {
			const todos = await readTodos();
			if (argv.index >= 0 && argv.index < todos.length) {
				const removed = todos.splice(argv.index, 1);
				await writeTodos(todos);
				console.log(`TODO removed: ${removed[0]}`);
			} else {
				console.log('Invalid index!');
			}
		}
	)
	.command('list', 'List all TODOS', async () => {
		const todos = await readTodos();
		console.log('Your TODOs:');
		todos.forEach((todo, index) => {
			console.log(`${index}. ${todo}`);
		});
	})
	.demandCommand(1, 'You need at least one command to execute program!')
	.help().argv;
