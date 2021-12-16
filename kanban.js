var x = document.getElementById("loc");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
}
else {
  document.getElementById("loc").innerHTML = "Geolocation is not supported by this browser.";
}

function showPosition(position) {
  document.getElementById("loc").innerHTML = "Location Details: Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;

  storage(document.getElementById("loc").innerHTML);

}

function storage(x) {
  if (typeof (Storage) !== "undefined") {
    // Store
    localStorage.Location = x;
    // Retrieve
    document.getElementById("loc").innerHTML = localStorage.Location;
  }
  else {
    document.getElementById("loc").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.currentTarget.appendChild(document.getElementById(data));
}

function taskcount() {
var backlog_cnt = document.getElementById("backlog").childElementCount;
var selectedfordev_cnt = document.getElementById("selectedfordev").childElementCount;
var inprogress_cnt = document.getElementById("inprogress").childElementCount;
var done_cnt = document.getElementById("done").childElementCount;

document.getElementById("backlog-cnt").innerHTML= backlog_cnt-1;
document.getElementById("selectedfordev-cnt").innerHTML= selectedfordev_cnt-1;
document.getElementById("inprogress-cnt").innerHTML= inprogress_cnt-1;
document.getElementById("done-cnt").innerHTML= done_cnt-1;
}

