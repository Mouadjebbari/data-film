
        // Utilisez l'objet XMLHttpRequest pour charger le fichier movies.json
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'movies.json');
        xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status) {
                // Récupération des films à partir du fichier JSON
            var movies = JSON.parse(xhr.responseText);
            // Génération du HTML pour chaque film
                var table = '';
                for (let i = 0; i < movies.length; i++) {
                    table += `
                    <tr>
                        <td>${movies[i].titre}</td>
                        <td>${movies[i].réalisateur}</td>
                        <td>${movies[i].durée}</td>
                        <td>${movies[i].annéedeproduction}</td>
                        <td><img src="${movies[i].poster}" </td>
                        <td>${movies[i].festivals}</td>
                        <td>${movies[i].Acteurs[0].nom},${movies[i].Acteurs[0].prénom},${movies[i].Acteurs[0].nationalité}${'<br>'}
                        ${movies[i].Acteurs[1].nom},${movies[i].Acteurs[1].prénom},${movies[i].Acteurs[1].nationalité}</td>
                    <tr>
                    `;
                }
        
                document.getElementById('tbody').innerHTML= table;
    
        // Ajoutez la table à votre page HTML
            }
        
        }
        xhr.send();

    
    