import express from 'express';
import { SwiftMessageParser } from '../services/SwiftMessageParser';
import { CryptoConversionService } from '../services/CryptoConversionService';
import { db } from '../db/pool';

const router = express.Router();
const parser = new SwiftMessageParser();
const converter = new CryptoConversionService();

router.post('/swift/convert', async (req, res) => {
  const rawMessage = req.body.message;
  const parsed = parser.parseMT103(rawMessage);
  const conversion = await converter.convertToUSDT(parsed.amount);

  await db.query(
    'INSERT INTO transactions (reference, amount_eur, amount_usdt, gas_fee, beneficiary) VALUES ($1, $2, $3, $4, $5)',
    [parsed.reference, parsed.amount, conversion.usdt, conversion.fee, parsed.beneficiary]
  );

  res.json({ ...parsed, ...conversion });
});

export default router;
