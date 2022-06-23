import {httpResponses} from "express-standard-http-responses";
import * as express from 'express';

const app = express();
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

app.get('/test', (req, res) => {
    res.header('Authorization', 'test');
    return httpResponses(res).body({body: {nested: "content"}}).message('Information').created();
});
