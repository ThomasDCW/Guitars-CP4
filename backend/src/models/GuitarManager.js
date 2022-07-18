const AbstractManager = require("./AbstractManager");

class GuitarManager extends AbstractManager {
  static table = "guitar";

  insert(guitar) {
    return this.connection.query(
      `insert into ${GuitarManager.table} (label) values (?)`,
      [guitar.label]
    );
  }

  update(guitar) {
    return this.connection.query(
      `update ${GuitarManager.table} set label = ? where id = ?`,
      [guitar.title, guitar.id]
    );
  }
}

module.exports = GuitarManager;
