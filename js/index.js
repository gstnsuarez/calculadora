
const pantallaValorAnterior = document.getElementById('valorAnterior')
const pantallaValor = document.getElementById('valor')

const botNumber = document.querySelectorAll('.number')
const botOperacion = document.querySelectorAll('.operacion')

const pantalla = new Display (pantallaValorAnterior,pantallaValor);

botNumber.forEach(boton =>{
	boton.addEventListener('click', () => pantalla.agregar(boton.innerHTML));
});

botOperacion.forEach(boton =>{
	boton.addEventListener('click', () => pantalla.resolver(boton.value));
});


botOperacion.forEach(boton =>{
	boton.addEventListener('click', () => pantalla.agregarSigno(boton.innerHTML));
});


