class CalcController {
	
	constructor(){
		// Atributos privados: Com underline no começo	
		this._displayCalc = "0";
		this._currentDate;
	}

	// O JavaScript tem palavras reservadas para os getters e setters

	get displayCalc(){
		return this._displayCalc;
	}

	set displayCalc(displayCalc){
		this._displayCalc = displayCalc;
	}

	get currentDate(){
		return this._currentDate;
	}

	set currentDate(currentDate){
		this._currentDate = currentDate;
	}
}