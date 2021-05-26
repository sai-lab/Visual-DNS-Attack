// キャッシュ表の削除
export function line_delete(){
	const parent = document.getElementById('cashTable');
	/*while(parent.firstChild){
		parent.removeChild(parent.firstChild);
		console.log("saa");
	}*/
	if (parent.hasChildNodes()) {
		var children = parent.childNodes;
		var length = children.length;

		for(let i = length - 1; i > 1; i--){//ほんとは1からだけどexample.comつけてるせいで2になってる
			console.log(children.length);
			parent.removeChild(children[i]);
		}
	}	
}