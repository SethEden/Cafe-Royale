#!/usr/bin/env node

/**
 * @file build.js
 * @module build
 * @description This is the main init for the build process for the application.
 * This includes the build which uses Babel to tanspile the code down from
 * ES6 (ECMA Script 6) syntax to JavaScript Common syntax, and all non-code files
 * including generated documentation are copied to the bin folder under the same nested folder structure.
 * It also includes the release process where the compiled code & non-code files (Configuration & Documentation)
 * are packaged up into a single zip file and saved in the Release folder.
 * @requires module:build-constants
 * @requires module:system-constants
 * @requires module:generic-constants
 * @requires module:basic-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/10/12
 * @copyright Copyright © 2020-_ by Seth Hollingsead. All rights reserved
 */
import * as c from './Constants/build.constants';
import * as s from '../../Framework/Constants/system.constants';
import * as g from '../../Framework/Constants/generic.constants';
import * as b from '../../Framework/Constants/basic.constants';
var path = require('path');
var D = require('../../Framework/Resources/data');
global.appRoot = path.resolve(__dirname);
var rootPath = '';
var copyResult = false;
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function bootStrapApplicationDeployment
 * @description Setup all the application data and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/10/12
 */
function bootStrapApplicationDeployment() {
  rootPath = path.resolve(__dirname);
  rootPath = king.processRootPath(rootPath);
};

/**
 * @function deployApplication
 * @description This is the main function to deploy the application.
 * The function copies all non-code files from the src/Application/<MyAppName>/Resource/ folder to the
 * bin/Application/<MyAppName>/Resources/ folder.
 * Finally all the transpiled code and non-code files are packaged together into a zip file,
 * with the date-time stamp and version number. This forms either a path or a release.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/10/12
 */
function deployApplication() {

};

/**
 * @function releaseApplication
 * @description Determines if the current version number is higher than the release archive of zip files.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/10/12
 */
function releaseApplication() {

};

bootStrapApplicationDeployment();
deployApplication();
releaseApplication();
