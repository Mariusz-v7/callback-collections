# callback-collections
Simple classes which allows to call a function when element is added to or removed from collection.

Features
--------
- add, get, remove elements from the collection
- set a callback function which will be called on add or remove element

Installation
------------
```
npm install callback-collections --save
```

Configuration
-------------
All compiled sources are under dist/main directory.

You should use dist/main/index.js as an entry point.

E.g. you can copy all files from dist/main and paste them under callback-collections in your lib directory,
then, if you use SystemJS, add an entry in map section:
```
map: { 'callback-collections':     'libs/callback-collections/index' }
```

Usage
-----
Collection of strings, with on-remove callback:

```typescript
import {RemoveCallbackCollection} from 'callback-collections';

let collection = new RemoveCallbackCollection<string>((el:string) => {
    console.log('removed element: ' + el);
});

// add element to collection (add() method returns a numeric value associated with inserted element)
let id = collection.add("test string");

//now, removing element under given id, wil result in "removed element: test string" message
collection.remove(id);
```

See more examples unter src/test directory.