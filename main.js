document.addEventListener('DOMContentLoaded', function(){
    const fotoDePerfil = document.querySelector('#avatar');
    const nome = document.querySelector('#nome');
    const nomeDoUsuario = document.querySelector('#username');
    const repositorios = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo'); 
    const link = document.querySelector('#link'); 

    let xhttp = new XMLHttpRequest();

        // abre a requisição
        xhttp.open('GET', 'https://api.github.com/users/PedroHenrique004');
        // envia a requisição
        xhttp.send();
        // define o evento de carregamento
        xhttp.onload = function() {
            // converte a resposta em um objeto JSON
            let json = JSON.parse(this.responseText);
            // atribui os valores aos elementos HTML
            fotoDePerfil.src = json.avatar_url;
            nomeDoUsuario.innerText = json.login;
            nome.innerText = json.name;             
            repositorios.innerText = json.public_repos; 
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            link.href = json.html_url;
          
        }    
})