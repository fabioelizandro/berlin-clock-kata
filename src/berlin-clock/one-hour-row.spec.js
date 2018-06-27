const oneHourRow = require('./one-hour-row');

describe('one hour row', () => {
  it('returns all false when less than one hour', () => {
    expect(oneHourRow(new Date('2000-01-01T00:00:00'))).toEqual([
      false,
      false,
      false,
      false
    ])
  });

  it('returns first on when passed one hour', () => {
    expect(oneHourRow(new Date('2000-01-01T01:00:00'))).toEqual([
      true,
      false,
      false,
      false
    ])
  });

  it('returns second on when passed two hours', () => {
    expect(oneHourRow(new Date('2000-01-01T02:00:00'))).toEqual([
      true,
      true,
      false,
      false
    ])
  });

  it('returns third on when passed three hours', () => {
    expect(oneHourRow(new Date('2000-01-01T03:00:00'))).toEqual([
      true,
      true,
      true,
      false
    ])
  });

  it('returns fourth on when passed four hours', () => {
    expect(oneHourRow(new Date('2000-01-01T04:00:00'))).toEqual([
      true,
      true,
      true,
      true
    ])
  });

  it('resets when full', () => {
    expect(oneHourRow(new Date('2000-01-01T05:00:00'))).toEqual([
      false,
      false,
      false,
      false
    ]);

    expect(oneHourRow(new Date('2000-01-01T06:00:00'))).toEqual([
      true,
      false,
      false,
      false
    ]);

    expect(oneHourRow(new Date('2000-01-01T07:00:00'))).toEqual([
      true,
      true,
      false,
      false
    ]);
  });
});
