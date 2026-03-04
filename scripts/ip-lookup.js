async function lookupIP() {
    const ip = document.getElementById('ipInput').value.trim();
    const out = document.getElementById('ipResult');
    if (!ip) {
        out.textContent = "Enter an IP address!";
        return;
    }

    out.textContent = "Looking up…";

    try {
        const res = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await res.json();

        if (data.status === "fail") {
            out.textContent = `Error: ${data.message}`;
            return;
        }

        out.textContent = `
IP: ${data.query}
Country: ${data.country}
Region: ${data.regionName}
City: ${data.city}
ISP: ${data.isp}
Org: ${data.org}
Timezone: ${data.timezone}
        `;
    } catch (err) {
        out.textContent = "Lookup failed.";
        console.error(err);
    }
}