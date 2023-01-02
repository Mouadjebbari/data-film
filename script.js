var movies ;
   
       // Utilisez l'objet XMLHttpRequest pour charger le fichier movies.json
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'movies.json');
        xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status) {

                // Récupération des films à partir du fichier JSON
            movies = JSON.parse(xhr.responseText);
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
                        <td><ul>${movies[i].festivals.map(festivals => `<li>${festivals}</li>`).join('')}</ul></td>
                        <td><ul>${movies[i].Acteurs.map(Acteurs => `<li>${Acteurs.nom}, ${Acteurs.prénom}, ${Acteurs.nationalité}</li>`).join('')}</ul></td>
                    <tr>
                    `;
                }
                document.getElementById('tbody').innerHTML= table;
            }
        }
        xhr.send();


     
        function searchData(value){
            var table='';
                for (let i = 0; i < movies.length; i++) {
                    if(movies[i].titre.toLowerCase().includes(value.toLowerCase())){
                        table += `
                        <tr>
                            <td>${movies[i].titre}</td>
                            <td>${movies[i].réalisateur}</td>
                            <td>${movies[i].durée}</td>
                            <td>${movies[i].annéedeproduction}</td>
                            <td><img src="${movies[i].poster}" </td>
                            <td><ul>${movies[i].festivals.map(festivals => `<li>${festivals}</li>`).join('')}</ul></td>
                            <td><ul>${movies[i].Acteurs.map(Acteurs => `<li>${Acteurs.nom}, ${Acteurs.prénom}, ${Acteurs.nationalité}</li>`).join('')}</ul></td>
                        <tr>
                        `;
                    }
                    document.getElementById('tbody').innerHTML = table;
            }}