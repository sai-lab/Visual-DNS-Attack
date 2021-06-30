//-- sleepないから作る
export function sleep(waitMsec){
	return new Promise(function(resolve){
		setTimeout(function(){resolve()}, waitMsec);
	})
}