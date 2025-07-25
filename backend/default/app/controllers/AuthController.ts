import BaseController from './BaseController';
import jwt from 'jsonwebtoken';
import UserRepository, {
  userRepository as repo,
} from '../repositories/UserRepository';
import { md5 } from 'js-md5';

class AuthController {
  constructor() {}

  async register(req, res) {
    try {
      req.body.password = md5(req.body.password);
      const newUser = await repo.create(req.body);
      res.status(201).customJson({ data: newUser, msg: 'Kayıt başarılı' });
    } catch (err) {
      res.status(500).customJson({ success: false, msg: err.message });
    }
  }

  async login(req, res) {
    try {
      // req.body.password = md5(req.body.password);
      const users = await repo.findAll({
        where: { email: req.body.email, password: req.body.password },
      });
      if (users.length > 0) {
        const user = users[0];
        const secretKey: any = process?.env?.JWT_SECRET ?? null;
        const payload = { id: user.id, email: user.email };
        const token = jwt.sign(payload, secretKey, { expiresIn: '30d' });
        res.cookie('auth-token', token, {
          httpOnly: true,
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
        });
        res.customJson({ data: { token }, msg: 'Giriş başarılı' });
      } else {
        res
          .status(401)
          .customJson({ success: false, msg: 'Geçersiz kimlik bilgileri' });
      }
    } catch (err) {
      res.status(500).customJson({ success: false, msg: err.stack });
    }
  }

  async logout(req, res) {
    try {
      res.clearCookie('auth-token');
      res.status(200).customJson({ msg: 'Çıkış Başarılı' });
    } catch (err) {
      res.status(500).customJson({ success: false, msg: err.message });
    }
  }

  async forgotPassword(req, res) {
    try {
      const user = await repo.findAll({
        where: { email: req.body.email },
      });
      if (user) {
        // Parola sıfırlama e-postası gönderme mantığı
        res.customJson({ msg: 'Parola sıfırlama e-postası gönderildi' });
      } else {
        res
          .status(404)
          .customJson({ success: false, msg: 'Kullanıcı bulunamadı' });
      }
    } catch (err) {
      res.status(500).customJson({ success: false, msg: err.message });
    }
  }

  async verifyEmail(req, res) {
    try {
      const user = await repo.findAll({
        where: { email: req.body.email },
      });
      if (user) {
        // E-posta doğrulama mantığı
        res.customJson({ msg: 'E-posta doğrulama e-postası gönderildi' });
      } else {
        res
          .status(404)
          .customJson({ success: false, msg: 'Kullanıcı bulunamadı' });
      }
    } catch (err) {
      res.status(500).customJson({ success: false, msg: err.message });
    }
  }

  async verifyPhoneNumber(req, res) {
    try {
      const user = await repo.findAll({
        where: { phone: req.body.phone },
      });
      if (user) {
        // Telefon numarası doğrulama mantığı
        res.customJson({ msg: 'Telefon numarası başarıyla doğrulandı' });
      } else {
        res
          .status(404)
          .customJson({ success: false, msg: 'Kullanıcı bulunamadı' });
      }
    } catch (err) {
      res.status(500).customJson({ success: false, msg: err.message });
    }
  }
}
const authController = new AuthController();
export default AuthController;
export { authController };
