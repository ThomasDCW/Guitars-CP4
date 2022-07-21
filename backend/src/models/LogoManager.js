const AbstractManager = require("./AbstractManager");

class LogoManager extends AbstractManager {
  static table = "logo";

  insert(logo) {
    return this.connection.query(
      `insert into ${LogoManager.table} (label) values (?)`,
      [logo.label]
    );
  }

  update(guitar) {
    return this.connection.query(
      `update ${LogoManager.table} set ? where id = ?`,
      [guitar, guitar.id]
    );
  }
}

module.exports = LogoManager;
