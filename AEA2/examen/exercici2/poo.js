// poo.js

class Vehicle {
  #marca;
  #model;
  #anyFabricacio;

  constructor(marca = undefined, model = undefined, anyFabricacio = undefined) {
    this.#marca = marca;
    this.#model = model;
    this.#anyFabricacio = anyFabricacio;
  }

  get marca() {
    return this.#marca;
  }

  set marca(novaMarca) {
    this.#marca = novaMarca;
  }

  get model() {
    return this.#model;
  }

  set model(nouModel) {
    this.#model = nouModel;
  }

  get anyFabricacio() {
    return this.#anyFabricacio;
  }

  set anyFabricacio(nouAny) {
    this.#anyFabricacio = nouAny;
  }

  #calcularAntiguitat() {
    const anyActual = new Date().getFullYear();
    if (typeof this.#anyFabricacio !== 'number' || isNaN(this.#anyFabricacio)) {
      return undefined;
    }
    return anyActual - this.#anyFabricacio;
  }

  mostrarInfo() {
    const antiguitat = this.#calcularAntiguitat();
    const antiguitatText = (typeof antiguitat === 'number') ? `${antiguitat} anys` : 'Antiguitat desconeguda';
    return `Marca: ${this.#marca}, Model: ${this.#model}, Antiguitat: ${antiguitatText}`;
  }
}

class Cotxe extends Vehicle {
  #numPortes;

  constructor(marca = undefined, model = undefined, anyFabricacio = undefined, numPortes = undefined) {
    super(marca, model, anyFabricacio);
    this.#numPortes = numPortes;
  }

  get numPortes() {
    return this.#numPortes;
  }

  set numPortes(nouNum) {
    this.#numPortes = nouNum;
  }

  mostrarInfo() {
    const infoBase = super.mostrarInfo();
    return `${infoBase}, Portes: ${this.#numPortes}`;
  }
}

class Moto extends Vehicle {
  #cilindrada;

  constructor(marca = undefined, model = undefined, anyFabricacio = undefined, cilindrada = undefined) {
    super(marca, model, anyFabricacio);
    this.#cilindrada = cilindrada;
  }

  get cilindrada() {
    return this.#cilindrada;
  }

  set cilindrada(novaCilindrada) {
    this.#cilindrada = novaCilindrada;
  }

  mostrarInfo() {
    const infoBase = super.mostrarInfo();
    return `${infoBase}, Cilindrada: ${this.#cilindrada}`;
  }
}

class Camio extends Vehicle {
  #capacitatCarga;

  constructor(marca = undefined, model = undefined, anyFabricacio = undefined, capacitatCarga = undefined) {
    super(marca, model, anyFabricacio);
    this.#capacitatCarga = capacitatCarga;
  }

  get capacitatCarga() {
    return this.#capacitatCarga;
  }

  set capacitatCarga(nouValor) {
    this.#capacitatCarga = nouValor;
  }

  mostrarInfo() {
    const infoBase = super.mostrarInfo();
    return `${infoBase}, Capacitat càrrega: ${this.#capacitatCarga}`;
  }
}



// No canviïs aquesta línia de codi. Serveix perquè les funcions d'aquest fitxer es puguin usar en el fitxer de tests.
module.exports = { Vehicle, Cotxe, Moto, Camio };