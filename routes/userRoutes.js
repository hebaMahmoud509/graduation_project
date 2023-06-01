const express = require('express');
const userControls = require('../controller/userControls');
const { body } = require('express-validator');
const router = express.Router();
const protect = require('../middleware/authMiddleWare');
router.post('/signup',[
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .normalizeEmail(),
    body('password')
        .trim()
        .isLength({ min: 5 }),
    body('name')
        .trim()
        .not()
        .isEmpty(),
    body('phoneNumber').trim().isLength({max:11}).withMessage('please enter a valid phone number'),
    body('nationalID').trim().isLength({ max: 14})
],userControls.registerUser);
router.post('/login',userControls.loginUser);
router.get('/me',protect.protect,userControls.getMe);
router.post('/forgot-password',userControls.setToken);
router.post('/reset-password',userControls.resetPassword)
// POST /api/chat
router.post('/chat', userControls.processChat);
module.exports = router;