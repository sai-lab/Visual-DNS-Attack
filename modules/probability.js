export function probability(a, b){

	let divisor = gcb(a, b);

	return "攻撃成功確率" + a / divisor + "/" + b / divisor;
}

function gcb(a, b){
	let num1 = a;
	let num2 = b;

	while(num2 !== 0){
		let m = num1 % num2;
		num1 = num2;
		num2 = m;
	}
	return num1;
}