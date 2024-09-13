function Gen(){
    let hisCalc = document.getElementById('hisName').value;
    console.log(hisCalc);
    let herCalc = document.getElementById('herName').value;
    console.log(herCalc);
    let x =Math.floor(Math.random()*100);
    console.log(x);
    let finalCalc = document.getElementById('finaltext');
    if(x>60){
        finalCalc.innerHTML = hisCalc + ' and ' + herCalc + ' love score is ' + x + '% and are meant for each other.'

    }
    else{
        finalCalc.innerHTML = hisCalc + ' and ' + herCalc + ' love score is ' + x + '% and are not meant for each other.'
    }
}


