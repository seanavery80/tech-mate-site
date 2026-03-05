async function runPing() {

    const host = document.getElementById("pingInput").value;

    const response = await fetch(
        `https://techmate-tools-api-vercel.vercel.app/api/ping?host=${host}`
    );

    const data = await response.json();

    document.getElementById("pingResult").textContent =
        data.output || data.error;

}
