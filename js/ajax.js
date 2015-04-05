window.onload = function() {
	getList(0, 1);
};
var option = 0;
var curPage = 1; //current page
var total,pageSize,totalPage; //total page

var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
showLeftPush = document.getElementById( 'showLeftPush' ),
body = document.body;

document.getElementById( 'menu0' ).onclick = function() {
	option = 0;
	document.getElementById( 'chooseOption' ).value = 0;
	getList(option, 1);

}
document.getElementById( 'menu1' ).onclick = function() {
	option = 1;
	document.getElementById( 'chooseOption' ).value = 1;
	getList(option, 1);

}
document.getElementById( 'menu2' ).onclick = function() {
	option = 2;
	document.getElementById( 'chooseOption' ).value = 2;
	getList(option, 1);

}
document.getElementById( 'menu3' ).onclick = function() {
	option = 3;
	document.getElementById( 'chooseOption' ).value = 3;
	getList(option, 1);

}
document.getElementById( 'menu4' ).onclick = function() {
	option = 4;
	document.getElementById( 'chooseOption' ).value = 4;
	getList(option, 1);

}
document.getElementById( 'menu5' ).onclick = function() {
	option = 5;
	document.getElementById( 'chooseOption' ).value = 5;
	getList(option, 1);


}
showLeftPush.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toright' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );

};


function getList(option, pageNum){
page = pageNum -1;
var json = '{"option":"' + option + '" , "pageNum":"' + page + '"}';

//alert(json);
$.ajax({
    type: 'POST',
    url: '../Askgirls_Web_ListqueryWithOptions.php',
    contentType: 'application/json; charset=utf-8',
    data: json,
    dataType: 'json',
    cache: false,
    beforeSend:function(){ 
//        $("#span_middle").append("<h2 id='loading'>loading...</h2>");//显示加载动画 
    }, 
    success: function (result) {
        removeList();
        changeListContent(result, pageNum);
    },
    complete: function(){ 
        getPageBar(); 
    }, 
    error: AjaxFailed
});
}

function AjaxFailed(result) {
    alert(result.status + ' ' + result.statusText);
}


function removeList() {
	var myNode = document.getElementById("mid-post-area");
    while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);
    }
}

function changeListContent(json, pageNum){
	total = json.total; 
    pageSize = json.pageSize;  
    curPage = pageNum; 
    totalPage = json.totalPage; 
    
	var one_bolg = "";
	var lists = json.list
	for (i = 0; i < lists.length; i++) { 
		one_bolg += "<div id = \"span_middle\" ></div><div class=\"blog\"><div class=\"blog-info\">" +
				"<div class=\"blog-top\"><img src=\""+ lists[i]["icon_image"] +"\" alt=\"\" />" +
				"<h4>"+lists[i]["user_nickname"]+"</h4>" +
				"<label>"+lists[i]["ct"]+" Comments</label></div>" +
				"<div class=\"blog-bot\"><p>"+lists[i]["title"]+"</p></div></div></div>"
	}
	
	document.getElementById("mid-post-area").innerHTML = one_bolg;
}

function removePageList(){
	var myNode = document.getElementById("button_bar");
    while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);
    }
}

function getPageBar(){ 
     
    var pageStr ="";
    pageStr += "<li><a class=\"hvr-ripple-out button3\" href=\"#\" onclick=\"getList(option,1);\">First Page</a></li>";
    var i = 1;
    var len = 7;
    var temcurr = curPage;
	var startP, endP;
    if(totalPage - i <5){
    	len = totalPage+1;
    	while (i<len){
	    	if(i != curPage){
	    		pageStr += "<li><a id = \""+i+"\"class=\"hvr-ripple-out button3\" href=\"#\" onclick=\"getList(option,this.id);\">"+ i +"</a></li>";
	    	}else{
	    		pageStr += "<li><a id = \""+i+"\"class=\"hvr-ripple-out-end button3\" href=\"#\" onclick=\"getList(option,this.id);\">"+ curPage +"</a></li>";
	    	}
	    	i = i + 1;	    	
	    }
    }else{
    	
    	if(temcurr - 2 == 1){
    		startP = 1;
    	}else{
    		startP = temcurr;
    	}
    	if(temcurr + 2 == totalPage){
    		endP = totalPage;
    	}else{
    		endP = temcurr + 2;
    	}
    	while (i<len){
	    	if(i != curPage){
	    		pageStr += "<li><a id = \""+i+"\"class=\"hvr-ripple-out button3\" href=\"#\" onclick=\"getList(option,this.id);\">"+ i +"</a></li>";
	    	}else{
	    		pageStr += "<li><a  id = \""+i+"\" class=\"hvr-ripple-out-end button3\" href=\"#\" onclick=\"getList(option,this.id);\">"+ curPage +"</a></li>";
	    		
	    	}
	    	i = i + 1;	    	
	    }
    }


    pageStr += "<li><a class=\"hvr-ripple-out button3\" href=\"#\" onclick=\"getList(option,totalPage);\">Last Page</a></li>";

    removePageList();
    document.getElementById("button_bar").innerHTML = pageStr; 
} 


