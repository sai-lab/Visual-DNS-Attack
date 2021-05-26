import {button, button2, hacker, hacker2, menu, hackmenu} from './definition.js';

export function disabledButton(exceptionButton, flag){
	
	if(exceptionButton != button) button.disabled = flag;
	if(exceptionButton != button2) button2.disabled = flag;
	if(exceptionButton != hacker) hacker.disabled = flag;
	if(exceptionButton != hacker2) hacker2.disabled = flag;

	menu.disabled = flag;
	hackmenu.disabled = flag;
}