import 'zone.js/dist/zone-node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync, readFileSync } from 'fs';
function setBrowserGlobalsr(distFolder) {
    const template = readFileSync(join(distFolder, 'index.html')).toString();
    const domino = require('domino');
    const win = domino.createWindow(template);
    global.window = win;
    global.Node = win.Node;
    global.document = win.document;
    global.navigator = win.navigator;
    global.Event = win.Event;
    global.Event.prototype = win.Event.prototype;
    global.window.cookieconsent = { initialise: () => console.warn('Cookie consent is not working on server side') };
}
// The Express app is exported so that it can be used by serverless Functions.
export function app() {
    const server = express();
    const distFolder = join(process.cwd(), 'dist/condor-v2/browser');
    const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
    setBrowserGlobalsr(distFolder);
    // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
    server.engine('html', ngExpressEngine({
        bootstrap: AppServerModule,
    }));
    server.set('view engine', 'html');
    server.set('views', distFolder);
    // Example Express Rest API endpoints
    // server.get('/api/**', (req, res) => res.status(404).send('data requests are not yet supported'));
    // Serve static files from /browser
    server.get('*.*', express.static(distFolder, {
        maxAge: '1y'
    }));
    // All regular routes use the Universal engine
    server.get('*', (req, res) => {
        res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
    });
    return server;
}
function run() {
    const port = process.env.PORT || 4010;
    // Start up the Node server
    const server = app();
    server.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
    run();
}
export * from './src/main.server';
//# sourceMappingURL=server.js.map