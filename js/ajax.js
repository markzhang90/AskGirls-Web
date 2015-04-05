function getList(option){

var json = '{"option":"' + option + '"}';

$.ajax({
    type: 'POST',
    url: '../Askgirls_ListqueryWithOptions.php',
    contentType: 'application/json; charset=utf-8',
    data: json,
    dataType: 'json',
    cache: false,
    success: AjaxSucceeded,
    error: AjaxFailed
});
}
function AjaxSucceeded(result) {
    removeList();
    changeListContent(result)
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

function changeListContent(lists){
	var one_bolg = "";
	for (i = 0; i < lists.length; i++) { 
		one_bolg += "<div class=\"blog\"><div class=\"blog-info\">" +
				"<div class=\"blog-top\"><img src=\""+ lists[i]["icon_image"] +"\" alt=\"\" />" +
				"<h4>"+lists[i]["user_nickname"]+"</h4>" +
				"<label>"+lists[i]["ct"]+" Comments</label></div>" +
				"<div class=\"blog-bot\"><p>"+lists[i]["title"]+"</p></div></div></div>"
	}
	
	document.getElementById("mid-post-area").innerHTML = one_bolg;
}