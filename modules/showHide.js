import {sleep} from './sleep.js';
import {timer} from './timer.js';

export async function showHide(dir){
	dir.show();
	await sleep(timer);
	dir.hide();
}