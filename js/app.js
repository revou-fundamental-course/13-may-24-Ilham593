document.getElementById("hitung-luas").addEventListener("click", function () {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (alas > 0 && tinggi > 0) {
    const luas = 0.5 * alas * tinggi;
    document.getElementById(
      "luas"
    ).textContent = `Luas Segitiga: ${luas.toFixed(2)} cm2`;
    document.getElementById("keliling").textContent = "";
    document.getElementById("hasil").style.display = "block";
  } else {
    alert("Input tidak valid! Pastikan nilai alas dan tinggi positif.");
  }
});

document
  .getElementById("hitung-keliling")
  .addEventListener("click", function () {
    const sisiA = parseFloat(document.getElementById("sisiA").value);
    const sisiB = parseFloat(document.getElementById("sisiB").value);
    const sisiC = parseFloat(document.getElementById("sisiC").value);

    if (validasiSegitiga(sisiA, sisiB, sisiC)) {
      const keliling = sisiA + sisiB + sisiC;
      document.getElementById(
        "keliling"
      ).textContent = `Keliling Segitiga: ${keliling.toFixed(2)} cm2`;
      document.getElementById("luas").textContent = "";
      document.getElementById("hasil").style.display = "block";
    } else {
      alert(
        "Input tidak valid! Pastikan sisi-sisi membentuk segitiga yang valid."
      );
    }
  });

function validasiSegitiga(a, b, c) {
  if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}
