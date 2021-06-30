export function randomAccess() {
	const bitID = document.form3.cashID.options[document.form3.cashID.selectedIndex].textContent;
	const ID = Math.floor(Math.random() * (2 ** bitID));

	//--とりあえず攻撃回数は固定
	for (let i = 0; i <= 100; i++) {
		if(i == ID){
			return true;
		}
	}
	return false;
}