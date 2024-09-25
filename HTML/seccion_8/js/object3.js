class CuentaBancaria {
    constructor(nombre, saldoInicial) {
        this.nombre = nombre;
        this.saldo = saldoInicial;
    }

    // Método para depositar dinero
    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            this.actualizarSaldo(); // Llamada a otro método dentro de la clase
        } else {
            console.log('La cantidad a depositar debe ser positiva.');
        }
    }

    // Método para verificar el saldo actual
    verificarSaldo() {
        console.log(`El saldo actual de la cuenta de ${this.nombre} es: ${this.saldo} USD`);
    }

    // Método privado (convención) para actualizar el saldo
    actualizarSaldo() {
        console.log('El saldo ha sido actualizado.');
        this.verificarSaldo();
    }
}

// Creando una cuenta bancaria
let cuenta = new CuentaBancaria('Juan Pérez', 1000);

// Verificando el saldo inicial
cuenta.verificarSaldo(); // Output: El saldo actual de la cuenta de Juan Pérez es: 1000 USD

// Depositando dinero y actualizando el saldo
cuenta.depositar(500); // Output: El saldo ha sido actualizado. El saldo actual de la cuenta de Juan Pérez es: 1500 USD

// Intentando depositar una cantidad negativa
cuenta.depositar(-200); // Output: La cantidad a depositar debe ser positiva.
cuenta.verificarSaldo(); // Output: El saldo actual de la cuenta de Juan Pérez es: 1000 USD
