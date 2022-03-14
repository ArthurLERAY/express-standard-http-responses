import * as express from 'express';
export const httpResponses = {

    // 2xx codes

    success: (res: express.Response, data: object, message: string = null) => {
        return res.status(200).send({success: true, info: message, data: data});
    },
    created: (res: express.Response, data: object, message: string = null) => {
        return res.status(201).send({success: true, info: message ? message : '', data: data});
    },
    accepted: (res: express.Response, data: object, message: string = null) => {
        return res.status(202).send({success: true, info: message ? message : '', data: data});
    },
    noContent: (res: express.Response) => {
        return res.status(204).send({success: true});
    },

    // 3xx codes

    multipleChoices: (res: express.Response, message: string) => {
        return res.status(300).send({success: true, info: message});
    },
    movedPermanently: (res: express.Response, newURI: string) => {
        return res.status(301).send({success: true, info: {newURI: newURI}});
    },
    found: (res: express.Response, newURL: string) => {
        return res.status(302).send({success: true, info: {newURL: newURL}});
    },
    seeOther: (res: express.Response, newURI: string) => {
        return res.status(303).send({success: true, info: {newURL: newURI}});
    },

    // 4xx codes

    badRequest: (res: express.Response, message: string = null) => {
        return res.status(400).send({success: false, info: message});
    },
    unauthorized: (res: express.Response, message: string = null) => {
        return res.status(401).send({
            success: false,
            info: message ? message : 'You are not authorized to access this ressource.'
        });
    },
    forbidden: (res: express.Response, message: string = null) => {
        return res.status(403).send({success: false, info: message ? message : 'Access is forbidden.'});
    },
    notFound: (res: express.Response, message: string = null) => {
        return res.status(404).send({success: false, info: message ? message : 'This item was not found.'});
    },
    methodNotAllowed: (res: express.Response, message: string = null) => {
        return res.status(405).send({
            success: false,
            info: message ? message : 'This method is not allowed for this ressource.'
        });
    },
    proxyAuthRequired: (res: express.Response, message: string = null) => {
        return res.status(407).send({success: false, info: message ? message : 'A proxy authentication is required.'});
    },
    requestTimeout: (res: express.Response, message: string = null) => {
        return res.status(408).send({
            success: false,
            info: message ? message : 'The client did not produce a request within the time that the server was prepared to wait.'
        });
    },
    conflict: (res: express.Response, message: string = null) => {
        return res.status(409).send({
            success: false,
            info: message ? message : 'There is a conflict on the requested ressource.'
        });
    },
    gone: (res: express.Response, message: string = null) => {
        return res.status(410).send({
            success: false,
            info: message ? message : 'This ressource is no longer available.'
        });
    },
    lengthRequired: (res: express.Response, message: string = null) => {
        return res.status(411).send({
            success: false,
            info: message ? message : 'Content length must be specified for this ressource.'
        });
    },
    teapot: (res: express.Response, message: string = null) => {
        return res.status(418).send({success: false, info: message ? message : 'I am a teapot.'});
    },
    misdirected: (res: express.Response, message: string = null) => {
        return res.status(421).send({
            success: false,
            info: message ? message : 'This server is not able to produce a response for the given request.'
        });
    },
    unprocessable: (res: express.Response, message: string = null) => {
        return res.status(422).send({
            success: false,
            info: message ? message : 'The request was well-formed but was unable to be followed due to semantic errors.'
        });
    },
    locked: (res: express.Response, message: string = null) => {
        return res.status(423).send({success: false, info: message ? message : 'This ressource has been locked.'});
    },
    tooManyRequests: (res: express.Response, message: string = null) => {
        return res.status(429).send({
            success: false,
            info: message ? message : 'You have sent too many requests in a given amount of time.'
        });
    },

    // 5xx codes

    internalError: (res: express.Response, message: string = null) => {
        return res.status(500).send({
            success: false,
            info: message ? message : 'An error occurred, try again later or report it to the developers team.'
        });
    },
    notImplemented: (res: express.Response, message: string = null) => {
        return res.status(501).send({success: false, info: message ? message : 'This ressource is not implemented.'});
    },
    serviceUnavailable: (res: express.Response, message: string = null) => {
        return res.status(503).send({
            success: false,
            info: message ? message : 'The service is not available at this time, try again later.'
        });
    },
    insufficientStorage: (res: express.Response, message: string = null) => {
        return res.status(507).send({
            success: false,
            info: message ? message : 'Unable to store the representation needed for to complete the request.'
        });
    },
    loopDetected: (res: express.Response, message: string = null) => {
        return res.status(508).send({
            success: false,
            info: message ? message : 'A loop was detected and the request has been aborted.'
        });
    },
}