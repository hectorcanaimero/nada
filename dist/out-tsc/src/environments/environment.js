// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
    production: false,
    v1: {
        url: 'https://marketing.condor.com.br/api',
        key: ''
    },
    v2: {
        url: 'https://painel.condor.com.br',
    },
    news: {
        url: 'https://teste.condor.com.br/news/wp-json/wp/v2',
        key: 'Basic Y29uZG9yOmFkbWluMTIzIUAj'
    },
    blog: {
        url: 'https://teste.condor.com.br/blog/wp-json/wp/v2',
        key: 'Basic Y29uZG9yOmFkbWluMTIz',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=environment.js.map