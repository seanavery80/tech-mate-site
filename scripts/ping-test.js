async function pingTest() {
    const host = document.getElementById('pingInput').value.trim();
    const out = document.getElementById('pingResult');

    if (!host) {
        out.textContent = "Enter a domain or IP!";
        return;
    }

    out.textContent = "Pinging…";

    try {
        const response = await fetch(`https://api.allorigins.win/raw?url=https://api.hackertarget.com/nping/?q=${host}`);
        const data = await response.text();
        out.textContent = data;
    } catch (err) {
        out.textContent = "Ping failed.";
        console.error(err);
    }
}