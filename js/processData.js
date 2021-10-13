function getUserId(name) {
  setTimeout((name) => {
    if (name.toLowerCase() === "luis") {
      return "I'm sick of you!";
    } else {
      return Math.floor(Math.random() * 4815162342);
    }
  }, 2000);
}
