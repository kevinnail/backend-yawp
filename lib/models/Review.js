const pool = require('../utils/pool');

class Review {
  id;
  user_id;
  restaurant_id;
  stars;
  detail;

  constructor(row) {
    this.id = row.id;
    this.user_id = row.user_id;
    this.restaurant_id = row.restaurant_id;
    this.stars = row.stars;
    this.detail = row.detail;
  }

  static async insert({ restId, userId, detail, stars }) {
    const { rows } = await pool.query(
      `
        INSERT INTO reviews ( restaurant_id, user_id, detail, stars)
        VALUES ($1,$2,$3,$4) 
        RETURNING *
        `,
      [restId, userId, detail, stars]
    );
    return new Review(rows[0]);
  }
  static async deleteById(id) {
    const { rows } = await pool.query(
      `
    DELETE FROM reviews
    WHERE id = $1
    RETURNING*
    `,
      [id]
    );
    if (!rows[0]) return null;
    return new Review(rows[0]);
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
    SELECT * FROM reviews
    WHERE id = $1
       `,
      [id]
    );
    if (!rows[0]) return null;
    return new Review(rows[0]);
  }
}

module.exports = Review;
