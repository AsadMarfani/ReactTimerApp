var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: 'stopped'
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({ count: 0 });
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function () {
        this.timer = setInterval(()=> {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
            if(newCount === 0) {
                this.setState({
                    countdownStatus: 'stopped'
                })
            }
        },1000);
    },
    _handleCountdownTimer: function (totalSeconds) {
        this.setState({
           count: totalSeconds,
            countdownStatus: 'started'
        });
    },
    _handleStatusChange: function(newStatus) {
      this.setState({
          countdownStatus: newStatus
      });
    },
    componentWillUpdate: function (nextProps, nextState) {
      console.log('componentWillUpdate');
    },
    componentWillUnmount: function () {
        console.log('componentWillUnmount');
        clearInterval(this.timer);
        console.log('clearInterval');
        this.timer = undefined;
    },
    componentWillMount: function () {
      console.log('componentWillMount');
    },
    componentDidMount: function () {
        console.log('componentDidMount');
    },
    render: function () {
      var {count, countdownStatus} = this.state;
      var renderControls = () => {
          if(countdownStatus !== 'stopped') {
              return <Controls countdownStatus = {countdownStatus} onStatusChange = {this._handleStatusChange}/>
          }
          else {
              return <CountdownForm setCountdownTimer = {this._handleCountdownTimer}/>
          }
      };
        return(
            <div>
                <Clock totalSeconds = {count}/>
                {renderControls()}
            </div>
        );
    }
});

module.exports = Countdown;