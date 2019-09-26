var Links = {
  SetColor:function (color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while (i < alist.length){
    alist[i].style.color = color;
    i = i + 1;
    }
  }
}
var Body = {
  SetColor:function (color){
    document.querySelector('body').style.color = color;
  },
  SetBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
var Border = {
  SetColor:function (color){
    document.querySelector('h1').style.borderColor = color;
    document.querySelector('ol').style.borderColor = color;
  }
}
function NightDayHandler(self){
  var target = document.querySelector('body')
  if(self.value === 'Night'){
    Body.SetBackgroundColor('black');
    Body.SetColor('white');

    Border.SetColor('white');

    Links.SetColor('yellow');

    self.value = 'Day';
  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');

    Border.SetColor('black');

    Links.SetColor('blue');

    self.value = 'Night';
  }
}
