"use strict";
class CalculadoraRPN {
	constructor() {
		this.pantalla = "";
		this.memoria = 0;
		this.pila = new Array();
	}
	esValido(result) {
		if (result != "" && !result.includes("undefined") && !result.includes("NaN")) {
			return true;
		}
		return false;
	}
	apilar(){
		if (this.esValido(document.getElementById("pantalla").value)) {
			this.pila.push(document.getElementById("pantalla").value);
		}
		this.pantalla = "";
		document.getElementById("pila").value = this.mostrar();
		document.getElementById("pantalla").value = this.pantalla;
    }
	mostrar() {
		var stringPila = "";
		for (var i in this.pila) stringPila += this.pila[i] + " ";
		return stringPila;
	}
	desapilar(){
		this.pantalla = this.pila.pop();
		document.getElementById("pila").value = this.mostrar();
		document.getElementById("pantalla").value = this.pantalla;
		if (this.esValido(document.getElementById("pantalla").value)) {
			this.pantalla = "";
		}
	}
	mMenos() {
		try {
			this.memoria = this.memoria - this.pantalla;
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	mMas() {
		try {
			this.memoria = this.memoria + this.pantalla;
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	seno() {
		try {
			this.pantalla = Math.sin(this.pila.pop());
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	coseno() {
		try {
			this.pantalla = Math.cos(this.pila.pop());
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	tangente() {
		try {
			this.pantalla = Math.tan(this.pila.pop());
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	cuadrado() {
		try {
			this.pantalla = Math.pow(this.pila.pop(),2);
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	potencia() {
		try {
			let op2 = parseInt(this.pila.pop());
			let op1 = parseInt(this.pila.pop());
			this.pantalla = Math.pow(op1,op2);
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	cosecante() {
		try {
			this.pantalla = 1/Math.sin(this.pila.pop());
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	secante() {
		try {
			this.pantalla = 1/Math.cos(this.pila.pop());
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	cotangente() {
		try {
			this.pantalla = 1/Math.tan(this.pila.pop());
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	raiz() {
		try {
			this.pantalla = Math.sqrt(this.pila.pop());
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	potenciaDiez() {
		try {
			this.pantalla = Math.pow(10,this.pila.pop());
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	logaritmo() {
		try {
			this.pantalla = Math.log(this.pila.pop());
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	exponencial() {
		try {
			this.pantalla = Math.exp(this.pila.pop());
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	modulo() {
		try {
			let op2 = parseInt(this.pila.pop());
			let op1 = parseInt(this.pila.pop());
			this.pantalla = op1%op2;
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	mrc() {
		this.pantalla += this.memoria;
		document.getElementById("pantalla").value = this.pantalla;
	}
	borrarTodo() {
		this.pila = new Array();
		this.pantalla = "";
		document.getElementById("pila").value = this.mostrar();
		document.getElementById("pantalla").value = this.pantalla;
	}
	borrarDigito() {
		this.pantalla = this.pantalla.substring(0, this.pantalla.length-1);
		document.getElementById("pantalla").value = this.pantalla;
	}
	division() {
		try {
			let op2 = parseInt(this.pila.pop());
			let op1 = parseInt(this.pila.pop());
			this.pantalla = op1/op2;
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	pi() {
		this.pantalla += Math.PI;
		document.getElementById("pantalla").value = this.pantalla;
	}
	digitos(digito) {
		this.pantalla += digito;
		document.getElementById("pantalla").value = this.pantalla;
	}
	multiplicacion() {
		try {
			let op2 = parseInt(this.pila.pop());
			let op1 = parseInt(this.pila.pop());
			this.pantalla = op1*op2;
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	factorial() {
		try {
			this.pantalla = this.factorialR(this.pila.pop());
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	factorialR(n) {
		var i, total = 1; 
		for (i=1; i<=n; i++) {
			total = total * i; 
		}
		return total;
	}
	resta() {
		try {
			let op2 = parseInt(this.pila.pop());
			let op1 = parseInt(this.pila.pop());
			this.pantalla = op1-op2;
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	absoluto() {
		try {
			this.pantalla = Math.abs(this.pila.pop());
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	suma() {
		try {
			let op2 = parseInt(this.pila.pop());
			let op1 = parseInt(this.pila.pop());
			this.pantalla = op1+op2;
			document.getElementById("pantalla").value = this.pantalla;
			if (this.esValido(document.getElementById("pantalla").value)) {
				this.apilar();
			}
		} catch (err) {
			document.getElementById("pantalla").value = "ERROR = " + err;
			this.pantalla = "";
		}
	}
	parentesis() {
		this.pantalla = "("+document.getElementById("pantalla").value+")";
		document.getElementById("pantalla").value = this.pantalla;
	}
	punto() {
		this.pantalla += ".";
		document.getElementById("pantalla").value = this.pantalla;
	}
}
var calculadoraRPN = new CalculadoraRPN();