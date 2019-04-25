interface ConfigDB {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
}

const config: ConfigDB = {
  user: 'postgres',
  host: '192.168.40.236',
  database: 'erp_testes',
  password: '',
  port: 5432,
};

export { ConfigDB, config };
