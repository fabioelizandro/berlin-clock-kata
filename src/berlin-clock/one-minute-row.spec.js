const oneMinuteRow = require('./one-minute-row');

describe('one minute row', () => {
  it('returns all false when less than one minute', () => {
    expect(oneMinuteRow(new Date('2000-01-01T00:00:59'))).toEqual([
      false,
      false,
      false,
      false
    ])
  });

  it('returns first true when passed one minute', () => {
    expect(oneMinuteRow(new Date('2000-01-01T00:01:00'))).toEqual([
      true,
      false,
      false,
      false
    ])
  });

  it('returns second true when passed two minutes', () => {
    expect(oneMinuteRow(new Date('2000-01-01T00:02:00'))).toEqual([
      true,
      true,
      false,
      false
    ])
  });

  it('returns third true when passed three minutes', () => {
    expect(oneMinuteRow(new Date('2000-01-01T00:03:00'))).toEqual([
      true,
      true,
      true,
      false
    ])
  });

  it('returns fourth true when passed four minutes', () => {
    expect(oneMinuteRow(new Date('2000-01-01T00:04:00'))).toEqual([
      true,
      true,
      true,
      true
    ])
  });

  it('resets when full', () => {
    expect(oneMinuteRow(new Date('2000-01-01T00:05:00'))).toEqual([
      false,
      false,
      false,
      false
    ]);

    expect(oneMinuteRow(new Date('2000-01-01T00:06:00'))).toEqual([
      true,
      false,
      false,
      false
    ]);

    expect(oneMinuteRow(new Date('2000-01-01T00:07:00'))).toEqual([
      true,
      true,
      false,
      false
    ]);
  });
});
