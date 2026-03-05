async function tracerouteTest(){

    const host = document.getElementById("traceInput").value;

    const response = await fetch(
        `https://api.hackertarget.com/mtr/?q=${host}`
    );

    const data = await response.text();

    document.getElementById("traceResult").textContent = data;

}
