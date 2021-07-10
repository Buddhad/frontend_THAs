function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function dragging(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
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