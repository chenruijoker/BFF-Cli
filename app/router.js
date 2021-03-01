module.exports = (app) => {
    const { router, controller } = app;
    router.get("/index", controller.home.index);

    //此处都是测试接口部分
    router.get("/test/:id", controller.test.myRouter);
    router.get("/testGet", controller.test.testGet);

    //首页重定向
    router.redirect("/", "/index", 302);
};
