# Game of Thrones API

This was created during my time as a student at Code Chrysalis. It's a simple CRUD API that allows you to show, add, edit and delete Game of Thrones characters data.

## API

You can get the following data:

```js
characterName: String;
houseName: String;
characterImageThumb: URL;
characterImageFull: URL;
actorName: String;
killed: [String];
killedBy: [String];
```

## Install

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

I used Game of Thrones characters data from this repository:
[`jeffreylancaster/game-of-thrones`](https://github.com/jeffreylancaster/game-of-thrones)

## License

MIT
