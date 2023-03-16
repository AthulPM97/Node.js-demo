const path = require('path');

const express = require('express');

const router = express.Router();
const rootDir = require('../util/path');

router.get('/contactus', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

router.post('/contactus/success', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

module.exports = router;