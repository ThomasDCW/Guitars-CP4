const AbstractManager = require("./AbstractManager");

class LogoManager extends AbstractManager {
  static table = "logo";

  insert(logo) {
    return this.connection.query(
      `insert into ${LogoManager.table} (label, picture, link) values (?, ?, ?)`,
      [logo.label, logo.picture, logo.link]
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
