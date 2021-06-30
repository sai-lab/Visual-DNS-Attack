export let timer = 1000;

//var elem = document.getElementById('range');
/*var rangeValue = function(elem, timer){
	return function(evt){
		timer = elem.value;
	}
}
*/
/*
elem.addEventListener('input', function(){
	timer = elem.value;
});*/

export function changeTimer(){
	timer = document.getElementById('range').value;
}