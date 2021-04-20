function szamol() {
    var letszam = document.getElementById('letszam');
    var ejszaka = document.getElementById('ejszaka');
    var orszag = document.getElementById('orszag');
    var fizetendo;

    //--számolás--
    if(orszag = 'b'){
        ejszaka = 5600;
    }
    else if(orszag = 'g'){
        ejszaka = 6200;
    }
    else if(orszag = 'h'){
        ejszaka = 5000;
    }
    else if(orszag = 't'){
        ejszaka = 5800;
    }
      fizetendo = (letszam*ejszaka);
    //------------
    document.getElementById('eredmeny').value = fizetendo+" Ft";
    
}