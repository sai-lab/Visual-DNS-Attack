import {disabledButton} from './disabledButton.js';
import {fromUtoCash, fromCashtoDic, fromDictoH, masterData, fromDictoCash, fromCashtoU, fromVirustoU, fromHtoU} from './definition.js';
import {showHide} from './showHide.js';
import {sleep} from './sleep.js';
import {checkTable} from './checkTable.js';
import {line_add} from './line_add.js';
import {timer} from './timer.js';

export async function surfing(){
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
//-- ちょっと確認用
export function modalOpen() {
    console.log("hello");
}
