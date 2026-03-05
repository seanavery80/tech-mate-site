async function lookupIP() {

    const ip = document.getElementById("ipInput").value;

    const response = await fetch(
        `https://techmate-tools-api-vercel.vercel.app/api/iplookup?ip=${ip}`
    );

    const data = await response.json();

    document.getElementById("ipResult").textContent =
        JSON.stringify(data, null, 2);

}
