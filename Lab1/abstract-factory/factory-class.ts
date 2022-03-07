interface ILogger {
  info(str: string): void;
  debug(str: string): void;
  warn(str: string): void;
  error(str: string): void;
}

class ProductionLogger implements ILogger {
  info(str: string): void {}
  debug(str: string): void {}
  warn(str: string): void {
    console.warn(str);
  }
  error(str: string): void {
    console.error(str);
  }
}

class DevelopmentLogger extends ProductionLogger {
  info(str: string): void {
    console.info(str);
  }
  debug(str: string): void {
    console.debug(str);
  }
  warn(str: string): void {
    console.warn(str);
  }
  error(str: string): void {
    console.error(str);
  }
}

enum envType {
  production = 'production',
  development = 'development',
}
const NODE_ENV: envType = envType.production;

export class Factory {
  static getLogger(): ILogger {
    return new (
      NODE_ENV === 'production' ? ProductionLogger : DevelopmentLogger
    )();
  }
}
