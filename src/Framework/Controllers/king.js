/**
 * @file king.js
 * @module king
 * @description Contains all the functions to manage the entire application framework at the highest level.
 * Also provides an interface to easily manage all of the application features & various functionality from a single point of entry.
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/10/12
 * @copyright Copyright © 2020-_ by Seth Hollingsead. All rights reserved
 */
import loggers from '../Executioner/loggers';
import * as b from '../Constants/basic.constants';
import * as g from '../Constants/generic.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var D = require('../Resources/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function processRootPath
 * @description Processes the root path of the application using business rules.
 * @NOTE: By calling: path.resolve(__dirname); This does not return the true root path of the application.
 * It returns the path to the currently executing file, or the file that was executed first.
 * which is "C:/<AppName>/Application/<AppName>/"
 * But what we really need for the root path is just "C:/<AppName>/"
 * @param {string} systemRootPath The root path as returned by calling: path.resolve(__dirname);
 * @return {string} The true root path of the application.
 * @author Seth Hollingsead
 * @date 2020/10/12
 */
function processRootPath(systemRootPath) {
  let rules = {};
  rules[0] = s.cparseSystemRootPath;
  ruleBroker.bootStrapBusinessRules();
  barronCommander.bootStrapCommands();
  let rootPath = ruleBroker.processRules(systemRootPath, '', rules);
  return rootPath;
};

/**
 * @function consoleLog
 * @description This is just a wrapper for the loggers.consoleLog function.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string|boolean|integer|object} message The message or data content that should be dumped to the output.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/10/12
 */
function consoleLog(classPath, message) {
  loggers.consoleLog(classPath, message);
};

export default {
  processRootPath,
  consoleLog
};
