module.exports = date => {
  const howManyAreLit = date.getMinutes();

  return [
    howManyAreLit >= 5,
    howManyAreLit >= 10,
    howManyAreLit >= 15,
    howManyAreLit >= 20,
    howManyAreLit >= 25,
    howManyAreLit >= 30,
    howManyAreLit >= 35,
    howManyAreLit >= 40,
    howManyAreLit >= 45,
    howManyAreLit >= 50,
    howManyAreLit >= 55
  ];
};
