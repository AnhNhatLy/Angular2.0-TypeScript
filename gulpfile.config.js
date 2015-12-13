'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.source = './src/';
        this.sourceApp = this.source + 'app/';
        this.tsOutputPath = this.source + '/dist';
        // Read js from combine type script
       
        this.allJavaScript = [this.source + '/dist/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './tools/typings/';
        this.libraryTypeScriptDefinitions = './tools/typings/**/*.ts';

        // Read and combine sass 
        this.allCss = this.source + '/dist/**/*.css';
        this.allScss = this.sourceApp + '/assets/**/*.scss';

        // html 
        this.allHtml = this.sourceApp + '/**/*.html';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
