// Função para manipular o cadastro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Obtendo os valores dos campos de cadastro
    const usuario = document.getElementById('RegistrarUsuario').value;
    const senha = document.getElementById('registrarPassword').value;
    
    // Armazenar os dados no localStorage
    localStorage.setItem('user', usuario);
    localStorage.setItem('password', senha);
    
    alert('Cadastro realizado com sucesso!');
});

// Função para manipular o login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Obtendo os valores dos campos de login
    const LoginUsuario = document.getElementById('loginUsername').value;
    const LoginSenha = document.getElementById('loginPassword').value;
    
    // Recuperar os dados do localStorage
    const DadosUsuario = localStorage.getItem('user');
    const DadosSenha = localStorage.getItem('password');
    
    // Verificar se os dados estão corretos
    if (LoginUsuario === DadosUsuario && LoginSenha === DadosSenha) {
        alert('Login bem-sucedido!');
    } else {
        alert('Usuário ou senha incorretos.');
    }
});
