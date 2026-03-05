async function tracerouteTest(){

const host = document.getElementById("traceInput").value;

const url = `https://api.allorigins.win/raw?url=https://api.hackertarget.com/mtr/?q=${host}`;

const response = await fetch(url);

const data = await response.text();

document.getElementById("traceResult").textContent = data;

}
