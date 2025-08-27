// let copyCounter = parseInt(document.getElementById("copy-counter").innerText);
// console.log(copyCounter);
// *******-*-
// history store function
function storeOnHistory() {
  const historyData = document.getElementById("history-section");
  const newdata = document.createElement("div");
  newdata.innerHTML = `<div id="callhistory" class="flex items-center justify-between">
          <div class="historyLeft">
            <h1 class="font-semibold text-lg text-black mt-4">
              ${name}
            </h1>
            <h1 class="text-lg text-[#5C5C5C]">${num}</h1>
          </div>
          <div class="historyRight text-lg text-[#5C5C5C]">
            <p>${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
   `;
  document.getElementById("di").appendChild(newdata);
}

function getNumberValue(id) {
  const value = parseInt(document.getElementById(id).innerText);
  return value;
}
// heart-buttons cliked functionality
const heartbtns = document.getElementsByClassName("heart-btn");
for (const heartbtn of heartbtns) {
  heartbtn.addEventListener("click", function () {
    let copyCounter = getNumberValue("fav-counter");
    copyCounter++;
    document.getElementById("fav-counter").innerText = copyCounter;
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

    // Coin decrease here
    const newcallCoin = callCoin - 20;
    document.getElementById("call-coin").innerText = newcallCoin;
    // tryit**********************************************************
    const historyData = document.getElementById("history-section");
    const newdata = document.createElement("div");
    newdata.innerHTML = `<div id="callhistory" class="flex items-center justify-between">
          <div class="historyLeft">
            <h1 class="font-semibold text-lg text-black mt-4">
              ${name}
            </h1>
            <h1 class="text-lg text-[#5C5C5C]">${num}</h1>
          </div>
          <div class="historyRight text-lg text-[#5C5C5C]">
            <p>${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
   `;
    document.getElementById("di").appendChild(newdata);
  });
}
// History Clear Button here
document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("di").innerHTML = "";
});

// function storeOnHistory() {
//   const historyData = document.getElementById("history-section");
//   const newdata = document.createElement("div");
//   newdata.innerHTML = `<div id="callhistory" class="flex items-center justify-between">
//           <div class="historyLeft">
//             <h1 class="font-semibold text-lg text-black mt-4">
//               ${name}
//             </h1>
//             <h1 class="text-lg text-[#5C5C5C]">${num}</h1>
//           </div>
//           <div class="historyRight text-lg text-[#5C5C5C]">
//             <p>${new Date().toLocaleTimeString()}</p>
//           </div>
//         </div>
//    `;
//   document.getElementById("di").appendChild(newdata);
// }
//  copy btn functoinality here
const copyBtns = document.getElementsByClassName("copy-btn");

for (const copyBtn of copyBtns)
  copyBtn.addEventListener("click", function (e) {
    const copyElement = e.target.closest(".copy-btn");

    const CopyBtnParent = copyElement.parentNode.parentNode;
    // console.log(callBtnParent);
    nameCopyNumContainer = [];
    const copyNumbers = CopyBtnParent.querySelectorAll("h1");
    for (const copynumber of copyNumbers) {
      nameCopyNumContainer.push(copynumber);
      // console.log(copynumber);
    }

    const hotlinenum = nameCopyNumContainer[1].innerText;
    // console.log(hotlinenum);
    navigator.clipboard.writeText(hotlinenum);
    alert("Hotline number copied");
    let copyCountStore = getNumberValue("copy-counter-store");
    copyCountStore++;
    document.getElementById("copy-counter-store").innerText = copyCountStore;
  });
