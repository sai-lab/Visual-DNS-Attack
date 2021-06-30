//-- キャッシュサーバ内で該当するIPアドレスを検索
export function checkTable(table, surfURL){
    var cell = document.getElementsByClassName("cashts");
    for (var i = 0; i < cell.length; i+=2) { //表からURL(ホスト)のみを抽出
    	//console.log(cell[i].value);
    	if(cell[i].value == surfURL){
    		return cell[i+1].value;
    	}
    }
    return false;
}
