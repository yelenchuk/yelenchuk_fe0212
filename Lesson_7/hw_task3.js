function getPeople() {
    let count = 1;
    let handshake = 0;
    
    while (handshake != 120) {
        count += 1; //Оператор: x += y, Значение: x  = x + y
        handshake += (count - 1)
    }
    let pepol = alert('Всего пришло на совещание ' + count + ' человек.')
}

getPeople()