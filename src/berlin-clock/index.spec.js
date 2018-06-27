const berlinClock = require('./');

describe('berlin clock', () => {
  it('returns a berlin clock object', () => {
    expect(berlinClock(new Date('2000-01-01T12:56:01'))).toEqual({
      minutes: false,
      fiveHourRow: [true, true, false, false],
      oneHourRow: [true, true, false, false],
      fiveMinuteRow: [true, true, true, true, true, true, true, true, true, true, true],
      oneMinuteRow: [true, false, false, false]
    });
  });
});
