function cidrToMask() {
    const cidr = parseInt(document.getElementById('cidrInput').value);
    const out = document.getElementById('cidrResult');

    if (isNaN(cidr) || cidr < 0 || cidr > 32) {
        out.textContent = "Enter CIDR 0–32";
        return;
    }

    const full = "1".repeat(cidr).padEnd(32, "0");
    const mask = [
        parseInt(full.slice(0,8), 2),
        parseInt(full.slice(8,16), 2),
        parseInt(full.slice(16,24), 2),
        parseInt(full.slice(24,32), 2),
    ].join(".");

    out.textContent = `Subnet Mask: ${mask}`;
}