//your code here
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var dropzone = event.target.closest('.image');

  if (dropzone && dropzone !== draggedElement) {
    var tempBackground = dropzone.style.backgroundImage;
    dropzone.style.backgroundImage = draggedElement.style.backgroundImage;
    draggedElement.style.backgroundImage = tempBackground;
  }
});
