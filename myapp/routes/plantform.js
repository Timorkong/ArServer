var express = require('express');
var router = express.Router();

//检测用户设备类型的中间件
router.get('/', (req, res, next) => {
    const userAgent = req.header('user-agent');

    // 检测是否为 Android 设备
    if (userAgent.toLowerCase().includes('android')) {
        // 如果是 Android 设备，重定向到 Android 界面
        res.redirect('/static/apk/ar.apk');
        return;
    }

    // 检测是否为 iOS 设备
    if (userAgent.toLowerCase().includes('iphone') || userAgent.toLowerCase().includes('ipad')) {
        // 如果是 iOS 设备，重定向到 iOS 界面
        res.redirect('/static/images/ios.txt');
        return;
    }
    // 其他情况，继续请求处理
    next();
});

// 默认界面路由
router.get('/', (req, res) => {
    res.send('欢迎访问默认界面！');
});

module.exports = router;