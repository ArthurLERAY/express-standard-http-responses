import {Response} from "express";
import {IResponse} from "./interfaces/interfaces";

export const httpResponses = (res: Response, {info, body}: IResponse = {}) => ({
    body: (body: object) => {
        return httpResponses(res, {body: body, info: info});
    },
    message: (information: string) => {
        return httpResponses(res, {body: body, info: information});
    },

    // 2xx codes

    success: () => {
        return res.status(200).send({
            success: true,
            info: info,
            data: body
        });
    },
    created: () => {
        return res.status(201).send({
            success: true,
            info: info,
            data: body
        });
    },
    accepted: () => {
        return res.status(202).send({
            success: true,
            info: info,
            data: body
        });
    },
    noContent: () => {
        return res.status(204).send({
            success: true,
            info: info,
            data: body
        });
    },

    // 3xx codes

    multipleChoices: () => {
        return res.status(300).send({
            success: true,
            info: info,
            data: body
        });
    },
    movedPermanently: () => {
        return res.status(301).send({
            success: true,
            info: info,
            data: body
        });
    },
    found: () => {
        return res.status(302).send({
            success: true,
            info: info,
            data: body
        });
    },
    seeOther: () => {
        return res.status(303).send({
            success: true,
            info: info,
            data: body
        });
    },

    // 4xx codes

    badRequest: () => {
        return res.status(400).send({
            success: false,
            info: info,
            data: body
        });
    },
    unauthorized: () => {
        return res.status(401).send({
            success: false,
            info: info ? info : 'You are not authorized to access this ressource.',
            data: body
        });
    },
    forbidden: () => {
        return res.status(403).send({
            success: false,
            info: info ? info : 'Access is forbidden.',
            data: body
        });
    },
    notFound: () => {
        return res.status(404).send({
            success: false,
            info: info ? info : 'This item was not found',
            data: body
        });
    },
    methodNotAllowed: () => {
        return res.status(405).send({
            success: false,
            info: info ? info : 'This method is not allowed for this ressource.',
            data: body
        });
    },
    proxyAuthRequired: () => {
        return res.status(407).send({
            success: false,
            info: info ? info : 'A proxy authentication is required.',
            data: body
        });
    },
    requestTimeout: () => {
        return res.status(408).send({
            success: false,
            info: info ? info : 'The client did not produce a request within the time that the server was prepared to wait.',
            data: body
        });
    },
    conflict: () => {
        return res.status(409).send({
            success: false,
            info: info ? info : 'There is a conflict on the requested ressource.',
            data: body
        });
    },
    gone: () => {
        return res.status(410).send({
            success: false,
            info: info ? info : 'This ressource is no longer available.',
            data: body
        });
    },
    lengthRequired: () => {
        return res.status(411).send({
            success: false,
            info: info ? info : 'Content length must be specified for this ressource.',
            data: body
        });
    },
    teapot: () => {
        return res.status(418).send({
            success: false,
            info: info ? info : 'I am a teapot',
            data: body
        });
    },
    misdirected: () => {
        return res.status(421).send({
            success: false,
            info: info ? info : 'This server is not able to produce a response for the given request.',
            data: body
        });
    },
    unprocessable: () => {
        return res.status(422).send({
            success: false,
            info: info ? info : 'The request was well-formed but was unable to be followed due to semantic errors.',
            data: body
        });
    },
    locked: () => {
        return res.status(423).send({
            success: false,
            info: info ? info : 'This ressource has been locked.',
            data: body
        });
    },
    tooManyRequests: () => {
        return res.status(429).send({
            success: false,
            info: info ? info : 'You have sent too many requests in a given amount of time.',
            data: body
        });
    },

    // 5xx codes

    internalError: () => {
        return res.status(500).send({
            success: false,
            info: info ? info : 'An error occurred, try again later or report it to the developers team.',
            data: body
        });
    },
    notImplemented: () => {
        return res.status(501).send({
            success: false,
            info: info ? info : 'This ressource is not implemented.',
            data: body
        });
    },
    serviceUnavailable: () => {
        return res.status(503).send({
            success: false,
            info: info ? info : 'The service is not available at this time, try again later.',
            data: body
        });
    },
    insufficientStorage: () => {
        return res.status(507).send({
            success: false,
            info: info ? info : 'Unable to store the representation needed for to complete the request.',
            data: body
        });
    },
    loopDetected: () => {
        return res.status(508).send({
            success: false,
            info: info ? info : 'A loop was detected and the request has been aborted.',
            data: body
        });
    },
});