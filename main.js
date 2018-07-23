




var counter=0;
var sam=document.getElementById("sk");
var btn= document.getElementById("btn");

btn.addEventListener("click", function(){
var request = new XMLHttpRequest();
request.open('GET','http://www.filltext.com/?rows=1&pretty=true&skill1=css&skill2=html&skill3=json&skill4=ajax&skill5=javascript');
request.onload = function () {
    
    var ourdata=JSON.parse(request.responseText);
    renderHTML(ourdata);
	};

	request.send();
	counter++;
	if (counter>0){
		document.getElementById("btn").disabled=true;
	}

}
); 

function renderHTML(dataa){

var ht = "<p>" +" I have a strog understanding about "+ dataa[0].skill1 +" and " +dataa[0].skill2+"<br>"+"I have included "+dataa[0].skill3+" and "+dataa[0].skill4+" in this website  "+"<br>"+ "I have also included "+dataa[0].skill5+"<br>"+"Please have look of js code "+"</P>" ;
sam.insertAdjacentHTML('beforeend',ht);
}






