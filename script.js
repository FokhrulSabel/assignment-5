// values
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// heart count function
function increaseHeart() {
  heartCount = heartCount + 1;
  document.getElementById("heartCount").innerText = heartCount;
}

// Call function
function callService(name, number) {
  if (coinCount < 20) {
    alert("You are out of Coin");
    return;
  }
  alert("Calling " + name + " : " + number + "");

  coinCount = coinCount - 20;
  document.getElementById("coinCount").innerText = coinCount;

  // Call History
  const historyDiv = document.getElementById("history");
  const timeNow = new Date().toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  historyDiv.innerHTML += `
    <div class="flex justify-between items-start bg-[#FAFAFA] shadow rounded-lg px-4 py-2 mb-2">
      <div>
        <p class="font-semibold text-gray-800">${name}</p>
        <p class="text-sm text-gray-500">${number}</p>
      </div>
      <p class="text-sm text-gray-500">${timeNow}</p>
    </div>
  `;
}

// Clear History
function clearHistory() {
  const historyDiv = document.getElementById("history");
  historyDiv.innerHTML = "";
}

// Copy Function 
function copyNumber(num) {
    navigator.clipboard.writeText(num);

    alert("Number Copied : " + num);

    copyCount = copyCount + 1;
    document.getElementById("copyCount").innerText = copyCount;
}