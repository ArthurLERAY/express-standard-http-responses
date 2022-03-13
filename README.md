## Foreword
Hi 👋 !  
This package has the only purpose to format the responses using express.  
**Do not hesitate to contribute if you see any improvement to make**  

# Installation
```  
npm install express-standard-http-responses --save
```

# Example  
```js
const express = require('express');
const httpResponses = require('express-standard-http-responses');


const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

app.get('/', (req, res) => {
    return httpResponses.success(res, {hello: 'world'}, 'This is an example');
});
```