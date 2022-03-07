class Singleton {
  private static instance: Singleton;
  public count: number = 0;

  // private constructor to prevent direct calls with the `new`
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public increaseCount() {
    this.count++;
  }

  public decreaseCount() {
    if (this.count > 0) {
      this.count--;
    }
  }
}

export default Singleton;
