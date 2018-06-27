const fiveMinuteRow = require('./five-minute-row');

describe('five minute row', () => {
  it('returns all false when less than 5 minutes', () => {
    expect(fiveMinuteRow(new Date('2000-01-01T00:00:00'))).toEqual([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]);
  });

  it('returns first true when more than 5 minutes', () => {
    expect(fiveMinuteRow(new Date('2000-01-01T00:05:00'))).toEqual([
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]);
  });

  it('returns true for each 5 fiminutes passed', () => {
    expect(fiveMinuteRow(new Date('2000-01-01T00:55:00'))).toEqual([
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true
    ]);
  });
});
