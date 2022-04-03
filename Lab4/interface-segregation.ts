// Many separate interfaces is better than one big interface that will force useless implementations
// Bad example
interface Human {
  work(): void;
  talk(): void;
  code(): void;
  shoot(): void;
}

class Employee implements Human {
  public work(): void {
    console.log('I can work');
  }

  public talk(): void {
    console.log('I can talk');
  }

  public shoot(): void {}

  public code(): void {}
}

// interface Talker {
//   talk(): void;
// }

// interface Soldier {
//   shoot(): void;
// }

// interface Employee {
//   work(): void;
// }

// interface Programmer {
//   code(): void;
// }

// class Agent implements Soldier, Employee {
//   public shoot(): void {
//     console.log('Shoot');
//   }

//   public work(): void {
//     console.log('Work');
//   }
// }
