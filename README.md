# de.schulte360.npm.letter-count
This is a calculator which counts the number of letters in a text, useful for your tweets on Twitter, as well as a multitude of other applications.

Whether it is Snapchat, Twitter, Facebook, Yelp or just a note to co-workers or business officials, the number of actual characters matters. What you say may not be as important as how you say it. And how many characters you use.

Local installation: `npm i --save letter-count`
```javascript
const Util = require('util'), LC = require('letter-count');

Util.log(LC.letterCount("Hamburg - Germany"));
```
Global installation: `npm i -g letter-count`
```javascript
letter-count hamburg
```

[www.npmjs.com/package/letter-count](https://www.npmjs.com/package/letter-count)