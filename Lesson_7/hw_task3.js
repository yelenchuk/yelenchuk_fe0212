function getPeople() {
  let x = +prompt("How many handshakes?");
  let count = 1;
  for (let handshake = 0; handshake < x; ) {
    console.log(count, handshake, +x, handshake <= x);
    count += 1;
    handshake += count - 1;
  }
  alert("Всего пришло на совещание " + count + " человек.");
}
getPeople();
