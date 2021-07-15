function dragStart(ev) {
    ev.dataTransfer.setData("Text", event.target.id);
  }
  
  
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  
  }

  function myFunction() {
    document.getElementById("print").innerHTML = "Onclick Event🎉🎉";
  }

  function func() {
    alert("The video has started to play");
  }
  function myFunc() {
    alert("This document is now being printed");
  }