export function randomAccess(ID) {
	const AttackCount = document.getElementById('attackcount').value;
	//console.log(document.getElementById('cashsabaID').textContent);

	for (let i = 0; i <= AttackCount; i++) {
		if(i == ID){
			return true;
		}
	}
	return false;
}