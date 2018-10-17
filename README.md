# REST API Server Boilerplate

## Getting started
```
$ git clone https://github.com/sandervspl/rest-api-server
```

```
$ cd rest-api-server && npm i
```

Configure api and database details in `src/config/apiconfig.ts` & `src/config/Secret.ts` before running.

Start development server
```
$ npm run dev
```

Go to `{host}:{port}/api/v1/` on an app like Postman and you should be good to go.

## Deployment
Create a build for production, this will add a `/dist` folder to the root with all bundles.  
```
$ npm run build
```

Run the server file to start server:
```
$ npm run start
```
