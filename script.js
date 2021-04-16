
const valide=document.getElementById("Valider");
valide.addEventListener("click",validationDeFormulaireEtape2);

let tab1=[[1,2,0],   [0,-1,1], [2,2,2]]
let tab2=[[0,3,1],   [-1,0,2], [5,1,1]]
let tab3=[[0,-1,1],  [1,0,1],  [0,2,-1]]
let tab4=[[0,0,3],   [2,0,0],  [0,2,-1]]
let tab5=[[-1,-1,1], [3,2,-1], [0,1,2]]
let tab6=[[-1,1,2],  [0,0,-1], [3,1,1]]
let tab7=[[1,0,3],   [0,2,0],  [2,1,0]]
let tab8=[[-1,-1,1], [0,1,1],  [3,2,0]]
let tab9=[[-1,1,-1], [3,2,1],  [1,0,3]]

let poids=new Array()
poids.push(tab1)
poids.push(tab2)
poids.push(tab3)
poids.push(tab4)
poids.push(tab5)
poids.push(tab6)
poids.push(tab7)
poids.push(tab8)
poids.push(tab9)
function sommeDesPoints(listeEcolSocEco){
    let result=new Array();
    let ecol=0;
    let soc=0;
    let eco=0;
    
    for (let tab of listeEcolSocEco) {
        ecol=ecol+tab[0];
        soc=soc+tab[1];
        eco=eco+tab[2];
      }
    result.push(ecol);
    result.push(soc);
    result.push(eco);
    return result;
}

function choixToPoint(nameClass){
    let result;
    if(nameClass==="A"){
        result=0
    }
    else if(nameClass==="B"){
        result=1
    }
    else if(nameClass==="C"){
        result=2
        
    }
    return result;
}

function maxResultFinale(result){
    if(result[0]>result[1] && result[0]>result[2]){
        return `Bravo! Vous êtes de vrais écologistes!<img src="feuilles.png">`;
    }
    else if(result[1]>result[0] && result[1]>result[2]){
        return `Bravo! Vous êtes de vrais socialistes!<img src="OIP.jfif">`;
    }
    else if(result[2]>result[1] && result[2]>result[0]) {
        return `Bravo! Vous êtes de vrais économistes!<img src="dollar.gif">`;
    }
}

function validationDeFormulaireEtape1(){
    let result=new Array();
    let listeEcolSocEco=new Array();
    let reponseLettre=new Array();
    let reponseindice=new Array();

    let choix=document.getElementsByTagName('input');
    for(let c=0;c<choix.length;c++){
        if(choix[c].checked===true){
        reponseLettre.push(choix[c])}
    }

    for(let r of reponseLettre){
        reponseindice.push(choixToPoint(r.className))
    }

    let i=0;
    let tableau=new Array();
    for(let tab in poids){
        tableau=poids[tab];
        listeEcolSocEco.push(tableau[reponseindice[i]]);
        i++;
    }

    result=sommeDesPoints(listeEcolSocEco);
    return result;
}

function validationDeFormulaireEtape2(event){
    event.preventDefault();
    let resultat=validationDeFormulaireEtape1();
    let score="<p class=message>Ecologie= "+resultat[0]+" Social="+resultat[1]+" Economie= "+resultat[2]+"<p/>";

    let message="<p class=message>"+maxResultFinale(resultat)+"</p>"+score;
    document.body.innerHTML=message;

   
    
}

