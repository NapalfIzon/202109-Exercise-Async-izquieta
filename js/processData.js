const getUserId = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout((name) => {
      if (name === "luis") {
        reject(new Error("I'm sick of you!"));
      } else {
        // resolve(Math.floor(Math.random(101) * 100));
        resolve(13);
      }
    }, 2000);
  });
};

function getUserDataById(id) {
  setTimeout((id) => {
    return new Promise((resolve, reject) => {
      if (id === 100) {
        reject(new Error("Luis, don't cheat on me!"));
      } else {
        const data = {
          name: "José Luis Torrente",
          dni: "4815162342L",
          age: "48 años",
          city: "Madrid",
          profession: "Apatrullador de la ciudad",
        };
        resolve(data);
      }
    }, 2000);
  });
}

function getFinesByDNI(dni) {
  return new Promise((resolve, reject) => {
    setTimeout((dni) => {
      if (dni === "11111111A") {
        reject(
          new Error(
            "Luis, really? Mario, don't go here: https://bit.ly/2X5AZei"
          )
        );
      } else {
        const listaMultas = [
          {
            id: 1,
            total: 200,
          },
          {
            id: 1,
            total: 500,
          },
        ];
        resolve(listaMultas);
      }
    }, 2000);
  });
}

export default { getUserId, getUserDataById, getFinesByDNI };
