class SingletonClass {
  private static instance: SingletonClass;

  private constructor() { }

  test() {
    console.log('You are calling test function');
  }

  public static getInstance() {
    if (!SingletonClass.instance) {
      this.instance = new SingletonClass();
    }
    return this.instance;
  }
}

const instance = SingletonClass.getInstance();
instance.test();
