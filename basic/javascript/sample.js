function changeAnchor() {
  document.write(document.cookie);
  document.getElementById('myAnchor').href=document.cookie;
}

function fiddleHistory() {
	window.history.go(document.location);
	window.history.next = document.location;
}
