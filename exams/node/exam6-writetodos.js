const fs = require('fs').promises;

const writeTodos = async (todos) => {
	try {
		const data = JSON.stringify(todos);
		await fs.writeFile('todos.json', data, 'utf-8');
	} catch (error) {
		console.log('Error writing file:', error.message);
	}
};

module.exports = writeTodos;
