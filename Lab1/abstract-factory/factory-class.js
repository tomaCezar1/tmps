class ProductionLogger {
    info(str) { }
    debug(str) { }
    warn(str) {
        console.warn(str);
    }
    error(str) {
        console.error(str);
    }
}
class DevelopmentLogger extends ProductionLogger {
    info(str) {
        console.info(str);
    }
    debug(str) {
        console.debug(str);
    }
    warn(str) {
        console.warn(str);
    }
    error(str) {
        console.error(str);
    }
}
var envType;
(function (envType) {
    envType["production"] = "production";
    envType["development"] = "development";
})(envType || (envType = {}));
const NODE_ENV = envType.production;
export class Factory {
    static getLogger() {
        return new (NODE_ENV === 'production' ? ProductionLogger : DevelopmentLogger)();
    }
}
