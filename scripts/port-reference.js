const portData = {
    80: "HTTP",
    443: "HTTPS",
    22: "SSH",
    53: "DNS",
    25: "SMTP",
    21: "FTP",
    3389: "RDP",
    110: "POP3",
    587: "SMTP Secure"
    // add more common ports if desired
};

function lookupPort() {
    const p = parseInt(document.getElementById('portInput').value);
    const out = document.getElementById('portResult');

    if (!p || p < 1 || p > 65535) {
        out.textContent = "Enter a valid port (1–65535)";
        return;
    }

    out.textContent = portData[p] ?? "Unknown or not in reference list";
}