abstract class FileProvider {
  public templateMethod(): void {
    this.openFile();
    this.extractData();
    this.parseData();
    this.analyzeFileData();
    this.closeFile();
  }

  protected openFile(): void {
    console.log('open file');
  }

  protected parseData(): void {
    console.log('data parsing');
  }

  protected closeFile(): void {
    console.log('close all files');
  }

  // nevoie de implementare
  protected abstract extractData(): void;
  protected abstract analyzeFileData(): void;
}

class WordFile extends FileProvider {
  protected extractData(): void {
    console.log('word data extraction');
  }

  protected analyzeFileData(): void {
    console.log('word data analysis');
  }
}

class ExcelFile extends FileProvider {
  protected parseData(): void {
    console.log('excel data parsing');
  }

  protected extractData(): void {
    console.log('excel data extraction');
  }

  protected analyzeFileData(): void {
    console.log('excel data analysis');
  }
}

function fileProviderCreator(fileProvider: FileProvider) {
  fileProvider.templateMethod();
}

fileProviderCreator(new WordFile());
console.log('-------------------------');
fileProviderCreator(new ExcelFile());
