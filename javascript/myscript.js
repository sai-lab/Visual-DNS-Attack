// ステップごとにできるように
const button = document.getElementById("buttonHost");
const button2 = document.getElementById("onceButton");
const menu = document.getElementById("hostMenu");
const hacker = document.getElementById("hackerHost");
const hacker2 = document.getElementById("hackerHost2");
const hackmenu = document.getElementById("hackerMenu");
var timer = 1000; //矢印出すタイミングを調整

//var Nhost = 3; //デフォルトで二つおいているため3から
var Hcheck = 0;
var fromDictoH = new Array(); //URL検索で特定するため、添え字はURL
var fromHtoU = new Array(); //最終的な通信はIPアドレスを使うため、添え字はIPアドレス
var masterData = new Array();// 絶対不変のでーた
// var next = '<br>'; 
var cashIP_2;

masterData["example.com"] = "111.111.111.111";
masterData["example2.com"] = "111.222.144.244";

//-- 以下、LeaderLineによる矢印定義

var fromUtoDic = new LeaderLine(
  document.getElementById('usr'),
  //LeaderLine.pointAnchor(document.getElementById('dictionary'), {x: '20%', y: '100%'})
  document.getElementById('dictionary'), {hide: true});

fromDictoH["example.com"] = new LeaderLine(
  document.getElementById('dictionary'),
  document.getElementById('host1'), {hide: true, middleLabel: '該当するipアドレスを見つける'});
//fromDictoH1.path = 'grid';

var fromUtoCash = new LeaderLine(
  document.getElementById('usr'),
  document.getElementById('cash'), {hide: true, middleLabel: 'IPアドレスを聞きにいく'});

var fromCashtoDic = new LeaderLine(
  document.getElementById('cash'),
  document.getElementById('dictionary'), {hide: true, middleLabel: 'キャッシュになかったので他サーバにipアドレスを聞きに行く'});

fromHtoU["111.111.111.111"] = new LeaderLine(
  document.getElementById('host1'),
  document.getElementById('usr'), {startPlug: 'arrow1', hide: true});
fromHtoU["111.111.111.111"].setOptions({endSocket: 'bottom', middleLabel: '通信開始', color:'rgba(30, 200, 30, 0.5)'});

var fromCashtoU = new LeaderLine(
  document.getElementById('cash'),
  document.getElementById('usr'), {hide: true, middleLabel: 'ipアドレスを返す'});

fromCashtoU.setOptions({
	color:'rgba(30, 130, 250, 0.5)',
	outlineColor: 'rgb(30, 130, 250)'});

var fromDictoCash = new LeaderLine(
  document.getElementById('dictionary'),
  //LeaderLine.pointAnchor(document.getElementById('dictionary'), {x: '20%', y: '100%'})
  document.getElementById('cash'), {hide: true, middleLabel: '見つかったipアドレスを返す'});
fromDictoCash.setOptions({
	color:'rgb(30, 130, 250)'});

var fromUtoVirus = new LeaderLine(
  document.getElementById('usr'),
  //LeaderLine.pointAnchor(document.getElementById('dictionary'), {x: '20%', y: '100%'})
  document.getElementById('virushost'), {hide: true, middleLabel: 'アクセスする'});

var fromVirustoU = new LeaderLine(
  document.getElementById('virushost'),
  //LeaderLine.pointAnchor(document.getElementById('dictionary'), {x: '20%', y: '100%'})
  document.getElementById('usr'), {hide: true, middleLabel: '攻撃される', endPlug:'crosshair'});

var fromAttacktoCash = new LeaderLine(
  document.getElementById('attacker'),
  //LeaderLine.pointAnchor(document.getElementById('dictionary'), {x: '20%', y: '100%'})
  document.getElementById('cash'), {endSocket: 'right', hide: true, middleLabel: '目的のドメイン名をアクセス'});

var fromAttacktoCash_poison = new LeaderLine(
  document.getElementById('attacker'),
  //LeaderLine.pointAnchor(document.getElementById('dictionary'), {x: '20%', y: '100%'})
  document.getElementById('cash'), {endSocket: 'left', hide: true, middleLabel: '権威サーバから送られる前にデータを送り込む'});


fromHtoU["111.222.333.444"] = new LeaderLine(
  document.getElementById('host2'),
  document.getElementById('usr'), {startPlug: 'arrow1', hide: true});
fromHtoU["111.222.333.444"].setOptions({endSocket: 'bottom', middleLabel: '通信開始', color:'rgba(30, 200, 30, 0.5)'});

fromDictoH["example2.com"] = new LeaderLine(
  document.getElementById('dictionary'),
  document.getElementById('host2'), {hide: true, middleLabel: '該当するipアドレスを見つける'});
//fromDictoH1.path = 'grid';

// 起動時に表を追加しておく
window.onload = function(){
	var tr = document.createElement('tr');
  	var td = document.createElement('td');
  	var input = document.createElement('input');
  	input.type = 'text';
  	input.value = "example2.com";
  	input.classList.add("cashts");
  	td.appendChild(input);
  	tr.appendChild(td);
  	td = document.createElement('td');
  	input = document.createElement('input');
  	input.value = "111.222.144.244";
  	input.type = 'text';
  	input.classList.add("cashts");
  	td.appendChild(input);
  	tr.appendChild(td);
  	document.getElementById('cashTable').appendChild(tr);
}

var elem = document.getElementById('range');
/*var rangeValue = function(elem, timer){
	return function(evt){
		timer = elem.value;
	}
}
*/
elem.addEventListener('input', function(){
	timer = elem.value;
});

//-- 順番通りに表示、削除

async function surfing(){
	disabledButton(null, true);
	var table = document.getElementById('cashTable');
	//var Unum = document.form1.URL.options[document.form1.URL.selectedIndex].value.slice(3,4);
	var mainURL = document.form1.URL.options[document.form1.URL.selectedIndex].textContent;
	var cashIP;
 	//console.log(mainURL);

	showHide(fromUtoCash);
	//console.log(timer);
	await sleep(timer);
	//-- キャッシュサーバ内を検索
	cashIP = checkTable(table, mainURL)
    if(cashIP == false){
    	showHide(fromCashtoDic);
		await sleep(timer);
		showHide(fromDictoH[mainURL]);
		await sleep(timer);
  		cashIP = line_add(table, mainURL, masterData[mainURL]);//document.getElementById('host' + Unum).textContent);// キャッシュサーバにデータ追加

  		showHide(fromDictoCash);
  		await sleep(timer);
  		showHide(fromCashtoU);
  		await sleep(timer);
  		if(masterData[mainURL] != cashIP){
  			if(cashIP == "123.200.200.1"){
  				showHide(fromVirustoU);
  			}else{
  				alert('本来と違うIPアドレスになっています');	
  			}
		}else{
			showHide(fromHtoU[cashIP]);
		} //一応
    }else{           //-- 文言変える可能性あるため、一旦放置
    	showHide(fromCashtoU);
		await sleep(timer);
		if(masterData[mainURL] != cashIP){
			if(cashIP == "123.200.200.1"){
  				showHide(fromVirustoU);
  			}else{
  				alert('本来と違うIPアドレスになっています');	
  			}
		}else{
			showHide(fromHtoU[cashIP]);
		}
    }

	disabledButton(null, false);
	//console.log(document.form1.URL.options[document.form1.URL.selectedIndex].value); //プルダウンメニューのvalue取得
	//console.log(document.form1.URL.options[document.form1.URL.selectedIndex].textContent);
}

//-- 一個ずつ表示、削除
function onetimeCheck(){
	disabledButton(button2, true);
	var table = document.getElementById('cashTable');
	//var Unum = document.form1.URL.options[document.form1.URL.selectedIndex].value.slice(3,4);
	var mainURL = document.form1.URL.options[document.form1.URL.selectedIndex].textContent;

	switch(Hcheck){
		case 0: fromUtoCash.show(); break;
		case 1: cashIP_2 = checkTable(table, mainURL);
				if(cashIP_2 != false){
					onceDir(fromUtoCash, fromCashtoU); 
					Hcheck = 4;
				}else{
					onceDir(fromUtoCash, fromCashtoDic);
				}break;
		case 2: onceDir(fromCashtoDic, fromDictoH[mainURL]); break;
		case 3: cashIP_2 = line_add(table, mainURL, masterData[mainURL]); onceDir(fromDictoH[mainURL], fromDictoCash); break;
		case 4: onceDir(fromDictoCash, fromCashtoU); break;
		case 5: if(masterData[mainURL] != cashIP_2){
					fromCashtoU.hide();
					if(cashIP_2 == "123.200.200.1"){
						//後程変更
						fromVirustoU.show();
						Hcheck = 99;
					}else{
						Hcheck = -1;
						alert('書き換えられています');
					}	
				}else{
					onceDir(fromCashtoU, fromHtoU[cashIP_2]);
				} break;
		case 100: Hcheck = -1; fromVirustoU.hide(); disabledButton(button2, false); Hcheck = -1;break;
		default : fromHtoU[cashIP_2].hide(); disabledButton(button2, false); Hcheck = -1;
	}
	Hcheck++;
}

//-- ハッカー側の行動
async function poisoning(){
	var table = document.getElementById('cashTable');
	//var Unum = document.form1.URL.options[document.form1.URL.selectedIndex].value.slice(3,4);
	var mainURL = document.form2.target.options[document.form2.target.selectedIndex].textContent;
	var cashIP;
	disabledButton(null, true);
	showHide(fromAttacktoCash);
	await sleep(timer);
	console.log(mainURL);//確認用

	cashIP = checkTable(table, mainURL);
	if(cashIP == false){
		showHide(fromCashtoDic);
		await sleep(timer);
		showHide(fromDictoH[mainURL]);
		await sleep(timer);
		cashIP = line_add(table, mainURL, "123.200.200.1");//直書きはのちに変更したい
		showHide(fromAttacktoCash_poison);
		await sleep(timer);
	}else{
		alert('キャッシュにすでにあるため送り込むことができない');
	}
	disabledButton(null, false);
}

function onetimePoisoning(){
	var table = document.getElementById('cashTable');
	var mainURL = document.form2.target.options[document.form2.target.selectedIndex].textContent;
	var cashIP_2;
	disabledButton(hacker2, true);


	switch(Hcheck){
		case 0: fromAttacktoCash.show();break;
		case 1: cashIP_2 = checkTable(table, mainURL);
				if(cashIP_2 == false){
					onceDir(fromAttacktoCash, fromCashtoDic);
				}else{
					fromAttacktoCash.hide();
					alert('キャッシュにすでにあるため送り込むことができない');
					disabledButton(hacker2, false);
					Hcheck = -1;
				}
				break;
		case 2: onceDir(fromCashtoDic, fromDictoH[mainURL]);break;
		case 3: cashIP = line_add(table, mainURL, "123.200.200.1");
				onceDir(fromDictoH[mainURL], fromAttacktoCash_poison);
				break;
		default: fromAttacktoCash_poison.hide(); Hcheck = -1; disabledButton(hacker2, false); break;
	}
	Hcheck++;
}

//-- キャッシュサーバ内で該当するIPアドレスを検索
function checkTable(table, surfURL){
    var cell = document.getElementsByClassName("cashts");
    for (var i = 0; i < cell.length; i+=2) { //表からURL(ホスト)のみを抽出
    	//console.log(cell[i].value);
    	if(cell[i].value == surfURL){
    		return cell[i+1].value;
    	}
    }
    return false;
}


// キャッシュさーばにデータ追加
function line_add(table, URL, host){
	var tr = document.createElement('tr');
  	var td = document.createElement('td');
  	var input = document.createElement('input');
  	input.type = 'text';
  	input.value = URL;
  	input.classList.add("cashts");
  	td.appendChild(input);
  	tr.appendChild(td);
  	td = document.createElement('td');
  	input = document.createElement('input');
  	input.value = host;
  	input.type = 'text';
  	input.classList.add("cashts");
  	td.appendChild(input);
  	tr.appendChild(td);
  	table.appendChild(tr);

  	return host;
}

// キャッシュ表の削除
function line_delete(){
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

// ホスト追加

function addAddress(){
	var IPpattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/g;
	var URLpattern = /^(\w{1,}\.){1,}\w{1,}$/g;
	while(1){
		var IPaddress = prompt('IPアドレスを入力してください(例)133.92.145.100');
		if(IPaddress==null) return;
		if(IPaddress.match(IPpattern)) break;

	}
	while(1){
		var URL = prompt('ドメイン名を入力してください(例)example100.co.jp');
		if(URL==null) return;
		if(URL.match(URLpattern)) break;

	}

	var host = document.getElementById('host');

	// このあたりに正しいかどうかの判定ぶちこみたい
	//ダブりはマスターデータ使えばfor文使わずとも行ける

	//-- divとアドレスの追加
	var div = document.createElement('div');
	var inline1 = document.createElement('inline');
	var span = document.createElement('span');
	var image = document.createElement('img');
	image.src = "img/address2.png";
	inline1.classList.add("btn-mouseover");
	//span.id = 'host' + Nhost;
	span.id = IPaddress;
	span.innerHTML = IPaddress;
	inline1.appendChild(image);
	inline1.appendChild(document.createElement('br'));
	inline1.appendChild(span);
	//--URL部分の追加
	var inline2 = document.createElement('inline');
	inline2.classList.add("mouseover-box");
	//inline2.id = 'URL' + Nhost;
	inline2.id = URL;
	inline2.innerHTML = URL;

	div.appendChild(inline1);
	div.appendChild(inline2);
	host.appendChild(div); 

	// プルダウンメニューにURL追加
	var option = document.createElement('option');
	var option2 = document.createElement('option');
	//option.value = 'URL' + Nhost;
	option.value = URL;
	option.innerHTML = URL;
	option2.value = URL;
	option2.innerHTML = URL;
	document.getElementById('hostMenu').appendChild(option);
	document.getElementById('hackerMenu').appendChild(option2);


	fromDictoH[URL] = new LeaderLine(
  		document.getElementById('dictionary'),
  		document.getElementById(IPaddress), {hide: true, middleLabel: '該当するipアドレスを見つける'});
	//fromDictoH1.path = 'grid';

	fromHtoU[IPaddress] = new LeaderLine(
  		document.getElementById(IPaddress),
  		document.getElementById('usr'), {startPlug: 'arrow1', hide: true});
		fromHtoU[IPaddress].setOptions({endSocket: 'bottom', middleLabel: '通信開始', color:'rgba(30, 200, 30, 0.5)'});

	//Nhost++;
	masterData[URL] = IPaddress;

}

//ボタン表示非表示の変更(exceptionButtonの引数をnullにすることでALL表示or非表示)

function disabledButton(exceptionButton, flag){
	
	if(exceptionButton != button) button.disabled = flag;
	if(exceptionButton != button2) button2.disabled = flag;
	if(exceptionButton != hacker) hacker.disabled = flag;
	if(exceptionButton != hacker2) hacker2.disabled = flag;

	menu.disabled = flag;
	hackmenu.disabled = flag;
}

//有象無象

async function showHide(dir){
	dir.show();
	await sleep(timer);
	dir.hide();
}

function onceDir(dir1, dir2){
	dir1.hide();
	dir2.show();
}

//-- sleepないから作る

function sleep(waitMsec){
	return new Promise(function(resolve){
		setTimeout(function(){resolve()}, waitMsec);
	})
}
