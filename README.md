## Foreword
Hi 👋 !  
This package has the only purpose to format the responses for express.

# Installation
```  
npm install express-standard-http-responses --save
```

# Environment used

`npm@8.5.1`  
`node@14.16.0`

# Example  
```ts
import {httpResponses} from "express-standard-http-responses";
import * as express from 'express';

const app = express();
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

app.get('/test', (req, res) => {
    return httpResponses(res).body({test: 'body'}).message('Information').success();
});

```

## Response example

```json
{
  "success": true,
  "info": "Information",
  "data": {
    "test": "body"
  }
}
```
-----

## Overwriting default response schema
```ts
import {httpResponses, setResponseSchema} from "express-standard-http-responses";
import * as express from 'express';

const app = express();
const port = process.env.port || 3000;

setResponseSchema({data: 'body', info: 'message'});
```

## New response schema
```json
{
    "success": true,
    "message": "Information",
    "body": {
        "test": "body"
    }
}
```

-----

# Methods

## Setting a body
```ts
httpResponses(res).body({test: 'body'});
```

## Setting a message

```ts
httpResponses(res).message('This is an example.');
```

## Codes 2xx

| Method    | Default message response |
|-----------|--------------------------|
| success   | none                     |
| created   | none                     |
| accepted  | none                     |
| noContent | none                     |

## Codes 3xx

| Method           | Default message response |
|------------------|--------------------------|
| multipleChoices  | none                     |
| movedPermanently | none                     |
| found            | none                     |
| seeOther         | none                     |

## Codes 4xx

| Method            | Default message response                                                                     |
|-------------------|----------------------------------------------------------------------------------------------|
| badRequest        | none                                                                                         |
| unauthorized      | `You are not authorized to access this ressource.`                                           |
| forbidden         | `Access is forbidden.`                                                                       |
| notFound          | `This item was not found.`                                                                   |
| methodNotAllowed  | `This method is not allowed for this ressource.`                                             |
| proxyAuthRequired | `A proxy authentication is required.`                                                        |
| requestTimeout    | `The client did not produce a request within the time that the server was prepared to wait.` |
| conflict          | `There is a conflict on the requested ressource.`                                            |
| gone              | `This ressource is no longer available.`                                                     |
| lengthRequired    | `Content length must be specified for this ressource.`                                       |
| teapot            | `I am a teapot.`                                                                             |
| misdirected       | `This server is not able to produce a response for the given request.`                       |
| unprocessable     | `The request was well-formed but was unable to be followed due to semantic errors.`          |
| locked            | `This ressource has been locked.`                                                            |
| tooManyRequests   | `You have sent too many requests in a given amount of time.`                                 |

## Codes 5xx

| Method              | Default message response                                                  |
|---------------------|---------------------------------------------------------------------------|
| internalError       | `An error occurred, try again later or report it to the developers team.` |
| notImplemented      | `This ressource is not implemented.`                                      |
| serviceUnavailable  | `The service is not available at this time, try again later.`             |
| insufficientStorage | `Unable to store the representation needed for to complete the request.`  |
| loopDetected        | `A loop was detected and the request has been aborted.`                   |