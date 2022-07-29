const pool = require('../utils/pool.js');

module.exports = class Nfl {
  id;
  name;
  city;
  state;
  url;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.city = row.city;
    this.state = row.state;
    this.url = row.url;
  }


  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM nfls;');
    return rows.map((row) => new Nfl(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM nfls WHERE id=$1;', [id]);
    if (!rows[0]) return null;
    return new Nfl(rows[0]);
  }

};
