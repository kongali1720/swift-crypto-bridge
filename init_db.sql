-- init_db.sql

-- Create transactions table if not exists
CREATE TABLE IF NOT EXISTS transactions (
  id SERIAL PRIMARY KEY,
  reference TEXT NOT NULL,
  amount_eur NUMERIC NOT NULL,
  amount_usdt NUMERIC NOT NULL,
  gas_fee NUMERIC NOT NULL,
  beneficiary TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
