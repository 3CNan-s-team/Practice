function searchchange() {
	var searchBtnObj = document.getElementById("searchBtn");
	var searchOpsObj = document.getElementById("searchOps");
	var searchTextObj = document.getElementById("searchText");
	var searchObj = document.getElementById("search");
	if(searchOps.options[0].selected) {
		searchBtnObj.value = "Google";
		searchBtnObj.style.backgroundColor = "darkmagenta";
		searchTextObj.name = "q";
		searchObj.action = "http://www.google.com/search";
	} else if(searchOps.options[1].selected) {
		searchBtnObj.value = "Baidu";
		searchBtnObj.style.backgroundColor = "blue";
		searchTextObj.name = "wd";
		searchObj.action = "https://www.baidu.com/s"
	} else if(searchOps.options[2].selected) {
		searchBtnObj.value = "Bing";
		searchBtnObj.style.backgroundColor = "#317ef3";
		searchTextObj.name = "q";
		searchObj.action = "https://cn.bing.com/search";
	} else if(searchOps.options[3].selected) {
		searchBtnObj.value = "360";
		searchBtnObj.style.backgroundColor = "#19b955";
		searchTextObj.name = "q";
		searchObj.action = "https://www.so.com/s";
	} else if(searchOps.options[4].selected) {
		searchBtnObj.value = "Sogou";
		searchBtnObj.style.backgroundColor = "#fd6853";
		searchTextObj.name = "query";
		searchObj.action = "https://www.sogou.com/web"
	}
}

var dis;
function lengthen() {
	var gamelistObj = document.getElementById("gamelist");
	dis = document.body.scrollTop || document.documentElement.scrollTop;
	var top = 197 - dis;
	if(dis > 197) {
		gamelistObj.style.top = "0px";
	} else if(dis < 197) {
		gamelistObj.style.top = top + "px";	
	}
}
function show() {
	var topBtnObj = document.getElementById("topBtn");
	var bottomBtnObj = document.getElementById("bottomBtn");
	dis = document.body.scrollTop || document.documentElement.scrollTop;
	if(dis > 170) {
		topBtnObj.style.display = "block";
		bottomBtnObj.style.display = "block";
	} else {
		topBtnObj.style.display = "none";
		bottomBtnObj.style.display = "none";
	}
}



var Ttimer, Btimer;

function totop() {
	cancelAnimationFrame(Ttimer);
	Ttimer = requestAnimationFrame(back);
}
function back(){
	var Tspace = document.body.scrollTop || document.documentElement.scrollTop;
	if(Tspace > 0) {
		document.body.scrollTop = document.documentElement.scrollTop = Tspace - 120;
		Ttimer = requestAnimationFrame(back);
	} else {
		cancelAnimationFrame(Ttimer);
	} 
}
function tobottom() {
	cancelAnimationFrame(Btimer);
	Btimer = requestAnimationFrame(go);
}
function go() {
	var old = document.body.scrollTop || document.documentElement.scrollTop;
	document.body.scrollTop = document.documentElement.scrollTop += 120;
	var fresh = document.body.scrollTop || document.documentElement.scrollTop;
	if(fresh == old) {
		cancelAnimationFrame(Btimer);
	} else {
		Btimer = requestAnimationFrame(go);					
	}
}
var dostatus = true, reladis = 0;
function descriptionopen() {
	var desciptionObjs = document.getElementsByClassName("descriptions");
	var detailsObjs = document.getElementsByClassName("desdetails");
	var expendBtnObjs = document.getElementsByClassName("expandBtn");
	var abcp1Obj = document.getElementById("abc_object1");
	var abcp2Obj = document.getElementById("abc_object2");


	if(dostatus == true) {
		for(let i = 0; i < desciptionObjs.length; i++) {
			detailsObjs[i].style.display = "block";
			desciptionObjs[i].style.borderRadius = "12px 12px 0 0";
			expendBtnObjs[i].style.borderRadius = "0 12px 0 0";
		}
		reladis = 60;
		abcp1Obj.style.transition = "none";
		abcp2Obj.style.transition = "none";
		dostatus = false;
	} else if(dostatus == false) {
		for(let i = 0; i < desciptionObjs.length; i++) {
			detailsObjs[i].style.display = "none";
			desciptionObjs[i].style.borderRadius = "12px";
			expendBtnObjs[i].style.borderRadius = "0 12px 12px 0";
		}
		reladis = 0;
		dostatus = true;
	}
	abcp1Obj.style.top = 756 + reladis + "px";
	abcp2Obj.style.top = 346 + reladis + "px";
}


var upspeed = 8000, spi = 0, speed = 30, newtop;
var abcp2Obj = document.getElementById("abc_object2");
var abcp1Obj = document.getElementById("abc_object1");
abcp2Obj.style.top = "346px";
abcp2Obj.style.left = "436px";

document.onkeydown = function(event) {
	if(time == 0) {
		return;
	}
	abcp2Obj.style.transition = "300ms";
	abcp1Obj.style.transition = upspeed + "ms";
	// 37 = left, 38 = top, 39 = right, 40 = bottom
	var oldtop = abcp2Obj.style.top;
	var oldleft = abcp2Obj.style.left;

	if(parseInt(oldtop) > (756 + reladis)) {
		abcp1Obj.style.top = 756 + reladis + "px";
	} else {
		abcp1Obj.style.top = oldtop;
	}

	if(parseInt(oldleft) > 1166) {
		abcp1Obj.style.left = "1166px";
	} else {
		abcp1Obj.style.left = oldleft;
	}

	if(event.keyCode == 37) {
		abcp2Obj.style.left = abcp2Obj.offsetLeft - speed + "px";
	}
	if(event.keyCode == 39) {
		abcp2Obj.style.left = abcp2Obj.offsetLeft + speed + "px";
	}
	var newleft = parseInt(abcp2Obj.style.left);
	if(newleft <= 436 || newleft >= 1236) {
		abcp2Obj.style.left = oldleft;
	}

	var dis1 = Math.abs(newleft - 436);
	var dis2 = Math.abs(1236 - newleft);
	var dis3, dis4;
	if(dis1 < speed) {
		abcp2Obj.style.left = "436px";
	}
	if(dis2 < speed) {
		abcp2Obj.style.left = "1236px";
	}
	if(event.keyCode == 38) {
		abcp2Obj.style.top = abcp2Obj.offsetTop - speed + "px";
		newtop = parseInt(abcp2Obj.style.top);
		if(newtop <= (346 + reladis)) {
			abcp2Obj.style.top = oldtop;
		}
		dis3 = Math.abs(newtop - (346 + reladis));
		if(dis3 < speed) {
			abcp2Obj.style.top = 346 + reladis + "px";
		}
		return false;
	}
	if(event.keyCode == 40) {
		abcp2Obj.style.top = abcp2Obj.offsetTop + speed + "px";
		newtop = parseInt(abcp2Obj.style.top);
		if(newtop >= (826 + reladis)) {
			abcp2Obj.style.top = oldtop;
		}
		dis4 = Math.abs((826 + reladis) - newtop);
		if(dis4 < speed) {
			abcp2Obj.style.top = 826 + reladis + "px";
		}
		return false;
	}	
}

function isCrash(p1,p2) {
	var p1Dis = p1.getBoundingClientRect();
	var p2Dis = p2.getBoundingClientRect();

	if(p1Dis.right < p2Dis.left || p1Dis.bottom < p2Dis.top || p1Dis.left > p2Dis.right || p1Dis.top > p2Dis.bottom) {
		return 0;
	} else {
		return 1;
	}
}



var time = 0;
var abcMinObj = document.getElementById("abcMin");
var abcSecObj = document.getElementById("abcSec");
var abcMsecObj = document.getElementById("abcMsec");
var speedshowObj = document.getElementById("speedtext");
function abc_timestart() {
	clearInterval(abcTimer);
	abcTimer = setInterval(function() {
		time++;
		var ms = partadd(time%60);
		var sec = partadd(parseInt((time/60)%60));
		var min = partadd(parseInt(time/60/60));
		abcMsecObj.innerHTML = ms;
		abcSecObj.innerHTML = sec;
		abcMinObj.innerHTML = min;
		if(sec == 20 && ms == 0 || sec == 40 && ms == 0 || sec == 0 && min > 0 && ms == 0) {
			upspeed -= 1000;
		}
		if(upspeed <= 1000) {
			upspeed = 1000;
		}
		if(min == 3) {
			clearInterval(abcTimer);
			clearInterval(scoreTimer);
			alert("Congratulations!");
			time = 0;
			abcp2Obj.style.top = 346 + reladis + "px";
			abcp2Obj.style.left = "436px";
			abcp1Obj.style.top = 756 + reladis + "px";
			abcp1Obj.style.left = "1166px";
			abcMsecObj.innerHTML = abcSecObj.innerHTML = abcMinObj.innerHTML = "00";
			abcp2Obj.style.transition = abcp1Obj.style.transition = "none";
			speedshowObj.innerHTML = "Current Speed: 0/s";
		}
		speedshowObj.innerHTML = "Current Speed: Level " + (9 - (upspeed/1000));
		isCrash(abcp1Obj,abcp2Obj);
		if(isCrash(abcp1Obj,abcp2Obj) == 1) {
			alert("Game Over!");
			clearInterval(abcTimer);
			clearInterval(scoreTimer);
			time = 0;
			abcp1Obj.style.backgroundColor = "pink";
			speedshowObj.innerHTML = "Current Speed: Level 0";
		}
	}, 16.5);
}
var abcTimer, scoreTimer;
function partadd(number) {
	if(number < 10) {
		return "0" + number;
	}
	return number;
}

function abc_restart() {
	clearInterval(abcTimer);
	time = 0;
	abcp1Obj.style.backgroundColor = "red";
	abcp2Obj.style.top = "346px";
	abcp2Obj.style.left = "436px";
	abcp1Obj.style.top = 756 + reladis + "px";
	abcp1Obj.style.left = "1166px";
	abcMsecObj.innerHTML = abcSecObj.innerHTML = abcMinObj.innerHTML = "00";
	abcp2Obj.style.transition = abcp1Obj.style.transition = "none";
	speedshowObj.innerHTML = "Current Speed: Level 0";
}
var score = 0;
function abc_start() {
	var abcp2Obj = document.getElementById("abc_object2");
	var abcp1Obj = document.getElementById("abc_object1");
	abcp1Obj.style.backgroundColor = "red";
	abcp1Obj.style.top = 346 + reladis + "px";
	abcp1Obj.style.left = "436px";
	abcp1Obj.style.transition = "10s";
	var locX = Math.floor(Math.random() * 820) + 1 + 436;
	var locY = Math.floor(Math.random() * 460) + 1 + 346 + reladis;
	var si = 0;
	clearInterval(scoreTimer);
	scoreTimer = setInterval(function() {
		var scoreObj = document.getElementById("randomlocscore");
		var scoretextObj = document.getElementById("scoretext");
		
		scoreObj.style.display = "block";
		scoreObj.style.top = locY + "px";
		scoreObj.style.left = locX + "px";
		isCrash(scoreObj, abcp2Obj);
		if(isCrash(scoreObj, abcp2Obj) == 1) {
			scoreObj.style.display = "none";
			locX = Math.floor(Math.random() * 820) + 1 + 436;
			locY = Math.floor(Math.random() * 460) + 1 + 346 + reladis;
			score += 100;
			si = 0;
		} else {
			si++;
			if(si > 7) {
				scoreObj.style.display = "none";
				locX = Math.floor(Math.random() * 820) + 1 + 436;
				locY = Math.floor(Math.random() * 460) + 1 + 346 + reladis;
				si = 0;
			}
		}
		scoretextObj.innerHTML = "Score: " + partadd2(score);
	}, 1000)
}
function partadd2(number) {
	if(number == 0) {
		return "000" + number;
	} else if(number > 0 && number < 100) {
		return "00" + number;
	} else if(number >= 100 && number < 1000){
		return "0" + number;
	} else {
		return number;
	}
}

































