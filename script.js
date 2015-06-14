javascript:
var tab;
var val;
var i=1;
start();
function start() {
	console.log("mukul");
	if (i>=10) {
		start2();
	} else {
		tab=window.open('http://apps.nirmauni.ac.in/ams/studentResultView.aspx');
		setTimeout(function(){
			val="12BCE00"+i;
			calc();
		},1000);
	};
}

function start2() {
	if (i>=100) {
		start3();
	} else {
		tab=window.open('http://apps.nirmauni.ac.in/ams/studentResultView.aspx');
		setTimeout(function(){
			val="12BCE0"+i;
			calc();
		},1000);
	};
}

function start3() {
	if (i>=130) {
		alert("Script by mukul");
	} else {
		tab=window.open('http://apps.nirmauni.ac.in/ams/studentResultView.aspx');
		setTimeout(function(){
			val="12BCE"+i;
			calc();
		},1000);
	};
}

function calc(){
	tab.document.getElementById("ctl00_ContentPlaceHolder1_TxtStudNo").disabled = false;
	tab.document.getElementById("ctl00_ContentPlaceHolder1_TxtStudNo").value = val;
	tab.document.getElementById("ctl00_ContentPlaceHolder1_btnCETALPW").click();
	//console.log("hello");
	setTimeout(function(){
			var a = tab.document.createElement('a');
			console.log("mukul");
	        var data_type = 'data:application/vnd.ms-excel';
	        var table_div = tab.document.getElementById('ctl00_ContentPlaceHolder1_DGCLT');
	        if(table_div){
	        	var table_html = table_div.outerHTML.replace(/ /g, '%20');
		        a.href = data_type + ', ' + table_html;
		        a.download = val + '.xls';
		        a.click();
	        }
	        tab.close();
	        i=i+1;
	        start();
	},1000);
}





SEE-
var tab;
var val;
var i=1;
start();
function start() {
	console.log("mukul");
	if (i>=10) {
		start2();
	} else {
		tab=window.open('http://apps.nirmauni.ac.in/ams/studentResultView.aspx');
		setTimeout(function(){
			val="12BCE00"+i;
			calc();
		},1000);
	};
}

function start2() {
	if (i>=100) {
		start3();
	} else {
		tab=window.open('http://apps.nirmauni.ac.in/ams/studentResultView.aspx');
		setTimeout(function(){
			val="12BCE0"+i;
			calc();
		},1000);
	};
}

function start3() {
	if (i>=130) {
		alert("Script by  mukul");
	} else {
		tab=window.open('http://apps.nirmauni.ac.in/ams/studentResultView.aspx');
		setTimeout(function(){
			val="12BCE"+i;
			calc();
		},1000);
	};
}

function calc(){
	tab.document.getElementById("ctl00_ContentPlaceHolder1_TxtStudNo").disabled = false;
	tab.document.getElementById("ctl00_ContentPlaceHolder1_TxtStudNo").value = val;
	tab.document.getElementById("ctl00_ContentPlaceHolder1_btnSeeResult").click();
	//console.log("hello");
	setTimeout(function(){
			var a = tab.document.createElement('a');
			console.log("akshit");
	        var data_type = 'data:application/vnd.ms-excel';
	        var table_div = tab.document.getElementById('ctl00_ContentPlaceHolder1_DGCLT');
	        if(table_div){
	        	var table_html = table_div.outerHTML.replace(/ /g, '%20');
		        a.href = data_type + ', ' + table_html;
		        a.download = val + '.xls';
		        a.click();
	        }
	        tab.close();
	        i=i+1;
	        start();
	},1000);
}