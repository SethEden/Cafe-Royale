/**
 * @file rulesLibrary.js
 * @module rulesLibrary
 * @description Contains all of the system defined business rules as an array between function names and function calls.
 * @requires module:characterGeneration
 * @requires module:stringGeneration
 * @requires module:stringParsing
 * @requires module:system-constants
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/10/12
 * @copyright Copyright © 2020-_ by Seth Hollingsead. All rights reserved
 */
import * as characterGeneration from './Rules/characterGeneration';
import * as stringGeneration from './Rules/stringGeneration';
import * as stringParsing from './Rules/stringParsing';
import * as s from '../Constants/system.constants';
var D = require('../Resources/data');

/**
 * @function initRulesLibrary
 * @description Initializes the business rules function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/10/12
 */
export const initRulesLibrary = function() {
  D[s.cBusinessRules] = {};
  D[s.cBusinessRules] = {

  };
};
