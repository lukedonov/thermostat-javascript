'use strict'

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Is set to 20 degrees by default', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it('Has a minimum temperature of 10', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10);
  });

  it('can increase temperature', function() {
    thermostat.increaseTemp();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });
  
  it('can decrease temperature', function() {
    thermostat.decreaseTemp();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  it('can switch psm off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  describe('when power saving mode is on', function(){
    it('has a max temp of 25 degrees', function(){
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25);
    })
  })

  describe('when power saving mode is off', function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.getCurrentTemp()).toEqual(32);
    });
  });

  it('can be used to reset the default temperature', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.increaseTemp
    }
    thermostat.resetTemp();
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });
  describe("checking the energy usage", function() {
    describe("rwhen the temp is below 18 degrees", function() { 
      it("is low-usage", function() {
        for (var i=0; i < 3; i++) {
          thermostat.decreaseTemp();
        }
        expect(thermostat.showEnergyUsage()).toEqual("low-usage");
      });
    });

    describe('when the temp is between 18-25 degrees', function() {
      it('is medium usage', function() {
        expect(thermostat.showEnergyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temp is higher than 25', function () {
      it('is considered high usage', function() {
        thermostat.powerSaving = false;
        for(var i=0; i < 10; i++) {
          thermostat.increaseTemp();
        };
        expect(thermostat.showEnergyUsage()).toEqual('high-usage')
      })
    })
  });
});

