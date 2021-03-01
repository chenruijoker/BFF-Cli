const Service = require("egg").Service;

class TestService extends Service {
    async readyReturn(data) {
        return { code: 200, data };
    }
}

module.exports = TestService;
