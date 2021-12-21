import {masterData, fromDictoH, fromHtoU, fromCashtoU, fromDictoCash, AttackCash} from './modules/definition.js';
import * as surf from './modules/surfing.js';
import {onetimeCheck, cashIP_2} from './modules/onetimeCheck.js';
import {poisoning} from './modules/poisoning.js';
import {onetimePoisoning} from './modules/onetimePoisoning.js';
import {line_delete} from './modules/line_delete.js';
import {addAddress} from './modules/addAddress.js';
import {changeTimer, timer} from './modules/timer.js';

masterData["example.com"] = "111.111.111.111";
masterData["example2.com"] = "111.222.144.244";

//-- 以下、LeaderLineによる矢印定義

fromDictoH["example.com"] = new LeaderLine(
  document.getElementById('dictionary'),
  document.getElementById('host1'), {hide: true, middleLabel: '該当するipアドレスを見つける'});
//fromDictoH1.path = 'grid';

fromHtoU["111.111.111.111"] = new LeaderLine(
  document.getElementById('host1'),
  document.getElementById('usr'), {startPlug: 'arrow1', hide: true});
fromHtoU["111.111.111.111"].setOptions({endSocket: 'bottom', middleLabel: '通信開始', color:'rgba(30, 200, 30, 0.5)'});

fromCashtoU.setOptions({
  color:'rgba(30, 130, 250, 0.5)',
  outlineColor: 'rgb(30, 130, 250)'});

fromDictoCash.setOptions({
  color:'rgb(30, 130, 250)'});

fromHtoU["111.222.144.244"] = new LeaderLine(
  document.getElementById('host2'),
  document.getElementById('usr'), {startPlug: 'arrow1', hide: true});
fromHtoU["111.222.144.244"].setOptions({endSocket: 'bottom', middleLabel: '通信開始', color:'rgba(30, 200, 30, 0.5)'});

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
AttackCash[0] = new LeaderLine(
    document.getElementById('attacker'),
    LeaderLine.pointAnchor(document.getElementById('cash'),{x: '90%', y:'50%'}), {hide: true, startLabel: '以下同手順であるため省略'});


for (var i = 1; i <= 16 ; i++) {
  AttackCash[i] = new LeaderLine(
    document.getElementById('attacker'),
    LeaderLine.pointAnchor(document.getElementById('cash'),{x: '90%', y: i * 5 + '%'}), {hide: true});
}

let option;
for (var i = 2; i <= 16; i++) {
  option = document.createElement('option');
  option.innerHTML=i;
  document.getElementById('IDbit').appendChild(option);
}


document.getElementById("buttonHost").addEventListener("click", surf.modalOpen, false);
document.getElementById("buttonHost").addEventListener("click", surf.surfing, false);
document.getElementById("onceButton").addEventListener("click", onetimeCheck, false);
document.getElementById("hackerHost").addEventListener("click", poisoning, false);
document.getElementById("hackerHost2").addEventListener("click", onetimePoisoning, false);
document.getElementById("deleteButton").addEventListener("click", line_delete, false);
document.getElementById("addButton").addEventListener("click", addAddress, false);
document.getElementById("range").addEventListener("input", changeTimer);
