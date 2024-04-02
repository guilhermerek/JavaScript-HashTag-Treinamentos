function formulaDeBhaskara (a, b, c) {
    const delta = (b ** 2) - (4 * a * c);
    const x1 = (-b + calcularRaizQuadrada(delta)) / (2 * a);
    const x2 = (-b - calcularRaizQuadrada(delta)) / (2 * a);
    console.log(`x1 = ${x1} e x2 = ${x2}`);
};

function calcularRaizQuadrada(base) {
    return base**(0.5);
};

//console.log(calcularRaizQuadrada(4));

formulaDeBhaskara(2, 1, 3);
formulaDeBhaskara(4, 6, 2);
formulaDeBhaskara(2, 4, 9);
formulaDeBhaskara(2, 3, -2);
