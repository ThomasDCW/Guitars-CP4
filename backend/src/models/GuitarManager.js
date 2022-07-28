const AbstractManager = require("./AbstractManager");

class GuitarManager extends AbstractManager {
  static table = "guitar";

  insert(guitar) {
    return this.connection.query(
      `insert into ${GuitarManager.table} (picture, label, brand, price, style, frontpicture, backpicture, botpicture, toppicture, wood, fret, tunningfork) values (?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        guitar.picture,
        guitar.label,
        guitar.brand,
        guitar.price,
        guitar.style,
        guitar.frontpicture,
        guitar.backpicture,
        guitar.botpicture,
        guitar.toppicture,
        guitar.wood,
        guitar.fret,
        guitar.tunningfork,
      ]
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
