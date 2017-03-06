var React  = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
render: function () {
    return(
        <div className = "top-bar">
            <div className = "top-bar-left">
                <ul className = "menu">
                    <li className = "menu-text">React Timer App</li>
                    <li>
                        <IndexLink to = "/">Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/countdown">Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className = "top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created By :  <a href="https://github.com/AsadMarfani" target = "_blank">Asad Marfani</a>
                    </li>
                </ul>
            </div>
        </div>
    );

}
});

module.exports = Nav;