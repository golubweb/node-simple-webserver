(function (global) {
    System.config({
        map: {
            app: 'app',

            '@angular/core':                        'npm:@angular/core/bundles/core.umd.js',
            '@angular/common':                      'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler':                    'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser':            'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic':    'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/animations':                  'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser':          'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/http':                        'npm:@angular/http/bundles/http.umd.js',
            '@angular/router':                      'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms':                       'npm:@angular/forms/bundles/forms.umd.js',

            'rxjs': '../node_modules/rxjs'
        },
        packages: {
            client: {
                main: './built/app.bundle.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
