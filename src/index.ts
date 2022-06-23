import {Response} from "express";
import {IResponse} from "./interfaces/interfaces";

export const httpResponses = (res: Response, {message, body}: IResponse = {}) => ({

    // Methods

    body: (body: object) => {
        return httpResponses(res, {body: body, message: message});
    },
    message: (newMessage: string) => {
        return httpResponses(res, {body: body, message: newMessage});
    },

    send: (statusCode: number) => {
        if (message) body = {...body, ...{message: message}};
        return res.status(statusCode).send(body);
    },

    // 2xx codes

    success: () => {
        return httpResponses(res, {body: body, message: message}).send(200);
    },
    created: () => {
        return httpResponses(res, {body: body, message: message}).send(201);
    },
    accepted: () => {
        return httpResponses(res, {body: body, message: message}).send(202);
    },
    noContent: () => {
        return httpResponses(res, {body: body, message: message}).send(204);
    },

    // 3xx codes

    multipleChoices: () => {
        return httpResponses(res, {body: body, message: message}).send(300);
    },
    movedPermanently: () => {
        return httpResponses(res, {body: body, message: message}).send(301);
    },
    found: () => {
        return httpResponses(res, {body: body, message: message}).send(302);
    },
    seeOther: () => {
        return httpResponses(res, {body: body, message: message}).send(303);
    },

    // 4xx codes

    badRequest: () => {
        return httpResponses(res, {body: body, message: message}).send(400);
    },
    unauthorized: () => {
        return httpResponses(res, {body: body, message: message ? message : 'You are not authorized to access this ressource.'}).send(401);
    },
    forbidden: () => {
        return httpResponses(res, {body: body, message: message ? message : 'Access is forbidden.'}).send(403);
    },
    notFound: () => {
        return httpResponses(res, {body: body, message: message ? message : 'This item was not found.'}).send(404);
    },
    methodNotAllowed: () => {
        return httpResponses(res, {body: body, message: message ? message : 'This method is not allowed for this ressource.'}).send(405);
    },
    proxyAuthRequired: () => {
        return httpResponses(res, {body: body, message: message ? message : 'A proxy authentication is required.'}).send(407);
    },
    requestTimeout: () => {
        return httpResponses(res, {body: body, message: message ? message : 'The client did not produce a request within the time that the server was prepared to wait.'}).send(408);
    },
    conflict: () => {
        return httpResponses(res, {body: body, message: message ? message : 'There is a conflict on the requested ressource.'}).send(409);
    },
    gone: () => {
        return httpResponses(res, {body: body, message: message ? message : 'This ressource is no longer available.'}).send(410);
    },
    lengthRequired: () => {
        return httpResponses(res, {body: body, message: message ? message : 'Content length must be specified for this ressource.'}).send(411);
    },
    teapot: () => {
        return httpResponses(res, {body: body, message: message ? message : 'I am a teapot.'}).send(418);
    },
    misdirected: () => {
        return httpResponses(res, {body: body, message: message ? message : 'This server is not able to produce a response for the given request.'}).send(421);

    },
    unprocessable: () => {
        return httpResponses(res, {body: body, message: message ? message : 'The request was well-formed but was unable to be followed due to semantic errors.'}).send(422);

    },
    locked: () => {
        return httpResponses(res, {body: body, message: message ? message : 'This ressource has been locked.'}).send(423);

    },
    tooManyRequests: () => {
        return httpResponses(res, {body: body, message: message ? message : 'You have sent too many requests in a given amount of time.'}).send(429);
    },

    // 5xx codes

    internalError: () => {
        return httpResponses(res, {body: body, message: message ? message : 'An error occurred, try again later or report it to the developers team.'}).send(500);
    },
    notImplemented: () => {
        return httpResponses(res, {body: body, message: message ? message : 'This ressource is not implemented.'}).send(501);
    },
    serviceUnavailable: () => {
        return httpResponses(res, {body: body, message: message ? message : 'The service is not available at this time, try again later.'}).send(503);
    },
    insufficientStorage: () => {
        return httpResponses(res, {body: body, message: message ? message : 'Unable to store the representation needed for to complete the request.'}).send(507);
    },
    loopDetected: () => {
        return httpResponses(res, {body: body, message: message ? message : 'A loop was detected and the request has been aborted.'}).send(508);
    },
});