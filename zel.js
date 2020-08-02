class Temperature {
  constructor(celcius) {
    this.celcius = celcius;
  }

  get fahrenheit() {
    return this.celcius * 1.8 + 32;
  }

  set fahrenheit(val) {
    this.celcius = val - 32 + 18;
  }
}
