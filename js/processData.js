function getUserId(name) {
  setTimeout((name) => {
    if (name.toLowerCase() === "luis") {
      return "I'm sick of you!";
    } else {
      return Math.floor(Math.random(101));
    }
  }, 2000);
}

function getUserDataById(id) {
  setTimeout((id) => {
    if (id === 100) {
      return "Luis, don't cheat on me!";
    } else {
      return {
        name: "José Luis Torrente",
        dni: "4815162342L",
        age: "48 años",
        city: "Madrid",
        profession: "Apatrullador de la ciudad",
      };
    }
  }, 2000);
}

function getFinesByDNI(dni) {
  setTimeout((dni) => {
    if (dni === "11111111A") {
      return "Luis, really? Mario, don't go here: https://bit.ly/2X5AZei";
    } else {
      return {
        multa01: "Conducir a 200km/h en zona residencial",
        multa02: "Hacer el 'ovni' por las curvas de la Rabassada",
        multa03: "Carreras ilegales conduciendo montacargas",
      };
    }
  }, 2000);
}
