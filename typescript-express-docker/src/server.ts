import express, { Request, Response } from 'express';

const server = express();

server.get('/healthcheck',(_req: Request, res: Response)=>{
    res.sendStatus(200);
})

export { server }