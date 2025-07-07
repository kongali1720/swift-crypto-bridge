CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  reference TEXT,
  amount_eur NUMERIC,
  amount_usdt NUMERIC,
  gas_fee NUMERIC,
  beneficiary TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
