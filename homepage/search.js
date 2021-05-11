var input = document.getElementById("searchbar");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   var keyword = document.getElementById("searchbar").value;
   var searchvalue = keyword.replace(/ /g, "+");
   console.log(searchvalue);
   document.getElementById("searchbar").value = "";
   window.location.href = "https://duckduckgo.com/?q=" + searchvalue;
  }
});
