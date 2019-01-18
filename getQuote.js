const parse = require('csv-parse');
const chalk = require('chalk');
const wrapAnsi = require('wrap-ansi');

const fs = require('fs');

const bookList = require('./bookList');

const get_book= bookIndex => {
	if (bookIndex) {
		return bookList[bookIndex];
	}
	const randInt = Math.floor(Math.random() * Math.floor(bookList.length));
	return bookList[randInt];
};

const getQuote = () => {
	const { path, title, author } = get_book();

	const highlights = [];
	fs.createReadStream(path)
		.pipe(parse({ delimiter: ',' }))
		.on('data', csvrow => {
			highlights.push(csvrow);
		})
		.on('end', () => {
			const numHighlights = highlights.length;
			const randomInt = Math.floor(Math.random() * Math.floor(numHighlights));
			const quote = highlights[randomInt][3];

			console.log(`${chalk.bgWhite.black.bold(title)} by ${chalk.blue(author)}`);
			console.log(wrapAnsi(quote, 80));
		})
		.on('error', (error) => {
			console.log(chalk.red(error));
		});
};

module.exports = getQuote;
