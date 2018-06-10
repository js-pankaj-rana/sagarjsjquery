function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
  	console.log('Option length:==> '+selectObject.options.length);
  	console.log('Option itration:==> '+i);
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

var btn = document.getElementById('btn');
var arg = document.selectForm.musicTypes;
btn.addEventListener('click', function() {
  alert('Number of options selected: ' + howMany(arg));
});

var btn1 = document.getElementById('btn1');
var arg1 = document.uiDevelopment.uiDevelopmentName;
btn1.addEventListener('click', function() {
  alert('Number of options selected: ' + howMany(arg1));
});