# lodash-deepmerge
Manage deeply merging objects as well as the arrays they contain.

### Usage (example)

```
const deepMerge = require('lodash-deepmerge');

const object = { a: [{ b: 2 }, { d: 4 }] };
const other = { a: [{ c: 3 }, { e: 5 }] };

console.log(deepMerge.merge(object,other))
