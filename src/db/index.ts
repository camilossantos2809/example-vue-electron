import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'erp_testes',
  password: '',
  port: 5432,
});

const query = async (text: string, params: any[], callback: any) => {
  return pool.query(text, params, callback);
};
export default {
  query,
};
