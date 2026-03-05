async function pingTest() {

    const host = document.getElementById("pingInput").value;

    const start = Date.now();

    try{

        await fetch(`https://${host}`, {
            mode: "no-cors"
        });

        const latency = Date.now() - start;

        document.getElementById("pingResult").textContent =
            "Latency: " + latency + " ms";

    }catch(e){

        document.getElementById("pingResult").textContent =
            "Host reachable but blocked by CORS.";

    }

}
