const Controller = require("egg").Controller;

class TestController extends Controller {
    async myRouter() {
        const { ctx } = this;
        ctx.body = { name: ctx.params.id };
    }
    async testGet() {
        const { ctx } = this;
        ctx.body = `厉害了${ctx.query.name}`;
    }

}

module.exports = TestController;
