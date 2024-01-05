function dateFormat() {
  document.getElementById("barchart-request-date").value = new Date()
    .toISOString()
    .substring(0, 10);
}

