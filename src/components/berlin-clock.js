const React = require('react');

const LightOn = () => {
  return (<div className='light on'></div>);
};

const LightOff = () => {
  return (<div className='light off'></div>);
};

const LIGHT_STATE_MAP = { false: LightOff, true: LightOn };

const createLight = (state) => {
  const Light = LIGHT_STATE_MAP[state];
  return <Light />;
}

const createLightFromStateList = (stateList) => {
  return stateList.map((state, index) => {
    const Light = LIGHT_STATE_MAP[state];
    return <Light key={index} />;
  });
}

const MinutesLamp = ({ clock }) => {
  return (
    <div id='minutesLamp'>
      {createLight(clock.minutes)}
    </div>
  );
};

const FiveHourRow = ({ clock }) => {
  return (
    <div id='fiveHourRow'>
      {createLightFromStateList(clock.fiveHourRow)}
    </div>
  );
};

const OneHourRow = ({ clock }) => {
  return (
    <div id='oneHourRow'>
      {createLightFromStateList(clock.oneHourRow)}
    </div>
  );
};

const FiveMinuteRow = ({ clock }) => {
  return (
    <div id='fiveMinuteRow'>
      {createLightFromStateList(clock.fiveMinuteRow)}
    </div>
  );
};

const OneMinuteRow = ({ clock }) => {
  return (
    <div id='oneMinuteRow'>
      {createLightFromStateList(clock.oneMinuteRow)}
    </div>
  );
};

module.exports = ({ clock }) => {
  return (
    <div id='berlinClock'>
      <MinutesLamp clock={clock} />
      <FiveHourRow clock={clock} />
      <OneHourRow clock={clock} />
      <FiveMinuteRow clock={clock} />
      <OneMinuteRow clock={clock} />
    </div>
  );
};
