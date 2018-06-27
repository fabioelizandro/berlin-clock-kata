const fiveHourRow = require('./five-hour-row');

describe('five hour row', () => {
  it('returns all false when less than 5 hours', () => {
    expect(fiveHourRow(new Date('2000-01-01T04:59:00'))).toEqual([
      false,
      false,
      false,
      false
    ]);
  });

  it('returns first on when passed 5 hours', () => {
    expect(fiveHourRow(new Date('2000-01-01T05:00:00'))).toEqual([
      true,
      false,
      false,
      false
    ]);
  });

  it('returns second on when passed 10 hours', () => {
    expect(fiveHourRow(new Date('2000-01-01T10:00:00'))).toEqual([
      true,
      true,
      false,
      false
    ]);
  });

  it('returns third on when passed 15 hours', () => {
    expect(fiveHourRow(new Date('2000-01-01T15:00:00'))).toEqual([
      true,
      true,
      true,
      false
    ]);
  });

  it('returns fourth on when passed 20 hours', () => {
    expect(fiveHourRow(new Date('2000-01-01T20:00:00'))).toEqual([
      true,
      true,
      true,
      true
    ]);
  });
});
