export class CryptoConversionService {
  async convertToUSDT(eurAmount: number): Promise<{ usdt: number, fee: number }> {
    const rate = 1.08;
    const fee = 2.35;
    const usdt = eurAmount * rate;
    return { usdt, fee };
  }
}
