// import React from 'react';
var React = require('react');
var HelloJsx = React.createClass({
    displayName: 'HelloReact',
    render: function(){
        return (
            <div>
                <h1>Hello, React</h1>
                <ul>
                    <li>111111</li>
                    <li>222222</li>
                    <li>333333</li>
                    <li>444444</li>
                    <li>555555</li>
                </ul>
            </div>
        );
    }
});
module.exports = HelloJsx;
