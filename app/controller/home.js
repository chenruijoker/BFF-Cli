const Controller = require("egg").Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = "Hello world!陈睿大宝贝的粉丝";
    }
}

module.exports = HomeController;
