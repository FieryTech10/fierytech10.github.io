document.body.style.backgroundImage = "url('images/bac6.jpg')";

setInterval(function(){
  document.body.style.backgroundImage = "url('images/bac5.jpg')";
  setTimeout(function(){
    document.body.style.backgroundImage = "url('images/bac6.jpg')";
  }, 30000)
}, 60000)