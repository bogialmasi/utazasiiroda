function szamol() {
    var letszam = parseInt(document.getElementById('letszam').value);
    var ejszaka = parseInt(document.getElementById('ejszaka').value);
    var orszag = document.getElementById('orszag').value;
    var fizetendo;

    //--számolás--
    if (orszag=='g'){
        ar = 6200;
    }
    if (orszag=='h'){
        ar = 5000;
    }
    if (orszag=='t'){
        ar = 5800;
    }
      fizetendo = (letszam*ejszaka*ar);
    //------------
    document.getElementById('eredmeny').value = fizetendo+" Ft";
    
}