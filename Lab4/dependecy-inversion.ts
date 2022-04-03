class MemoryStorage {
  private storage: any[];

  constructor() {
    this.storage = [];
  }

  public insert(record: any): void {
    this.storage.push(record);
  }
}

class PostService {
  private db = new MemoryStorage();

  createPost(title: string) {
    this.db.insert(title);
  }
}

// interface DatabaseStorage {
//   insert(record: any): void;
// }

// class MemoryStorage implements DatabaseStorage {
//   private storage: any[];

//   constructor() {
//     this.storage = [];
//   }

//   public insert(record: any): void {
//     this.storage.push(record);
//   }
// }

// class PostService {
//   private db: DatabaseStorage;

//   constructor(db: DatabaseStorage) {
//     this.db = db;
//   }

//   createPost(title: string) {
//     this.db.insert(title);
//   }
// }

class FrontendDeveloper {
  public writeHtmlCode(): void {}
}

class BackendDeveloper {
  public writeTypeScriptCode(): void {}
}

class SoftwareProject {
  public frontendDeveloper: FrontendDeveloper;
  public backendDeveloper: BackendDeveloper;

  constructor() {
    this.frontendDeveloper = new FrontendDeveloper();
    this.backendDeveloper = new BackendDeveloper();
  }

  public createProject(): void {
    this.frontendDeveloper.writeHtmlCode();
    this.backendDeveloper.writeTypeScriptCode();
  }
}

// interface Developer {
//   develop(): void;
// }

// class FrontendDeveloper implements Developer {
//   public develop(): void {
//     this.writeHtmlCode();
//   }

//   private writeHtmlCode(): void {
//   }
// }

// class BackendDeveloper implements Developer {
//   public develop(): void {
//     this.writeTypeScriptCode();
//   }

//   private writeTypeScriptCode(): void {
//   }
// }

// class SoftwareProject {
//   public developers: Developer[];

//   public createProject(): void {
//     this.developers.forEach((developer: Developer) => {
//       developer.develop();
//     });
//   }
// }
