function iniciaModal(modalID) {
	const nossotime = document.getElementById(modalID);
	if(nossotime){
		nossotime.classList.add('mostrar');
		nossotime.addEventListener('click', (e) => {
			if(e.target.id == modalID || e.target.id == 'fechar'){
				nossotime.classList.remove('mostrar');
			}
		});
	}
}

const nossotime = document.querySelector('.div-item-time');


nossotime.addEventListener('click', () => iniciaModal('modal-container-spyria'));
 