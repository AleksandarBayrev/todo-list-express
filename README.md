# express-ts-template
## Express Typescript Template

### Initial project preparation
1. npm install
2. npm start:webpack

### Configuration files
* For server: src/server/server.config.ts (check typings for IServerConfiguration and extend it as needed.)
* For FE client: src/server/app/app.config.ts (check typings for IApplicationConfiguration and extend it as needed.)
* For pm2: edit ecosystem.config.js to change application name and start script (if you make changes, the default is ./build/server.js)
* For other environment variables change the environmentConfigFilename file.

### Notes for the main application configuration:
* This is the interface:
``export interface IApplicationConfiguration {``
    ``applicationName: string``
    ``viewsPath: string``
    ``publicStaticRoutePath: string``
    ``contentType: string``
    ``assets: IAssets``
    ``memoryCacheUrl: string``
    ``bodyLimit: string``
    ``useDb: boolean``
    ``environmentConfigFilename: string``
``}``

### To add routes
1. Create a new folder in the routes folder and name it as you wish with an index.ts inside
2. Configure endpoints
3. Export the new route as follows:`export { router as yourNewRoute }`
4. Open src/server/app/startup/mapRoutes.ts and add a mapping for your newly created route: `app.use('/yournewroute', yourNewRoute)`