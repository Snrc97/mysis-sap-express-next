import BaseController from './BaseController';
import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository';

class AuthController extends BaseController {
  constructor() {
    super(new UserRepository());
  }

  async register(req, res) {
    try {
      const newUser = await this.repo.create(req.body);
      res.status(201).customJson({ data: newUser, msg: 'Kayıt başarılı' });
    } catch (err) {
      res.status(500).customJson({ success: false, msg: err.message });
    }
  }

  logout(req, res) {
    try {
      res.clearCookie('auth-token');
      res.status(200).customJson({ msg: 'Çıkış Başarılı' });
    } catch (err) {
      res.status(500).customJson({ success: false, msg: err.message });
    }
  }

  async login(req, res) {
    try {
      const user = await this.repo.findAll({
        where: { email: req.body.email, password: req.body.password },
      });
      if (user) {
        const token = jwt.sign(
          { userId: user.id, email: user.email },
          process.env.JWT_SECRET || 'secret',
          { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
        );
        res.cookie('jwt', token, {
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
      res.status(500).customJson({ success: false, msg: err.message });
    }
  }

  async forgotPassword(req, res) {
    try {
      const user = await this.repo.findAll({
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
      const user = await this.repo.findAll({
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
      const user = await this.repo.findAll({
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
