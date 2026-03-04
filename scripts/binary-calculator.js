function toBinary() {
    const n = parseInt(document.getElementById('binaryInput').value);
    const out = document.getElementById('binaryResult');

    if (isNaN(n)) {
        out.textContent = "Enter a valid decimal!";
        return;
    }
    out.textContent = `${n} = ${n.toString(2)} (binary)`;
}