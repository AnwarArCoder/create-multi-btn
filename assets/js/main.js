let buttonAfter = document.getElementById('btnAfter');
let buttonBefore = document.getElementById('btnBefore');
let buttonInside = document.getElementById('btnInside');
let h1Header = document.getElementById('helloH1');
let boxBig = document.getElementById('box');


buttonAfter.onclick = function(){
	boxBig.after(h1Header)
}
buttonBefore.onclick = function(){
	boxBig.before(h1Header)
}
buttonInside.onclick = function(){
	boxBig.append(h1Header)
}





