/* Based on data in the financial.json file. Use the starter file financial.js
Create an object that will give us data about:
  1. How much money was spent in 2014
  2. Earnings per company
  3. Spendings per transaction type
  4. Spendings by month
  5. Spendings per day of the week */

const financialData = require('./financial.json');

// console.log('Financial data: ' + getFiancialObject());

// function getFinancialObject() {
// 	const financialObject = {};
// 	// TODO (create functions for calculations below)

// 	return financialObject;
// }

// TODO (util functions)

// 1. How much money was spent in 2014

function findSpendingsByYear(year) {
	return financialData
		.filter((payment) => payment.detailsOfPayent.date.includes(year))
		.reduce((acc, transaction) => {
			const spendings = Number(transaction.cost);
			return (result = acc += spendings);
		}, 0);
}
console.log(findSpendingsByYear(2014));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 2. Spendings per company

function findSpendingsPerCompany(company) {
	return financialData
		.filter((transaction) =>
			transaction.detailsOfPayent.company.includes(company)
		)
		.reduce((acc, transaction) => {
			const spendings = Number(transaction.cost);
			return (result = Math.round((acc += spendings)));
		}, 0);
}
// console.log(findSpendingsPerCompany('CODAX'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function calculateTotalCostByCompany(data) {
	// Use reduce to accumulate the total cost for each company
	const totalCostByCompany = data.reduce((acc, transaction) => {
		const { cost } = transaction;
		const { company } = transaction.detailsOfPayent;
		// If the company doesn't exist in the accumulator, create it with the current cost
		if (!acc[company]) {
			acc[company] = parseFloat(cost);
		} else {
			// If the company already exists, add the current cost to the existing total
			acc[company] += parseFloat(cost);
		}
		return acc;
	}, {});

	return totalCostByCompany;
}
console.log(calculateTotalCostByCompany(financialData));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 3. Spendings per transaction type

function findSpendingsPerTransactionType(data) {
	const spendingPerType = data.reduce((acc, transaction) => {
		const { cost } = transaction;
		const { Type } = transaction.detailsOfPayent;

		if (!acc[Type]) {
			acc[Type] = parseFloat(cost);
		} else {
			acc[Type] += parseFloat(cost);
		}
		return acc;
	}, {});
	return spendingPerType;
}

console.log(findSpendingsPerTransactionType(financialData));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 4. Spendings by month

function findSpendingsByMonth(data) {
	const monthlySpendings = data.reduce((acc, transaction) => {
		const { cost } = transaction;
		const date = transaction.detailsOfPayent.date.split('-');
		const month = parseInt(date[1], 10);

		if (!acc[month]) {
			acc[month] = parseFloat(cost);
		} else {
			acc[month] += parseFloat(cost);
		}
		return acc;
	}, {});
	return monthlySpendings;
}

console.log(findSpendingsByMonth(financialData));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 5. Spendings per day of the week

function findSpendingsByDay(data) {
	const dailySpendings = data.reduce((acc, transaction) => {
		const { cost } = transaction;
		const date = transaction.detailsOfPayent.date.split('-');
		const day = parseInt(date[0], 10);

		if (!acc[day]) {
			acc[day] = parseFloat(cost);
		} else {
			acc[day] += parseFloat(cost);
		}
		return acc;
	}, {});
	return dailySpendings;
}
console.log(findSpendingsByDay(financialData));
