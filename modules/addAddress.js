import {fromDictoH, fromHtoU, masterData} from './definition.js'

export function addAddress(){
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
