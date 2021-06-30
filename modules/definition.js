// ステップごとにできるように
export const button = document.getElementById("buttonHost");
export const button2 = document.getElementById("onceButton");
export const menu = document.getElementById("hostMenu");
export const hacker = document.getElementById("hackerHost");
export const hacker2 = document.getElementById("hackerHost2");
export const hackmenu = document.getElementById("hackerMenu");

export let Hcheck = 0;
//export let timer = 1000; //矢印出すタイミングを調整
export var fromDictoH = new Array(); //URL検索で特定するため、添え字はURL
export var fromHtoU = new Array(); //最終的な通信はIPアドレスを使うため、添え字はIPアドレス
export var masterData = new Array();// 絶対不変のでーた
export var AttackCash = new Array();
// var next = '<br>'; 
//export let cashIP_2;

export var fromUtoDic = new LeaderLine(
  document.getElementById('usr'),
  //LeaderLine.pointAnchor(document.getElementById('dictionary'), {x: '20%', y: '100%'})
  document.getElementById('dictionary'), {hide: true});

export var fromUtoCash = new LeaderLine(
  document.getElementById('usr'),
  document.getElementById('cash'), {hide: true, middleLabel: 'IPアドレスを聞きにいく'});

export var fromCashtoDic = new LeaderLine(
  document.getElementById('cash'),
  document.getElementById('dictionary'), {hide: true, middleLabel: 'キャッシュになかったので他サーバにipアドレスを聞きに行く'});

export var fromCashtoU = new LeaderLine(
  document.getElementById('cash'),
  document.getElementById('usr'), {hide: true, middleLabel: 'ipアドレスを返す'});

export var fromDictoCash = new LeaderLine(
  document.getElementById('dictionary'),
  //LeaderLine.pointAnchor(document.getElementById('dictionary'), {x: '20%', y: '100%'})
  document.getElementById('cash'), {hide: true, middleLabel: '見つかったipアドレスを返す'});

export var fromUtoVirus = new LeaderLine(
  document.getElementById('usr'),
  //LeaderLine.pointAnchor(document.getElementById('dictionary'), {x: '20%', y: '100%'})
  document.getElementById('virushost'), {hide: true, middleLabel: 'アクセスする'});

export var fromVirustoU = new LeaderLine(
  document.getElementById('virushost'),
  //LeaderLine.pointAnchor(document.getElementById('dictionary'), {x: '20%', y: '100%'})
  document.getElementById('usr'), {hide: true, middleLabel: '攻撃される', endPlug:'crosshair'});

export var fromAttacktoCash = new LeaderLine(
  document.getElementById('attacker'),
  //LeaderLine.pointAnchor(document.getElementById('dictionary'), {x: '20%', y: '100%'})
  document.getElementById('cash'), {endSocket: 'right', hide: true, middleLabel: '目的のドメイン名をアクセス'});

export var fromAttacktoCash_poison = new LeaderLine(
  document.getElementById('attacker'),
  //LeaderLine.pointAnchor(document.getElementById('dictionary'), {x: '20%', y: '100%'})
  document.getElementById('cash'), {endSocket: 'left', hide: true, middleLabel: '権威サーバから送られる前にデータを送り込む'});
