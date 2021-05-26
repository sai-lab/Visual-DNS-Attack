import {disabledButton} from './disabledButton.js';
import {onceDir} from './onceDir.js';
import {line_add} from './line_add.js';
import {checkTable} from './checkTable.js';
import {fromAttacktoCash, fromCashtoDic, fromDictoH, fromAttacktoCash_poison, hacker2} from './definition.js';

let Hcheck = 0;
let cashIP_2;

export function onetimePoisoning(){
	var table = document.getElementById('cashTable');
	var mainURL = document.form2.target.options[document.form2.target.selectedIndex].textContent;
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
		case 3: cashIP_2 = line_add(table, mainURL, "123.200.200.1");
				onceDir(fromDictoH[mainURL], fromAttacktoCash_poison);
				break;
		default: fromAttacktoCash_poison.hide(); Hcheck = -1; disabledButton(hacker2, false); break;
	}
	Hcheck++;
}
