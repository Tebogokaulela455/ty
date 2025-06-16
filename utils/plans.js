const plans = {
  5: 0.1,
  8: 0.4,
  12: 0.7,
  15: 0.9,
  20: 1.0,
  30: 1.2,
  40: 1.5,
};

const getPlanInfo = amount => {
  if (plans[amount]) {
    return {
      amount,
      daily: plans[amount],
      total: +(plans[amount] * 28).toFixed(2),
    };
  }
  return null;
};

module.exports = { getPlanInfo, plans };