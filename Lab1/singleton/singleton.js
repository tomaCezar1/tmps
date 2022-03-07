class Singleton {
    // private constructor to prevent direct calls with the `new`
    constructor() {
        this.count = 0;
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    increaseCount() {
        this.count++;
    }
    decreaseCount() {
        if (this.count > 0) {
            this.count--;
        }
    }
}
export default Singleton;
