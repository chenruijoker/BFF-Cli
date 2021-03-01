exports.keys = "chenruiBaby";

// 配置端口
exports.cluster = {
    listen: {
        path: "",               
        port: 8090,             // 端口
        hostname: "127.0.0.1",  //域
    },
};

// 关闭csrf安全威胁，保证可跨域
exports.security = {
    csrf: false,
};
