module.exports = function makeExchange(currency) {
    if (currency > 10000) return {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    if (currency <= 0) return {};
    
    const exchangeObj = {};
    exchangeObj['H'] = H = ~~(currency / 50);
    exchangeObj['Q'] = Q = ~~((currency - H * 50) / 25);
    exchangeObj['D'] = D = ~~((currency - H * 50 - Q * 25) / 10);
    exchangeObj['N'] = N = ~~((currency - H * 50 - Q * 25 - D * 10) / 5);
    exchangeObj['P'] = P = currency - H * 50 - Q * 25 - D * 10 - N * 5;
    for (coin in exchangeObj)
        if (!exchangeObj[coin]) delete exchangeObj[coin];
    return exchangeObj;
}