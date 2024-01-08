
const questions = [
    {
        question: "Quelle est la base du système binaire?",
        choices: ["Base 8", "Base 10", "Base 2", "Base 16"],
        correctAnswer: "Base 2"
    },
    {
        question: "Qu'est-ce que le langage de programmation Python privilégie?",
        choices: ["Performance", "Lisibilité du code", "Portabilité", "Efficacité"],
        correctAnswer: "Lisibilité du code"
    },
    {
        question: "Quelle est la principale fonction d'un algorithme?",
        choices: ["Tri de données", "Résolution de problèmes", "Calculs mathématiques", "Optimisation de code"],
        correctAnswer: "Résolution de problèmes"
    },
    {
        question: "En informatique, que signifie le terme 'HTTP'?",
        choices: ["HyperText Transfer Protocol", "High Transfer Transport Protocol", "Hyper Transfer Text Protocol", "High Text Transfer Protocol"],
        correctAnswer: "HyperText Transfer Protocol"
    },
    {
        question: "Qu'est-ce que la dérivation en mathématiques?",
        choices: ["Opération inverse de l'intégration", "Calcul de la moyenne", "Calcul de la médiane", "Opération inverse de la multiplication"],
        correctAnswer: "Opération inverse de l'intégration"
    },
    {
        question: "Quelle est la différence entre RAM et ROM?",
        choices: ["La RAM est volatile, la ROM est non volatile", "La RAM est utilisée pour le stockage permanent, la ROM pour le stockage temporaire", "La RAM est plus rapide que la ROM", "Il n'y a pas de différence"],
        correctAnswer: "La RAM est volatile, la ROM est non volatile"
    },
    {
        question: "Quelle est la principale utilité d'une clé étrangère dans une base de données relationnelle?",
        choices: ["Assurer l'intégrité référentielle", "Faciliter la recherche dans la base de données", "Empêcher l'accès non autorisé", "Permettre la suppression de données"],
        correctAnswer: "Assurer l'intégrité référentielle"
    },
    {
        question: "Qu'est-ce que le modèle OSI?",
        choices: ["Un langage de programmation", "Un protocole de communication en réseau", "Un algorithme de compression", "Un modèle mathématique"],
        correctAnswer: "Un protocole de communication en réseau"
    },
    {
        question: "En mathématiques, comment se nomme la fonction qui inverse une autre fonction?",
        choices: ["Fonction réciproque", "Fonction dérivée", "Fonction intégrale", "Fonction exponentielle"],
        correctAnswer: "Fonction réciproque"
    },
    {
        question: "Qu'est-ce qu'un réseau neuronal artificiel?",
        choices: ["Un ensemble de serveurs connectés", "Un algorithme de recherche", "Un modèle inspiré du cerveau humain", "Un type de langage de programmation"],
        correctAnswer: "Un modèle inspiré du cerveau humain"
    },
    {
        question: "Quelle est la différence entre un langage interprété et un langage compilé?",
        choices: ["Un langage interprété est plus rapide", "Un langage compilé est écrit en assembleur", "Un langage interprété est traduit ligne par ligne à l'exécution", "Un langage compilé nécessite un interpréteur"],
        correctAnswer: "Un langage interprété est traduit ligne par ligne à l'exécution"
    },
    {
        question: "Qu'est-ce qu'un algorithme de tri?",
        choices: ["Un algorithme pour organiser des données de manière ordonnée", "Un algorithme pour trouver la somme de deux nombres", "Un algorithme pour effectuer une multiplication rapide", "Un algorithme pour détecter des erreurs de programmation"],
        correctAnswer: "Un algorithme pour organiser des données de manière ordonnée"
    },
    {
        question: "Quelle est la formule de la somme des angles d'un triangle?",
        choices: ["180 degrés", "360 degrés", "90 degrés", "120 degrés"],
        correctAnswer: "180 degrés"
    },
    {
        question: "En informatique, qu'est-ce que l'indexation?",
        choices: ["La création d'une copie de sauvegarde", "La création d'un index pour faciliter la recherche", "La compression de données", "La protection contre les attaques de sécurité"],
        correctAnswer: "La création d'un index pour faciliter la recherche"
    },
    {
        question: "Quelle est la signification de l'acronyme SQL?",
        choices: ["Structured Query Language", "Simple Question Language", "System Query Language", "Sequential Query Language"],
        correctAnswer: "Structured Query Language"
    },
    {
        question: "Qu'est-ce qu'un vecteur en mathématiques?",
        choices: ["Un point dans l'espace", "Une matrice", "Un nombre complexe", "Une quantité ayant une direction et une magnitude"],
        correctAnswer: "Une quantité ayant une direction et une magnitude"
    },
    {
        question: "Quelle est la différence entre un disque dur HDD et un disque SSD?",
        choices: ["La capacité de stockage", "La vitesse d'accès aux données", "La présence d'un ventilateur", "Le coût"],
        correctAnswer: "La vitesse d'accès aux données"
    },
    {
        question: "Qu'est-ce qu'un pare-feu (firewall) en informatique?",
        choices: ["Un périphérique d'entrée", "Un logiciel de sécurité réseau", "Un type de virus informatique", "Un dispositif de stockage externe"],
        correctAnswer: "Un logiciel de sécurité réseau"
    },
    {
        question: "Quelle est la signification de l'acronyme API?",
        choices: ["Automated Programming Interface", "Application Programming Interface", "Advanced Program Instruction", "Automated Program Interaction"],
        correctAnswer: "Application Programming Interface"
    },
    {
        question: "Qu'est-ce qu'un langage de programmation orienté objet?",
        choices: ["Un langage permettant de programmer des objets réels", "Un langage basé sur des images", "Un langage utilisé pour la création de pages web", "Un langage qui utilise des concepts d'objets et de classes"],
        correctAnswer: "Un langage qui utilise des concepts d'objets et de classes"
    },


];

function initializeQuiz() {
    const questionsList = document.getElementById("questions-list");

    questions.forEach((q, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${q.question}`;

        const choicesList = document.createElement("ul");
        q.choices.forEach((choice, choiceIndex) => {
            const radioId = `q${index + 1}Choice${choiceIndex + 1}`;
            const radioInput = `<input type="radio" name="q${index + 1}" id="${radioId}" value="${choice}" />`;
            const label = `<label for="${radioId}">${choice}</label>`;
            const listItem = `<li>${radioInput}${label}</li>`;
            choicesList.innerHTML += listItem;
        });

        li.appendChild(choicesList);
        questionsList.appendChild(li);
    });
}

function showResults() {
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Efface les résultats précédents

    let score = 0;

    questions.forEach((q, index) => {
        const selectedChoice = document.querySelector(`input[name="q${index + 1}"]:checked`);

        if (selectedChoice) {
            const userAnswer = selectedChoice.value;
            const isCorrect = userAnswer === q.correctAnswer;

            const result = document.createElement("div");
            result.className = "result";
            //result.textContent = `Question ${index + 1}: ${isCorrect ? 'Correct' : 'Incorrect'}`;
            resultsContainer.appendChild(result);

            if (isCorrect) {
                score++;
            }
        } else {
            alert(`Veuillez répondre à la question ${index + 1}.`);
            return; // Arrête la fonction si une question n'est pas répondue
        }
    });

    const finalResult = document.createElement("div");
    finalResult.textContent = `Score final : ${score} / ${questions.length}`;
    resultsContainer.appendChild(finalResult);

    const messageContainer = document.getElementById("message-container");
    if (score === questions.length) {
        messageContainer.textContent = "Félicitations ! Vous avez répondu correctement à toutes les questions.";
        messageContainer.style.color = "#2ecc71"; // Vert
    } else if (score >= Math.floor(questions.length / 2)) {
        messageContainer.textContent = "Pas mal ! Vous avez réussi plus de la moitié des questions.";
        messageContainer.style.color = "#3498db"; // Bleu
    } else {
        messageContainer.textContent = "Continuez à vous entraîner. Vous pouvez faire mieux !";
        messageContainer.style.color = "#e74c3c"; // Rouge
    }
}

// Initialise le quiz au chargement de la page
window.onload = initializeQuiz;



function afficherEmploiDuTemps() {
    // Emploi du temps 
    const emploiDuTemps = `
        <table>
            <tr>
                <th>Jour</th>
                <th>8:30 - 10:30</th>
                <th>10:45 - 12:15</th>
                <th>14:00 - 16:00</th>
                <th>16:15 - 17:45</th>
            </tr>
            <tr>
                <td>Lundi</td>
                <td>Programmation WEB</td>
                <td>Programmation WEB</td>
                <td>Admin Syst & Réseaux</td>
                <td>Admin Syst & Réseaux</td>
            </tr>
            <tr>
                <td>Mardi</td>
                <td>Base de données</td>
                <td>Base de données</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Mercredi</td>
                <td></td>
                <td></td>
                <td>Big Data</td>
                <td>Big Data</td>
            </tr>
            <tr>
                <td>Jeudi</td>
                <td></td>
                <td></td>
                <td>Programation Orienté Objet</td>
                <td>Programation Orienté Objet</td>
            </tr>
            <tr>
                <td>Vendredi</td>
                <td>Matlab</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Samedi</td>
                <td></td>
                <td>Recherche Op</td>
                <td></td>
                <td></td>
            </tr>
        </table>
    `;

    // Afficher l'emploi du temps dans la div
    document.getElementById("affichageEmploiDuTemps").innerHTML = emploiDuTemps;
}


