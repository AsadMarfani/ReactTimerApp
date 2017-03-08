var React = require('react');

var CountdownForm = React.createClass({
    _onFormSubmit: function (e) {
        e.preventDefault();
        var seconds = this.refs.seconds.value;
        if(seconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.setCountdownTimer(parseInt(seconds, 10));
        }
    },
    render: function(){
        return(

            <div className="stylingForm">
                <form onSubmit = {this._onFormSubmit}>
                    <input type="text" ref = "seconds" className="abc" placeholder="Enter Time In (Seconds)"/>
                    <button type="submit" className = "button expanded">Start</button>
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;