var dom = document.querySelectorAll(".VoteButton--up");
var len = dom.length;
function sleep(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) {
     now = new Date();
     if (now.getTime() > exitTime)
     　　return;
     }
  }
for (var i = 0; i < len; i++) {
  if(dom[i].className.indexOf('is-active')===-1){
    dom[i].click();
    if(len%6===0){
     sleep(1000);
    }
  }
}