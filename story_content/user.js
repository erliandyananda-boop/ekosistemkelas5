function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6aCfshUxxf3":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgsong');
audio.src="musik.mp3";
audio.load();
audio.play();
}

