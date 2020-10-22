/**
 * @file configurator.js
 * @module configurator
 * @description Contains the functions necessary to set and get configuration settings from the shared data structure.
 * @requires module:loggers
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires data
 * @author Seth Hollingsead
 * @date 2020/10/16
 * @copyright Copyright © 2020-_ by Seth Hollingsead. All rights reserved
 */
import loggers from './loggers';
import * as w from '../Constants/word.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var D = require('../Resources/data');

/**
 * @function setConfigurationSetting
 * @description Sets a configuration setting on the configuration sub-tree data structure stored on the D-data-structure.
 * @param {string} configurationName The key of the configuration setting.
 * @param {string} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/10/16
 */
function setConfigurationSetting(configurationName, configurationValue) {
  D[w.cConfiguration][configurationName] = configurationValue;
};

/**
 * @function getConfigurationSetting
 * @description Gets a configuration value based on the configuration name.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean} The value of whatever was stored in the D-data-structure sub-tree.
 * @author Seth Hollingsead
 * @date 2020/10/16
 */
function getConfigurationSetting(configurationName) {
  let returnConfigurationValue;
  if (D[w.cConfiguration] !== undefined) {
    if (D[w.cConfiguration][configurationName] !== undefined) {
      returnConfigurationValue = D[w.cConfiguration][configurationName]
    } else {
      returnConfigurationValue = undefined;
    }
  } else {
    returnConfigurationValue = undefined;
  }
  return returnConfigurationValue;
};

export default {
  setConfigurationSetting,
  getConfigurationSetting
};
