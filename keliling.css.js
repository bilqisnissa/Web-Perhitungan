function hitungKeliling(){
    var Sisi1, Sisi2, Sisi3, Keliling;
 
    Sisi1 = parseInt(document.getElementById("txtSisi1").value);
    Sisi2 = parseInt(document.getElementById("txtSisi2").value);
    Sisi3 = parseInt(document.getElementById("txtSisi3").value);
    Keliling = Sisi1 + Sisi2 + Sisi3;
    document.getElementById("txtKeliling").value = Keliling;
}
