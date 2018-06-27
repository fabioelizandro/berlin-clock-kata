module.exports = date => {
  const howManyAreLit = date.getHours() % 5;

  return [
    howManyAreLit >= 1,
    howManyAreLit >= 2,
    howManyAreLit >= 3,
    howManyAreLit >= 4
  ];
}
