const AbstractManager = require("./AbstractManager");

class LogoManager extends AbstractManager {
  static table = "logo";

  insert(logo) {
    return this.connection.query(
      `insert into ${LogoManager.table} (label, picture) values (?, ?)`,
      [logo.label, logo.picture]
    );
  }

  update(logo) {
    return this.connection.query(
      `update ${LogoManager.table} set ? where id = ?`,
      [logo, logo.id]
    );
  }
}

module.exports = LogoManager;
