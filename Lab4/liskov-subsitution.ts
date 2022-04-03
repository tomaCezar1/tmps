// If we have a parent and child class, we can interchange them without getting incorrect results
// Each child must strictly implement what is in parent class
abstract class CustomError {
  error: Error;
  errorMessage: string;
  constructor(error: Error) {
    this.error = error;
  }
  abstract createErrorMessage(): void;
  abstract logError(): void;
}

class ConnectionError extends CustomError {
  constructor(error: Error) {
    super(error);
  }
  createErrorMessage(): void {
    this.errorMessage = `Connection error: ${this.error.message}`;
  }
  logError(): void {
    console.log(this.errorMessage);
  }
}

class DBError extends CustomError {
  constructor(error: Error) {
    super(error);
  }
  createErrorMessage(): void {
    this.errorMessage = `DB error: ${this.error.message}`;
  }
  logError(): void {
    console.log(this.errorMessage);
  }
  createAlert(): void {
    console.log('Alert Sent');
  }
}

const errorDecorator = (customError: CustomError) => {
  customError.createErrorMessage();
  customError.logError();
  if (customError instanceof DBError) {
    customError.createAlert();
  }
};
//it requires knowing the instance type. If we add APIError, GraphError and many more,
//it results in a series of never-ending if/else cases.

const dbError = new DBError(new Error('database connection failed'));
errorDecorator(dbError);

// abstract class CustomError {
//   error: Error;
//   errorMessage: string;
//   constructor(error: Error) {
//     this.error = error;
//   }
//   abstract createErrorMessage(): void;
//   abstract logError(): void;
// }

// class ConnectionError extends CustomError {
//   constructor(error: Error) {
//     super(error);
//   }
//   createErrorMessage(): void {
//     this.errorMessage = `Connection error: ${this.error.message}`;
//   }
//   logError(): void {
//     console.log(this.errorMessage);
//   }
// }

// class AlertSystem {
//   public sendAlert(message: string) {
//     console.log('Alert sent');
//   }
// }

// class DBError extends CustomError {
//   constructor(error: Error) {
//     super(error);
//   }

//   createErrorMessage(): void {
//     this.errorMessage = `DB error: ${this.error.message}`;
//   }

//   logError(): void {
//     console.log(this.errorMessage);
//     const alert = new AlertSystem();
//     alert.sendAlert(this.errorMessage);
//   }
// }

// const errorDecorator = (customError: CustomError) => {
//   customError.createErrorMessage();
//   customError.logError();
// };

// const dbError = new DBError(new Error('connection to db failed'));
// errorDecorator(dbError);
