import $ from 'jquery';

class Modal {

	constructor(){
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}


	events(){
		this.openModalButton.click(this.openModal.bind(this));
		this.closeModalButton.click(this.closeModal.bind(this));
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(event){
		if(event.keyCode == 27){
			this.closeModal();
		}
	}

	openModal(){
		console.log(this.modal)
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal(){
		this.modal.removeClass("modal--is-visible");
		return false;
	}
}

export default Modal;


