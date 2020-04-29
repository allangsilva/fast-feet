import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async store(req, res) {
    const { email } = req.body;

    const deliverymanExists = await Deliveryman.findOne({
      where: { email },
    });

    if (deliverymanExists) {
      return res.status(401).json({ message: 'User already exists' });
    }

    const deliveryman = await Deliveryman.create(req.body);

    return res.json(deliveryman);
  }

  async index(req, res) {
    const deliverys = await Deliveryman.findAll();

    return res.json(deliverys);
  }

  async update(req, res) {
    const { id } = req.body;
    let deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(404).json({ message: 'User not exists' });
    }

    deliveryman = await deliveryman.update(req.body);

    return res.json(deliveryman);
  }

  async delete(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(404).json({ message: 'User not exists' });
    }

    await Deliveryman.destroy({
      where: { id },
    });

    return res.json();
  }
}

export default new DeliverymanController();
