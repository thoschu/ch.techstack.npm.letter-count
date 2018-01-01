# de.schulte360.npm.letter-count
This is a calculator which counts the number of letters in a text, useful for your tweets on Twitter, as well as a multitude of other applications.

Whether it is Snapchat, Twitter, Facebook, Yelp or just a note to co-workers or business officials, the number of actual characters matters. What you say may not be as important as how you say it. And how many characters you use.

Local installation:
```javascript
const Util = require('util'), LC = require('letter-count');

Util.log(LC.letterCount("Hamburg - Germany"));
```
Global installation:
```javascript
letter-count hamburg
```