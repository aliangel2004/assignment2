 
  'use strict'

var chai = require('chai');
var expect = chai.expect;

var dataTypes = require('../app/data1.js');

describe("Data types tests ", function() {
 describe("Case for some falsy values", function() {

   it("should return 'no value' for null", function() {
     expect(dataTypes.dataTypes(null)).to.equal('no value');
   });

   it("should return 'no value' for undefined", function() {
     expect(dataTypes.dataTypes(undefined)).to.equal('no value');
   });

 });

 describe("Case for booleans", function() {

   it("should return true for `true`", function() {
     expect(dataTypes.dataTypes(true)).to.be.true;
   });

   it("should return false for `false`", function() {
     expect(dataTypes.dataTypes(false)).to.be.false;
   });

 });

 describe("Case for Numbers", function() {

   it("should return 'less than 100' for 44", function() {
     expect(dataTypes.dataTypes(44)).to.be('less than 100');
   });

   it("should return 'more than 100' for 144", function() {
     expect(dataTypes.dataTypes(144)).to.be('more than 100');
   });

   it("should return 'equal to 100' for 100", function() {
     expect(dataTypes.dataTypes(100)).to.be('equal to 100');
   });


 });

 describe("Case for Strings", function() {

   it("should return the length of `tergiversate`", function() {
     expect(dataTypes.dataTypes('tergiversate')).to.be(12);
   });

   it("should return the length of an empty string", function() {
     expect(dataTypes.dataTypes('')).to.be(0);
   });

   it("should return the length of `555`", function() {
     expect(dataTypes.dataTypes('555')).to.be(3);
   });

 });

 describe("Case for arrays", function() {

   it("should return `2` for `[0, 1, 2]`", function() {
     expect(dataTypes.dataTypes([0, 1, 2])).to.be(2);
   });

   it("should return `undefined` for `[]`", function() {
     expect(dataTypes.dataTypes([])).not.to.beDefined();
   });

   it("should return `undefined` for `[4, 9]`", function() {
     expect(dataTypes.dataTypes([4, 9])).not.to.beDefined();
   });

 });


 describe("Case for functions", function() {

   it("should call the `callback` function with argument true, and return `called callback`", function() {
     var callback = function(arg) {
       expect(arg).to.beTruthy();
       if(arg === true) {
         return 'called callback';
       }
     };
     expect(dataTypes.dataTypes(callback)).to.be('called callback');
   });

 });


