const parser = new SwiftMessageParser();
const swiftData = parser.parseMT103(mt103String);

const converter = new CryptoConversionService();
const result = await converter.convertToUSDT(parseFloat(swiftData.amount), "EUR");

console.log(`USDT to send: ${result.usdtAmount}, Fee: ${result.gasEstimate}`);
