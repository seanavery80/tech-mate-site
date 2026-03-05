async function tracerouteTest(){

const host = document.getElementById("traceInput").value;

try{

const response = await fetch(
`https://tools.keycdn.com/traceroute?host=${host}&format=json`
);

const data = await response.json();

let output = "";

data.data.trace.forEach(hop => {
output += `${hop.hop}. ${hop.ip || "*"} (${hop.rtt || "timeout"} ms)\n`;
});

document.getElementById("traceResult").textContent = output;

}catch(err){

document.getElementById("traceResult").textContent =
"Traceroute failed. API may be blocked.";

}

}
