document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const adresse = document.getElementById('adresse').value;
    const entreprise = document.getElementById('entreprise').value;
    const date = document.getElementById('date').value;

    const lettre = `
${nom}
${adresse}

À l'attention du service résiliation
${entreprise}

${date}

Objet : Résiliation de contrat

Madame, Monsieur,

Par la présente, je vous informe de ma décision de résilier mon contrat auprès de votre établissement.
Conformément aux conditions générales, je vous remercie de bien vouloir prendre en compte cette demande et de m’indiquer la date effective de résiliation.

Je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

${nom}
`;

    document.getElementById('lettre').textContent = lettre;
    document.getElementById('output').classList.remove('hidden');
});

function copyText() {
    const text = document.getElementById('lettre').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Lettre copiée dans le presse-papier ✅");
    });
}
