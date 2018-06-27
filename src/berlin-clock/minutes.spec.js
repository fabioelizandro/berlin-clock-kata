const minutes = require('./minutes');

describe('minutes', () => {
  it('returns true when minutes are odd', () => {
    expect(minutes(new Date('2000-01-01T00:00:00'))).toEqual(false);
    expect(minutes(new Date('2000-01-01T00:02:00'))).toEqual(false);
    expect(minutes(new Date('2000-01-01T00:04:00'))).toEqual(false);
  });

  it('returns true when minutes are even', () => {
    expect(minutes(new Date('2000-01-01T00:01:00'))).toEqual(true);
    expect(minutes(new Date('2000-01-01T00:03:00'))).toEqual(true);
    expect(minutes(new Date('2000-01-01T00:05:00'))).toEqual(true);
  });
});
