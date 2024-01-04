function dateFormat() {
  document.getElementById("calender").value = new Date()
    .toISOString()
    .substring(0, 10);
}

function showMessage() {
    alert("Pressed");
  }


