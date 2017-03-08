var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var ReactTestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls',()=>{
    it('should exist',()=>{
        expect(Controls).toExist();
    });

    describe('render shows button',()=>{
       it('should show Pause Button',()=>{
            var controls = ReactTestUtils.renderIntoDocument(<Controls countdownStatus = 'started'/>);
           var $el = $(ReactDOM.findDOMNode(controls));
           var $pauseButton = $el.find('button:contains(Pause)');

           expect($pauseButton.length).toBe(1);
       });

        it('should show Start Button',()=>{
            var controls = ReactTestUtils.renderIntoDocument(<Controls countdownStatus = 'paused'/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    });
});