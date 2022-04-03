// Violation of Single Responsibility Principle
class Book {
  public title: string;
  public author: string;
  public description: string;
  public pages: number;

  constructor(title, author, description, pages) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
  }

  getFileInfo(): void {
    console.log('Get file info');
  }

  saveToFile(book: Book): void {
    console.log('File saved');
  }
}

// class Book {
//   public title: string;
//   public author: string;
//   public description: string;
//   public pages: number;

//   constructor(title, author, description, pages) {
//     this.title = title;
//     this.author = author;
//     this.description = description;
//     this.pages = pages;
//   }

//   getFileInfo(): void {
//     console.log('Get file info');
//   }
// }

// class BookPersistence {
//   saveToFile(book: Book): void {
//     console.log('File saved');
//   }
// }
