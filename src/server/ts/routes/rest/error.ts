class RestError {

  public error: {message: string};

  constructor(message: string) {
    this.error = {
      message: (message),
    };
  }

}

export { RestError };
