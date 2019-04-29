![Screenshot](top-image.png)

# Game of Thrones API

This was created during my time as a student at Code Chrysalis.
It's a simple CRUD API that allows you to show, add, edit and delete Game of Thrones character data.

## API

```js
characterName: String;
houseName: String;
characterImageThumb: String(URL);
characterImageFull: String(URL);
actorName: String;
killed: [String];
killedBy: [String];
```

## Install

Create a database

```
# create database got_api;
```

With [yarn](https://yarnpkg.com/en/) installed, run

```
$ yarn
```

```
$ yarn migrate
```

```
$ yarn start
```

## Acknowledgments

I used Game of Thrones character data from this repository:
[`jeffreylancaster/game-of-thrones`](https://github.com/jeffreylancaster/game-of-thrones)

## License

[MIT](https://choosealicense.com/licenses/mit/)
