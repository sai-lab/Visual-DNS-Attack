import {disabledButton} from './disabledButton.js';
import {onceDir} from './onceDir.js';
import {line_add} from './line_add.js';
import {checkTable} from './checkTable.js';
import {fromAttacktoCash, fromCashtoDic, fromDictoH, fromAttacktoCash_poison, hacker2, AttackCash, firstAttack, lastAttack} from './definition.js';
import {randomAccess} from './randomAccess.js';
import {leaderLineSelect} from './leaderLineSelect.js';

let Hcheck = 0;
let cashIP_2;
let cashID;

export function onetimePoisoning(){
	let table = document.getElementById('cashTable');
	let mainURL = document.form2.target.options[document.form2.target.selectedIndex].textContent;
	const bitID = document.form3.cashID.options[document.form3.cashID.selectedIndex].textContent;
	disabledButton(hacker2, true);


	switch(Hcheck){
		case 0: fromAttacktoCash.show();break;
		case 1: cashIP_2 = checkTable(table, mainURL);
				if(cashIP_2 == false){
					onceDir(fromAttacktoCash, fromCashtoDic);
					cashID = Math.floor(Math.random() * (2 ** bitID));
					document.getElementById('cashsabaID').textContent = "TxID：" + cashID;
				}else{
					fromAttacktoCash.hide();
					alert('キャッシュにすでにあるため送り込むことができない');
					disabledButton(hacker2, false);
					Hcheck = -1;
				}
				break;
		case 2: onceDir(fromCashtoDic, fromDictoH[mainURL]);break;
		case 3: onceDir(fromDictoH[mainURL], firstAttack);break;
		case 4: firstAttack.hide(); leaderLineSelect(true); break;
		case 5: if(randomAccess(cashID) == true){
					lastAttack.setOptions({middleLabel: 'TxID:'+ cashID + 'でポイズニング成功！！(キャッシュ確認！)'});
					leaderLineSelect(false);lastAttack.show();
					cashIP_2 = line_add(table, mainURL, "123.200.200.1");//直書きはのちに変更したい
				}else{
					leaderLineSelect(false);
					alert('失敗！');
					document.getElementById('attackCount').textContent = "攻撃成功確率 1/"+ (2**document.form3.cashID.options[document.form3.cashID.selectedIndex].textContent);
					disabledButton(hacker2, false);
					Hcheck = -1;
				}
				break;
		default: Hcheck = -1; disabledButton(hacker2, false);lastAttack.hide();
				 document.getElementById('attackCount').textContent = "攻撃成功確率 1/"+ (2**document.form3.cashID.options[document.form3.cashID.selectedIndex].textContent);
				 break;
	}
	Hcheck++;
}
