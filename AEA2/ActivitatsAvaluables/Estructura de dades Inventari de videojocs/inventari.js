// A3
const inventari = {
  jocs: [
    { id: 1, titol: "Zelda: Breath of the Wild", plataforma: "Nintendo Switch", estoc: 3 },
    { id: 2, titol: "God of War", plataforma: "PlayStation 4", estoc: 5 }
  ],

  // Escriu aquí el teu codi

  afegirJoc: function (titol, plataforma, estoc) {
    // Comprovar que no existeixi el mateix joc amb la mateixa plataforma
    for (let i = 0; i < this.jocs.length; i++) {
      if (this.jocs[i].titol === titol && this.jocs[i].plataforma === plataforma) {
        return null;
      }
    }

    // Assignar nou id consecutiu
    let nouId = this.jocs.length + 1;

    let nouJoc = {
      id: nouId,
      titol: titol,
      plataforma: plataforma,
      estoc: estoc
    };

    this.jocs.push(nouJoc);
    return nouId;
  },

  actualitzarEstoc: function (id, nouEstoc) {
    for (let i = 0; i < this.jocs.length; i++) {
      if (this.jocs[i].id === id) {
        this.jocs[i].estoc = nouEstoc;
        return true;
      }
    }
    return false;
  },

  filtrarPerPlataforma: function (plataforma) {
    let resultat = [];

    for (let i = 0; i < this.jocs.length; i++) {
      if (this.jocs[i].plataforma === plataforma) {
        resultat.push(this.jocs[i]);
      }
    }

    return resultat;
  },

  llistarDisponibles: function () {
    let disponibles = [];

    for (let i = 0; i < this.jocs.length; i++) {
      if (this.jocs[i].estoc > 0) {
        disponibles.push(this.jocs[i]);
      }
    }

    return disponibles;
  },

  jocAmbMesEstoc: function () {
    let maxEstoc = 0;

    // Buscar l'estoc màxim
    for (let i = 0; i < this.jocs.length; i++) {
      if (this.jocs[i].estoc > maxEstoc) {
        maxEstoc = this.jocs[i].estoc;
      }
    }

    // Retornar tots els jocs amb aquest estoc
    let resultat = [];
    for (let i = 0; i < this.jocs.length; i++) {
      if (this.jocs[i].estoc === maxEstoc) {
        resultat.push(this.jocs[i]);
      }
    }

    return resultat;
  }

}

// No canviïs aquesta línia de codi. Serveix perquè les funcions d'aquest fitxer es puguin usar en el fitxer de tests.
module.exports = { inventari };
