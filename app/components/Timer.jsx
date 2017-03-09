var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var Timer = React.createClass({
   getInitialState: function(){
     return {
         count: 0,
         timerStatus: 'stopped'
     };
   },
    componentDidUpdate: function(prevProps, prevState){
      if(this.state.timerStatus !== prevState.timerStatus) {
          switch(this.state.timerStatus){
              case 'started':
                  this.StartTimer();
                  break;
              case 'stopped':
                  this.setState({count: 0});
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
    componentWillUnmount: function(){
        clearInterval(this.timer);
        this.timer = undefined;
    },
    StartTimer: function () {
        this.timer = setInterval(()=>{
            var newCount = this.state.count + 1 ;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
            if(newCount === 0) {
                this.setState({
                    timerStatus: 'stopped'
                })
            }
        },

            1000);
    },
    _handleTimerStatus: function (newTimerStatus) {
        console.log(newTimerStatus);
        this.setState({
            timerStatus: newTimerStatus
        });
    },
    render: function () {
      var {count, timerStatus} = this.state;

        return(
            <div>
                <h2 className="text-center" style = {{fontFamily: 'Baskerville Old Face', fontWeight: 'bold'}}>Timer Component</h2>
                <Clock totalSeconds = {count}/>
                <Controls countdownStatus = {timerStatus} onStatusChange = {this._handleTimerStatus}/>
            </div>
        );
    }
});

module.exports = Timer;