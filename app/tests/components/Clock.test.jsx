var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var ReactTestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock',()=>{
   it('should exist',()=>{
       expect(Clock).toExist()
   });
    describe('render',()=>{
       it('should display time',()=>{
           var clock = ReactTestUtils.renderIntoDocument(<Clock totalSeconds = {129}/>);
           var $el = $(ReactDOM.findDOMNode(clock));
           var actualText = $el.find('.clock-text').text();
           var expectedValue = '02:09';

           expect(actualText).toBe(expectedValue);
       });
    });

    describe('FormatSeconds',()=>{
        it('should format seconds',()=>{
            var clock = ReactTestUtils.renderIntoDocument(<Clock/>);
            var InputSeconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(InputSeconds);
            expect(actual).toBe(expected);
        });
        it('should format minutes and seconds which are less then 10',()=>{
            var clock = ReactTestUtils.renderIntoDocument(<Clock/>);
            var InputSeconds = 65;
            var expected = '01:05';
            var actual = clock.formatSeconds(InputSeconds);
            expect(actual).toBe(expected);
        });
    });

});