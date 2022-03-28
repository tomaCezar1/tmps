class FileProvider {
    templateMethod() {
        this.openFile();
        this.extractData();
        this.parseData();
        this.analyzeFileData();
        this.closeFile();
    }
    openFile() {
        console.log('open file');
    }
    parseData() {
        console.log('data parsing');
    }
    closeFile() {
        console.log('close all files');
    }
}
class WordFile extends FileProvider {
    extractData() {
        console.log('word data extraction');
    }
    analyzeFileData() {
        console.log('word data analysis');
    }
}
class ExcelFile extends FileProvider {
    parseData() {
        console.log('excel data parsing');
    }
    extractData() {
        console.log('excel data extraction');
    }
    analyzeFileData() {
        console.log('excel data analysis');
    }
}
function fileProviderCreator(fileProvider) {
    fileProvider.templateMethod();
}
fileProviderCreator(new WordFile());
console.log('-------------------------');
fileProviderCreator(new ExcelFile());
