function calculateSubnet() {
    const input = document.getElementById('subnetInput').value.trim();
    const out = document.getElementById('subnetResult');

    if (!input.includes("/")) {
        out.textContent = "Enter in format: IP/Prefix (e.g., 192.168.1.0/24)";
        return;
    }

    const [ip, prefixStr] = input.split("/");
    const prefix = parseInt(prefixStr);

    if (prefix < 0 || prefix > 32) {
        out.textContent = "CIDR must be between 0–32";
        return;
    }

    const binMask = "1".repeat(prefix).padEnd(32, "0");
    const mask = [
        parseInt(binMask.slice(0,8), 2),
        parseInt(binMask.slice(8,16), 2),
        parseInt(binMask.slice(16,24), 2),
        parseInt(binMask.slice(24,32), 2),
    ].join(".");

    out.textContent = `Subnet Mask: ${mask}`;
}