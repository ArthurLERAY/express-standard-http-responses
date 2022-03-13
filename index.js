'use strict';

module.exports = {

    // 2xx codes

    success: (res, data, message) => {
        return res.status(200).send({success: true, info: message ? message : '', data: data});
    },
    created: (res, data, message) => {
        return res.status(201).send({success: true, info: message ? message : '', data: data});
    },
    accepted: (res, data, message) => {
        return res.status(202).send({success: true, info: message ? message : '', data: data});
    },
    noContent: (res) => {
        return res.status(204).send({success: true});
    },

    // 3xx codes

    multipleChoices: (res, message) => {
        return res.status(300).send({success: true, info: message});
    },
    movedPermanently: (res, newURI) => {
        return res.status(301).send({success: true, info: {newURI: newURI}});
    },
    found: (res, newURL) => {
        return res.status(302).send({success: true, info: {newURL: newURL}});
    },
    seeOther: (res, newURI) => {
        return res.status(303).send({success: true, info: {newURL: newURI}});
    },

    // 4xx codes

    badRequest: (res, message) => {
        return res.status(400).send({success: false, info: message});
    },
    unauthorized: (res, message) => {
        return res.status(401).send({
            success: false,
            info: message ? message : 'You are not authorized to access this ressource.'
        });
    },
    forbidden: (res, message) => {
        return res.status(403).send({success: false, info: message ? message : 'Access is forbidden.'});
    },
    notFound: (res, message) => {
        return res.status(404).send({success: false, info: message ? message : 'This item was not found.'});
    },
    methodNotAllowed: (res, message) => {
        return res.status(405).send({
            success: false,
            info: message ? message : 'This method is not allowed for this ressource.'
        });
    },
    proxyAuthRequired: (res, message) => {
        return res.status(407).send({success: false, info: message ? message : 'A proxy authentication is required.'});
    },
    requestTimeout: (res, message) => {
        return res.status(408).send({
            success: false,
            info: message ? message : 'The client did not produce a request within the time that the server was prepared to wait.'
        });
    },
    conflict: (res, message) => {
        return res.status(409).send({
            success: false,
            info: message ? message : 'There is a conflict on the requested ressource.'
        });
    },
    gone: (res, message) => {
        return res.status(410).send({
            success: false,
            info: message ? message : 'This ressource is no longer available.'
        });
    },
    lengthRequired: (res, message) => {
        return res.status(411).send({
            success: false,
            info: message ? message : 'Content length must be specified for this ressource.'
        });
    },
    teapot: (res, message) => {
        return res.status(418).send({success: false, info: message ? message : 'I am a teapot.'});
    },
    misdirected: (res, message) => {
        return res.status(421).send({
            success: false,
            info: message ? message : 'This server is not able to produce a response for the given request.'
        });
    },
    unprocessable: (res, message) => {
        return res.status(422).send({
            success: false,
            info: message ? message : 'The request was well-formed but was unable to be followed due to semantic errors.'
        });
    },
    locked: (res, message) => {
        return res.status(423).send({success: false, info: message ? message : 'This ressource has been locked.'});
    },
    tooManyRequests: (res, message) => {
        return res.status(429).send({
            success: false,
            info: message ? message : 'You have sent too many requests in a given amount of time.'
        });
    },

    // 5xx codes

    internalError: (res, message) => {
        return res.status(500).send({
            success: false,
            info: message ? message : 'An error occurred, try again later or report it to the developers team.'
        });
    },
    notImplemented: (res, message) => {
        return res.status(501).send({success: false, info: message ? message : 'This ressource is not implemented.'});
    },
    serviceUnavailable: (res, message) => {
        return res.status(503).send({
            success: false,
            info: message ? message : 'The service is not available at this time, try again later.'
        });
    },
    insufficientStorage: (res, message) => {
        return res.status(507).send({
            success: false,
            info: message ? message : 'Unable to store the representation needed for to complete the request.'
        });
    },
    loopDetected: (res, message) => {
        return res.status(508).send({
            success: false,
            info: message ? message : 'A loop was detected and the request has been aborted.'
        });
    },
} 