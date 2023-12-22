document.addEventListener('DOMContentLoaded', function(){
    const fotoDePerfil = document.querySelector('#avatar');
    const nome = document.querySelector('#nome');
    const nomeDoUsuario = document.querySelector('#username');
    const repositorios = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo'); 
    const link = document.querySelector('#link'); 

    let xhttp = new XMLHttpRequest();

    try {
        // abre a requisição
        xhttp.open('GET', 'https://api.github.com/users/PedroHenrique004');
        // envia a requisição
        xhttp.send();
        // define o evento de carregamento
        xhttp.onload = function() {
          // verifica se a resposta foi bem sucedida
          if (this.status == 200) {
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
        };
      } catch (error) {
        // imprime a mensagem de erro no console
        console.error(error.message);
      }  finally {
        console.log("Funcionou")
      }
})