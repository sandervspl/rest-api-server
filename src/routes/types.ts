import express from 'express';

export interface RouteRegister {
  route: string;
  callback: express.RequestHandler;
  middleware?: express.RequestHandler | express.RequestHandler[];
  method: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options';
}

export interface SubrouteRegister {
  route: string;
  router: express.Router;
}
