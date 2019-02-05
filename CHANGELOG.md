# Path Framework Changelog

Please refer to this document when updating applications using the Path Framework to newer Path versions.

## 0.5

#### New features
* [Button groups](https://github.com/innovad/path#button-groups) are supported 
* [Breadcrumb](https://github.com/innovad/path#breadcrumb) is supported as a GUI model element
* [Form default values](https://github.com/innovad/path#form-default-values) are supported
* [File Upload](https://github.com/innovad/path#file-upload) field on forms added

#### Changes
* Font Awesome 5.x update
    * Include the all.min.css Font Awesome CSS file in your application
    * Include v4-shims.min.css if you need legacy icon support
    * Compare with [Path Example Application commit](https://github.com/innovad/path-example/commit/d6b7f1ab3ceabbaf03ad55b76dabef41a54112f8) 
* Breadcrumbs are refreshed after a form save
* [Refactor your path classes imports](https://github.com/innovad/path-example/commit/7c0bfecdb3104d45cbdb88eee2c8af966bd24ed8) 
* [Exclude path unit tests from compilation](https://github.com/innovad/path-example/commit/7c0bc439785088efc7ea88b3860b46b22e427e22) 

## 0.4

#### Changes
* Angular 6.x migration: 
    * Migrate file .angular-cli.json to angular.json
    * Update karma.conf.js if unit tests are used 
    * Update package.json: node 8.12 / npm 6.4 or later are required, update path, typescript versions 
    * Update tsconfig.app.json: angular-cli now requires dependent libraries to be included in the build explicitly    
    * Compare with [Path Example Application commit](https://github.com/innovad/path-example/commit/b1b3bf7ca1584276cd55815ce955eb9c56e241e7)
* Path Framework uses TSLint to check code style. You may use TSLint in your application as well.
    * Update tslint.json
    * Include tslint-angular dependency in package.json
    * Check and update your code according to tslint
    * Compare with [Path Example Application commit](https://github.com/innovad/path-example/commit/24e9ad96d9e678fa353051d00d1b4d2e92e08757) 