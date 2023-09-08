//fetcher data
const urlParams = new URLSearchParams(window.location.search);

function fetchData() {
  fetch("https://kea-alt-del.dk/kata-distortion/")
    .then((response) => response.json())
    .then((data) => showData(data));
}
//kalder funktionen ovenover
//henter data.inQueue fra databasen
function showData(data) {
  console.log(data);
  const queueNumber = data.inQueue;
  const outputData = document.querySelector("#tekstOutput");
  //her spytter den dataen ud ved at lave tekst content og skifter nummeret ud
  outputData.textContent = `Du er nu nummer ${queueNumber} i køen`;
  //En if sætning, så hvis queuenumber er større end ti skal teksten ændre sig til en farve
  if (queueNumber < 13) {
    outputData.style.color = "rgba(0, 128, 0, 0.764)";
    //hvis queuenumber er mindre end 10 så ændre den til en anden farve
  } else if (queueNumber > 13) {
    outputData.style.color = "rgba(255, 0, 0, 0.637)";
  }
}

// Opdater data hvert 10. sekund
setInterval(fetchData, 10000);
