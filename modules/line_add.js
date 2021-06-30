
// キャッシュさーばにデータ追加
export function line_add(table, URL, host){
	var tr = document.createElement('tr');
  	var td = document.createElement('td');
  	var input = document.createElement('input');
  	input.type = 'text';
  	input.value = URL;
  	input.classList.add("cashts");
  	td.appendChild(input);
  	tr.appendChild(td);
  	td = document.createElement('td');
  	input = document.createElement('input');
  	input.value = host;
  	input.type = 'text';
  	input.classList.add("cashts");
  	td.appendChild(input);
  	tr.appendChild(td);
  	table.appendChild(tr);

  	return host;
}