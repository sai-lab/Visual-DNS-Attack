import {disabledButton} from './disabledButton.js';
import {checkTable} from './checkTable.js';
import {showHide} from './showHide.js';
import {sleep} from './sleep.js';
import {line_add} from './line_add.js';
import {fromAttacktoCash, fromCashtoDic, fromDictoH, fromAttacktoCash_poison, firstAttack, lastAttack} from './definition.js';
import {timer} from './timer.js';
import {randomAccess} from './randomAccess.js';
import {leaderLineSelect} from './leaderLineSelect.js';

export async function poisoning(){
	var table = document.getElementById('cashTable');
	//var Unum = document.form1.URL.options[document.form1.URL.selectedIndex].value.slice(3,4);
	var mainURL = document.form2.target.options[document.form2.target.selectedIndex].textContent;
	var cashIP;
	let cashID;
	const bitID = document.form3.cashID.options[document.form3.cashID.selectedIndex].textContent;
	disabledButton(null, true);
	showHide(fromAttacktoCash);
	await sleep(timer);
	console.log(mainURL);//確認用

	cashIP = checkTable(table, mainURL);
	if(cashIP == false){
		showHide(fromCashtoDic);
		cashID = Math.floor(Math.random() * (2 ** bitID));
		document.getElementById('cashsabaID').textContent = "TxID：" + cashID;
		
		await sleep(timer);
		showHide(fromDictoH[mainURL]);
		await sleep(timer);
		//showHide(fromAttacktoCash_poison);
		//-- IDビット数によって矢印の太さを変えて表示している
		showHide(firstAttack);
		await sleep(timer);
		leaderLineSelect(true);
		await sleep(timer);
		leaderLineSelect(false);
		if(randomAccess(cashID) == true){
			lastAttack.setOptions({middleLabel: 'TxID:'+ cashID + 'でポイズニング成功！！(キャッシュ確認！)'});
			showHide(lastAttack);
			await sleep(timer);
			cashIP = line_add(table, mainURL, "123.200.200.1");//直書きはのちに変更したい
		}else{
			alert('失敗！');
		}
	}else{
		alert('キャッシュにすでにあるため送り込むことができない');
	}
	//--攻撃回数も書き換え
	document.getElementById('attackCount').textContent = "攻撃成功確率 1/"+ (2**document.form3.cashID.options[document.form3.cashID.selectedIndex].textContent);
	disabledButton(null, false);
}
