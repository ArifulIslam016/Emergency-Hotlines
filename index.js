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
// Call button functionality
const callBtns = document.getElementsByClassName("call-btn");

for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function (e) {
    let callCoin = getNumberValue("call-coin");
    if (callCoin < 20) {
      alert("Insufficient Coin");
      return;
    }
    const element = e.target.closest(".call-btn");

    const callBtnParent = element.parentNode.parentNode;
    // console.log(callBtnParent);
    namenumContainer = [];
    const namenumbers = callBtnParent.querySelectorAll("h1");
    for (const namenumber of namenumbers) {
      namenumContainer.push(namenumber);
      //   console.log(namenumber);
    }
    const name = namenumContainer[0].innerText;
    const num = namenumContainer[1].innerText;
    alert("calling... " + name + " : " + num);
    const newcallCoin = callCoin - 20;
    document.getElementById("call-coin").innerText = newcallCoin;
  });
}
