import {disabledButton} from './disabledButton.js';
import {button2, fromUtoCash, fromCashtoDic, fromDictoH, masterData, fromDictoCash, fromCashtoU, fromVirustoU, fromHtoU} from './definition.js';
import {onceDir} from './onceDir.js';
import {sleep} from './sleep.js';
import {checkTable} from './checkTable.js';
import {line_add} from './line_add.js';

//export let Hcheck = 0;
export let cashIP_2;
let Hcheck = 0;

export function onetimeCheck(){
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
						disabledButton(button2, false);
					}	
				}else{
					onceDir(fromCashtoU, fromHtoU[cashIP_2]);
				} break;
		case 100: Hcheck = -1; fromVirustoU.hide(); disabledButton(button2, false); Hcheck = -1;break;
		default : fromHtoU[cashIP_2].hide(); disabledButton(button2, false); Hcheck = -1;
	}
	Hcheck++;
}
