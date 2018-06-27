module.exports = date => {
    return [
      date.getHours() >= 5,
      date.getHours() >= 10,
      date.getHours() >= 15,
      date.getHours() >= 20
    ];
};
