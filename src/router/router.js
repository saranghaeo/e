import express from 'express';
import passport from 'passport';

const router = express.Router();

// Авторизация через Steam
router.get('/auth/steam', passport.authenticate('steam'));

// Обработка ответа от Steam
router.get('/auth/steam/return', passport.authenticate('steam', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/'); // перенаправление на главную страницу приложения
});

// Проверка статуса аутентификации пользователя
router.get('/api/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      id: req.user.id,
      username: req.user.username
    });
  } else {
    res.json({
      error: 'User not authenticated'
    });
  }
});

export default router;

