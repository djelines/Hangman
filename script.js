// Base de données de mots pour le jeu du pendu
const mots = [
    "ordinateur", "javascript", "programmation", "algorithme", "developpement",
    "interface", "variable", "fonction", "objet", "asynchrone",
    "boucle", "condition", "expression", "compilation", "bibliotheque",
    "framework", "synchronisation", "debugger", "recursion", "optimisation"
];

let Erreur = 0
let ListeLettre = []
let jeuFini = false

// Exemple de fonction pour sélectionner un mot aléatoire
function choisirMotAleatoire() {
    const indexAleatoire = Math.floor(Math.random() * mots.length);
    return mots[indexAleatoire];
}

function MettreLettre(lettre){

    ListeLettre.push(lettre)
    document.getElementById('ListeLettre').textContent = 'Vous avez utilisé les lettres suivantes : ' + ListeLettre.join(' ; ');
    // console.log(Mot_Cache,Mot_Cache_Afficher,ListeLettre)

    if (jeuFini) return;

    if (Mot_Cache.includes(lettre)) {
        let Mot_Cache_Afficher_Arr = Mot_Cache_Afficher.split(' ');

        for (let i = 0; i < Mot_Cache.length; i++) {
            if (Mot_Cache[i] === lettre) {
                console.log(i)
                Mot_Cache_Afficher_Arr[i] = lettre
            }
        }
        Mot_Cache_Afficher = Mot_Cache_Afficher_Arr.join(' ');
        document.getElementById('mot-cache').textContent = Mot_Cache_Afficher;
        
    } else {
        Erreur += 1
        afficherMessage("Une erreur en plus ! Vous avez : " + Erreur + " erreurs")
        // console.log(Mot_Cache,Mot_Cache_Afficher)
        dessinerPendu(Erreur)
    }
}


function JeuEnCours() {

    const motAfficheSansEspaces = Mot_Cache_Afficher.replace(/ /g, '');

    if (Mot_Cache === motAfficheSansEspaces){
        afficherMessage('Bravo ! Recharger la page pour continuer')
        jeuFini = true
        desactiverBoutons()
    } else {
        afficherMessage("Il faut trouver le mot !")
    }
    
}


function desactiverBoutons() {
    const boutons = document.querySelectorAll('#boutons-lettres button');
    boutons.forEach(bouton => {
        bouton.disabled = true;
    });
}


function afficherMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = '#27ae60'; // Couleur verte pour le message de succès
    messageElement.style.fontSize = '1.5em';
    messageElement.style.fontWeight = 'bold';
    messageElement.style.marginTop = '20px';
}

function dessinerPendu(Erreur) {
    const canvas = document.getElementById('penduCanvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas avant de redessiner

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;

// Dessiner le support du pendu progressivement
    if (Erreur > 0) {
        // Base du support
        ctx.moveTo(25, 190);
        ctx.lineTo(170, 190);
        ctx.stroke();
    } 
    if (Erreur > 1) {
        // Support vertical
        ctx.moveTo(75, 190);
        ctx.lineTo(75, 20);
        ctx.stroke();
    } 
    if (Erreur > 2) {
        // Traverse horizontale
        ctx.moveTo(60, 20);
        ctx.lineTo(170, 20);
        ctx.stroke();
    } 
    if (Erreur > 3) {
        // Barres supplémentaires si nécessaire
        ctx.moveTo(150, 20);
        ctx.lineTo(150, 40);
        ctx.stroke();
    } 

    // Dessiner les parties du bonhomme
    if (Erreur > 4) { // Tête
        ctx.beginPath();
        ctx.arc(150, 60, 20, 0, Math.PI * 2); // Coordonnées (150, 60) avec rayon 20
        ctx.stroke();
    }
    if (Erreur > 5) { // Corps
        ctx.beginPath();
        ctx.moveTo(150, 80);
        ctx.lineTo(150, 120);
        ctx.stroke();
    }
    if (Erreur > 6) { // Bras gauche
        ctx.beginPath();
        ctx.moveTo(150, 80);
        ctx.lineTo(120, 100);
        ctx.stroke();
    }
    if (Erreur > 7) { // Bras droit
        ctx.beginPath();
        ctx.moveTo(150, 80);
        ctx.lineTo(180, 100);
        ctx.stroke();
    }
    if (Erreur > 8) { // Jambe gauche
        ctx.beginPath();
        ctx.moveTo(150, 120);
        ctx.lineTo(120, 160);
        ctx.stroke();
    }
    if (Erreur > 9) { // Jambe droite
        ctx.beginPath();
        ctx.moveTo(150, 120);
        ctx.lineTo(180, 160);
        ctx.stroke();
    }
    if (Erreur === 10){ // Perdu 
        afficherMessage("Vous avez perdu ! Recharger la page pour continuer ")
        jeuFini = true;
        desactiverBoutons();
    }
}


// MAIN    

let Mot_Cache = choisirMotAleatoire()
let Mot_Cache_Afficher = ""
for (let i = 0; i < Mot_Cache.length; i++) {
    Mot_Cache_Afficher += "_" +" "
    }
console.log(Mot_Cache,Mot_Cache_Afficher,ListeLettre)
document.getElementById('mot-cache').textContent = Mot_Cache_Afficher;


// Attacher les gestionnaires d'événements à chaque bouton de lettre
document.getElementById("Button_A").addEventListener("click", function() {
    console.log("Bouton A");
    MettreLettre("a");
});

document.getElementById("Button_B").addEventListener("click", function() {
    console.log("Bouton B");
    MettreLettre("b");
});

document.getElementById("Button_C").addEventListener("click", function() {
    console.log("Bouton C");
    MettreLettre("c");
});

document.getElementById("Button_D").addEventListener("click", function() {
    console.log("Bouton D");
    MettreLettre("d");
});

document.getElementById("Button_E").addEventListener("click", function() {
    console.log("Bouton E");
    MettreLettre("e");
});

document.getElementById("Button_F").addEventListener("click", function() {
    console.log("Bouton F");
    MettreLettre("f");
});

document.getElementById("Button_G").addEventListener("click", function() {
    console.log("Bouton G");
    MettreLettre("g");
});

document.getElementById("Button_H").addEventListener("click", function() {
    console.log("Bouton H");
    MettreLettre("h");
});

document.getElementById("Button_I").addEventListener("click", function() {
    console.log("Bouton I");
    MettreLettre("i");
});

document.getElementById("Button_J").addEventListener("click", function() {
    console.log("Bouton J");
    MettreLettre("j");
});

document.getElementById("Button_K").addEventListener("click", function() {
    console.log("Bouton K");
    MettreLettre("k");
});

document.getElementById("Button_L").addEventListener("click", function() {
    console.log("Bouton L");
    MettreLettre("l");
});

document.getElementById("Button_M").addEventListener("click", function() {
    console.log("Bouton M");
    MettreLettre("m");
});

document.getElementById("Button_N").addEventListener("click", function() {
    console.log("Bouton N");
    MettreLettre("n");
});

document.getElementById("Button_O").addEventListener("click", function() {
    console.log("Bouton O");
    MettreLettre("o");
});

document.getElementById("Button_P").addEventListener("click", function() {
    console.log("Bouton P");
    MettreLettre("p");
});

document.getElementById("Button_Q").addEventListener("click", function() {
    console.log("Bouton Q");
    MettreLettre("q");
});

document.getElementById("Button_R").addEventListener("click", function() {
    console.log("Bouton R");
    MettreLettre("r");
});

document.getElementById("Button_S").addEventListener("click", function() {
    console.log("Bouton S");
    MettreLettre("s");
});

document.getElementById("Button_T").addEventListener("click", function() {
    console.log("Bouton T");
    MettreLettre("t");
});

document.getElementById("Button_U").addEventListener("click", function() {
    console.log("Bouton U");
    MettreLettre("u");
});

document.getElementById("Button_V").addEventListener("click", function() {
    console.log("Bouton V");
    MettreLettre("v");
});

document.getElementById("Button_W").addEventListener("click", function() {
    console.log("Bouton W");
    MettreLettre("w");
});

document.getElementById("Button_X").addEventListener("click", function() {
    console.log("Bouton X");
    MettreLettre("x");
});

document.getElementById("Button_Y").addEventListener("click", function() {
    console.log("Bouton Y");
    MettreLettre("y");
});

document.getElementById("Button_Z").addEventListener("click", function() {
    console.log("Bouton Z");
    MettreLettre("z");
});

document.getElementById("valider").addEventListener("click", function() {
    console.log("On valide ?");
    JeuEnCours();
});


