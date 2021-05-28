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
function lengthen() {
	var gamelistObj = document.getElementById("gamelist");
	var dis = document.documentElement.scrollTop;
	var top = 157 - dis;
	if(dis > 157) {
		gamelistObj.style.top = "0px";
	} else if(dis < 157) {
		gamelistObj.style.top = top + "px";
	}
}