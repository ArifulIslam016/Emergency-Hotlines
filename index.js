// let copyCounter = parseInt(document.getElementById("copy-counter").innerText);
// console.log(copyCounter);

function getNumberValue(id) {
  const value = parseInt(document.getElementById(id).innerText);
  return value;
}
// heart-buttons cliked functionality
const heartbtns = document.getElementsByClassName("heart-btn");
for (const heartbtn of heartbtns) {
  heartbtn.addEventListener("click", function () {
    let copyCounter = getNumberValue("copy-counter");
    copyCounter++;
    document.getElementById("copy-counter").innerText = copyCounter;
  });
}
