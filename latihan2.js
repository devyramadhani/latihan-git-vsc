const currency = new Map();
currency.set("USD", 14000);
currency.set("JPY", 131);
currency.set("SGD", 11000);
currency.set("MYR", 3500);

const priceInJPY = 5000;
const priceInIDR = priceInJPY * currency.get("JPY");

console.log(`Harga dalam IDR: ${priceInIDR}`);
