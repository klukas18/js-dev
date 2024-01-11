const fs = require('fs').promises;

const readTodos = async () => {
	try {
		const data = await fs.readFile('todos.json', 'utf-8');
		return JSON.parse(data);
	} catch (error) {
		console.log('Error reading file:', error.message);
		return [];
	}
};

module.exports = readTodos;
