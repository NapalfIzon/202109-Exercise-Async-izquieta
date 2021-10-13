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
