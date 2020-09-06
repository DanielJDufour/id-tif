# id-tif
Identify a TIF File in a Variety of In-Memory Objects, including ArrayBuffer, Buffer, DataView, and Uint8Array

# install
```bash
npm install id-tif
```

# usage
```javascript
const idTIF = require("id-tif");

idTIF(buffer); // true
idTIF(arrayBuffer); // true
idTIF(dataView); // true
idTIF(uint8Array); // true
```