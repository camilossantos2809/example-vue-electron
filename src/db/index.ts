import { Pool } from 'pg';
import { config } from './config';

const pool = new Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
});

const query = async (text: string, params: any[], callback: any) => {
  return pool.query(text, params, callback);
};
export default {
  query,
};
