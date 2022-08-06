 document.addEventListener("offline", onOffline, false);
 document.addEventListener("online", onOnline, false);
 
function onOffline() {	
	
  document.getElementById("nav").style.display = "none";
    document.getElementById("offline").style.display = "block";
}

function onOnline() {	

 document.getElementById("offline").style.display = "none";
   
    document.getElementById("nav").style.display = "block";
  
}