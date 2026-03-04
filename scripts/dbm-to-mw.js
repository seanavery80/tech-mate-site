function convertDbm() {
    const dbm = parseFloat(document.getElementById('dbmInput').value);
    const out = document.getElementById('dbmResult');

    if (isNaN(dbm)) {
        out.textContent = "Enter a valid number";
        return;
    }

    const mW = Math.pow(10, dbm/10);
    out.textContent = `${dbm} dBm = ${mW.toFixed(3)} mW`;
}