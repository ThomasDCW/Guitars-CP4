const AbstractManager = require("./AbstractManager");

class GuitarManager extends AbstractManager {
  static table = "guitar";

  insert(guitar) {
    return this.connection.query(
      `insert into ${GuitarManager.table} (picture, label, brand, price, style) values (?,?,?,?,?)`,
      [guitar.picture, guitar.brand, guitar.label, guitar.price, guitar.style]
    );
  }

  update(guitar) {
    return this.connection.query(
      `update ${GuitarManager.table} set ? where id = ?`,
      [guitar, guitar.id]
    );
  }
}

module.exports = GuitarManager;
