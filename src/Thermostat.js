'use strict'

function Thermostat(){
  this.DEF_TEMP = 20;
  this.temperature = this.DEF_TEMP;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMP_PSM_ON = 25;
  this.MAXIMUM_TEMP_PSM_OFF = 32;
  this.powerSaving = true;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
};

Thermostat.prototype.showEnergyUsage = function() {
  if(this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) { 
    return "low-usage";
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAXIMUM_TEMP_PSM_ON){
    return "medium-usage";
  }
  return "high-usage";
}

Thermostat.prototype.getCurrentTemp = function () {
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function() {
  if (this.isMaxTemp()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMaxTemp = function(){
  if (this.isPowerSavingOn() === false) {
    return this.temperature === this.MAXIMUM_TEMP_PSM_OFF;
  }
  return this.temperature === this.MAXIMUM_TEMP_PSM_ON
}

Thermostat.prototype.isMinTemp = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.maxTemp = function () {
  return this._maxTemp;
};

Thermostat.prototype.isPowerSavingOn = function () {
  return this.powerSaving === true
};

Thermostat.prototype.switchPowerSavingModeOff = function () {
  this.powerSaving = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  this.powerSaving = true;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEF_TEMP;
};

