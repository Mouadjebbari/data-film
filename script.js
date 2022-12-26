    // Créez une table HTML avec les colonnes correspondant aux différents champs de chaque film
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>titre</th><th>réalisateur</th><th>duration</th><th>année de production</th><th>Poster</th><th>Festivals</th><th>Acteurs</th>';
    table.appendChild(headerRow);

    // Utilisez l'objet XMLHttpRequest pour charger le fichier movies.json
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'movies.json');
    xhr.onload = () => {
    if (xhr.status === 200) {
        // Récupérez les données et parsez-les en utilisant JSON.parse
        const movies = JSON.parse(xhr.responseText);

        // Parcourez la liste des films et créez une ligne de tableau HTML pour chaque film
        movies.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.titre}</td>
            <td>${movie.réalisateur}</td>
            <td>${movie.durée}</td>
            <td>${movie.annéedeproduction}</td>
            <td><img src="${movie.poster}"</td>
            <td>${movie.festivals.join(', ')}</td>
            <td>${movie.Acteurs.map(Acteurs => `${Acteurs.nom} (${Acteurs.nationalité})`).join(', ')}</td>
        `;
        table.appendChild(row);
        });
    }
    };
    xhr.send();

    // Ajoutez la table à votre page HTML
    document.body.appendChild(table);
