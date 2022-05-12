import {httpResponses} from "../index";
import * as express from 'express';

const app = express();
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

app.get('/test', (req, res) => {
    return httpResponses(res).body({test: 'body'}).message('Information').success();
});
