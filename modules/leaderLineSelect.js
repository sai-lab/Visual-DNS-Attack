import {AttackCash} from './definition.js';

export function leaderLineSelect(flag){
	for (let i = AttackCash.length - 1; i >= 0; i--) {
		if(flag){
			AttackCash[i].show();
		}else{
			AttackCash[i].hide();
		}
	}
}