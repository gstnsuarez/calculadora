class Display{

	constructor(pantallaValorAnterior,pantallaValor)
	{
		this.pantallaValorAnterior=pantallaValorAnterior;
		this.pantallaValor=pantallaValor;
		this.calcular = new Calculadora();
		this.operacion = undefined;
		this.valor = '';
		this.valorAnterior = '';
		this.signo = '';
	}

	agregar(number){
		if (number =='.' && this.valor.includes('.')) return
		this.valor = this.valor + number;
		this.mostrarActual();	
	}

	agregarSigno(signo){

		if ( !isNaN(this.valor) && !isNaN(this.valorAnterior) ){
		this.signo = signo;
		this.mostrarActual();
	} else {
		window.alert('valor incorrecto');
		this.signo='';
		this.valor='';
		this.valorAnterior= '';
	}
		
	
	}


	borrar(){
		this.valor = this.valor.slice(0,-1);
		this.mostrarActual();
	}

	borrarTodo(){
		this.valor = '';
		this.valorAnterior = '';
		this.signo = '';
		this.operacion = undefined
		this.mostrarActual();
	}

	mostrarActual(){

		this.pantallaValorAnterior.textContent= `${this.signo=='='? " " : this.signo} ${this.valorAnterior} ` ;
		this.pantallaValor.textContent=this.valor ;

	}
	resolver(tipo){

		

		if(tipo!=='raiz')
			{
				this.operacion!== 'igual' && this.calculador();
				this.operacion = tipo;
				this.valorAnterior = this.valor || this.valorAnterior;
				this.valor = '';
				this.signo = '';
				this.mostrarActual();
				}else {
				const valor = parseFloat(this.valor);
				const valorAnterior = parseFloat(this.valorAnterior);
				this.operacion!== 'igual' && this.calculador();
				this.operacion = tipo;
				if (!isNaN(valor)) {
				this.valor = this.calcular[this.operacion](valor);
				this.valorAnterior = this.valor || this.valorAnterior;
				this.valor = '';
				this.signo = '';
				this.mostrarActual();
					} else {
				this.valorAnterior = this.calcular[this.operacion](valorAnterior);
				this.mostrarActual();
					}
			 }
	
	}


	calculador(){

		const valor = parseFloat(this.valor);
		const valorAnterior = parseFloat(this.valorAnterior);
		if ( isNaN(valor) || isNaN(valorAnterior) ) return
		this.valor = this.calcular[this.operacion](valorAnterior,valor);
	}
		
	
}