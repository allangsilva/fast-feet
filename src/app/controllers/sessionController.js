import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import appConfig from '../../config/app';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Validation fails' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'User not exists' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // generate jwt token
    const { id, name } = user;
    const token = jwt.sign({ userId: id }, appConfig.jwtSecret, {
      expiresIn: appConfig.jwtExpiresIn,
    });

    return res.json({
      id,
      name,
      email,
      token,
    });
  }
}

export default new SessionController();
