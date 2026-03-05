async function runTraceroute() {

    const host = document.getElementById("traceInput").value;

    const response = await fetch(
        `https://techmate-tools-api-vercel.vercel.app/api/traceroute?host=${host}`
    );

    const data = await response.json();

    document.getElementById("traceResult").textContent =
        data.output || data.error;

}
