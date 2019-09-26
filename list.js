var List = {
  "HTML" : "1.html",
  "CSS" : "2.html",
  "Java Script" : "3.html"
}
for(var key in List){
  document.write('<li><a href="'+List[key]+'">'+key+'</a></li>')
}
