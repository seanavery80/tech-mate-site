async function tracerouteTest() {
    const host = document.getElementById('traceInput').value.trim();
    const out = document.getElementById('traceResult');

    if (!host) {
        out.textContent = "Enter a domain or IP!";
        return;
    }

    out.textContent = "Tracing…";

    try {
        const response = await fetch(`https://api.allorigins.win/raw?url=https://api.hackertarget.com/mtr/?q=${host}`);
        const data = await response.text();
        out.textContent = data;
    } catch (err) {
        out.textContent = "Traceroute failed.";
        console.error(err);
    }
}