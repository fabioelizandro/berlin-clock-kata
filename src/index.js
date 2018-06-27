const React = require('react');
const ReactDOM = require('react-dom');
const BerlinClock = require('./components/berlin-clock');
const berlinClock = require('./berlin-clock');

const render = () => {
  ReactDOM.render(<BerlinClock clock={berlinClock(new Date())} />, document.getElementById('root'));
};

render();
setInterval(render, 60000);
