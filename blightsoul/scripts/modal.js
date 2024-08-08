//modal
						  var modal = document.getElementById("myModal");
						  var btn = document.getElementById("myBtn");
						  var span = document.getElementsByClassName("close1")[0];
						  
						  btn.onclick = function() {
                	  	modal.style.display = "block";
            		  }
						  
						  span.onclick = function() {
                		modal.style.display = "none";
            		  }