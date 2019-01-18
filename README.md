## get-quote

cli that returns a random quote from the files specified in bookList.js

## installation
```
$ npm link
```

## usage

```
$ get-quote
```

## Add book/quote collection
add to `bookList.js`:
```
{
	title: <title>,
	author: <author>,
	path: <>
}
``
path is to .csv with quote at 4th column

## TODO
- parse author and title from un-formatted header
- use gmail api to fetch kindle file from inbox
- add support for custom journal entries
- auto look for files in ./books/
- add cli options
- specify book or author
- explore surrounding quotes
