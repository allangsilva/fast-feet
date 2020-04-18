import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        address_number: Sequelize.STRING,
        address_complement: Sequelize.STRING,
        address_state: Sequelize.STRING,
        address_city: Sequelize.STRING,
        address_postal_code: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'recipients',
      },
    );
  }
}

export default Recipient;
