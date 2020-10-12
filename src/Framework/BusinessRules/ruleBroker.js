/**
 * @file ruleBroker.js
 * @module ruleBroker
 * @description Contains all the functions necessary to manage the business rules system.
 * @requires module:rulesLibrary
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/10/12
 * @copyright Copyright © 2020-_ by Seth Hollingsead. All rights reserved
 */
import * as rules from './rulesLibrary';
import * as b from '../Constants/basic.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var D = require('../Resources/data');

/**
 * @function bootStrapBusinessRules
 * @description Captures all of the business rules string-to-function call map data in the rulesLibrary and migrates that data to the D-Data structure.
 * This is important now because we are going to allow the client to define their own business rules seperate from the system defined business rules.
 * So we need a way to merge all client defined and system defined business rules into one location.
 * Then the rule broker will execute business rules from the D-Data structure and not the rules library per-say.
 * This will allow the system to expand much more dynamically and even be user-defined & flexible to client needs.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/10/12
 */
function bootStrapBusinessRules() {
  rules.initRulesLibrary();
};

/**
 * @function addClientRules
 * @description Merges client defined business rules with the system defined business rules.
 * @param {array<object>} clientRules The client rules that should be merged with the system rules.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/10/12
 */
function addClientRules(clientRules) {
  Object.assign(D[s.cBusinessRules], clientRules);
};

/**
 * @function processRules
 * @description Parse the given input Object/String/Integer/Data/Function through a set of business rules,
 * (Some rules do not support chaining); Where the rules are defined in the input rules map.
 * @param {string|integer|object|function} inputData The primary input data that should be processed by the business rule.
 * @param {string|integer|boolean|map} inputMetaData Additional meta-data that should be used when processing the business rule.
 * @param {array} rulesToExecute The name(s) of the rule(s) that should be executed for modding the input data.
 * @return {string|integer|object|function} A modified data Object/String/Integer/Boolean/Function
 * where the data has been modified based on the input data, input meta-data, and business rule(s) that was/were executed.
 * @author Seth Hollingsead
 * @date 2020/10/12
 */
export const processRules = function(inputData, inputMetaData, rulesToExecute) {
  let returnData = inputData;
  for (let rule in rulesToExecute) {
    if (rulesToExecute.hasOwnProperty(rule)) {
      let key = rule;
      let value = rulesToExecute[key];
      returnData = D[s.cBusinessRules][value](returnData, inputMetaData);
    }
  }
  return returnData;
};

export default {
  bootStrapBusinessRules,
  addClientRules,
  processRules
}
