// Função para exibir o conteúdo de cada seção
function showContent(section) {
    const contentBox = document.getElementById('content-box');
    
    if (section === 'mural') {
        contentBox.innerHTML = `
            <h2>Mural</h2>
            <p>Aqui estão os rankings, notícias e anúncios.</p>
        `;
    } else if (section === 'noticias') {
        contentBox.innerHTML = `
            <h2>Notícias</h2>
            <p>Aqui estão as notícias importantes da escola.</p>
        `;
    } else if (section === 'horarios') {
        contentBox.innerHTML = `
            <h2>Horários</h2>
            <p>Escolha o turno:</p>
            <button id="manha-btn">Manhã</button>
            <button id="tarde-btn">Tarde</button>
            <button id="noite-btn">Noite</button>
        `;
        
        // Adicionar os eventos de clique para os botões dentro de 'Horários'
        document.getElementById('manha-btn').addEventListener('click', () => showHorarios('Manhã'));
        document.getElementById('tarde-btn').addEventListener('click', () => showHorarios('Tarde'));
        document.getElementById('noite-btn').addEventListener('click', () => showHorarios('Noite'));
        
    } else if (section === 'ajuda') {
        contentBox.innerHTML = `
            <h2>Ajuda</h2>
            <div class="ajuda">
                <h3>Para Usuários:</h3>
                <ul>
                    <li><strong>Mural:</strong> Acesse o mural para ver rankings, notícias externas e anúncios relevantes. Este é o espaço onde informações gerais e de interesse dos alunos são publicadas.</li>
                    <li><strong>Notícias:</strong> Confira as últimas notícias relacionadas à escola. Aqui, você pode encontrar comunicados importantes, eventos e novidades.</li>
                    <li><strong>Horários:</strong> Clique em "Horários" para acessar os horários das aulas. Escolha entre os turnos Manhã, Tarde ou Noite para ver os horários específicos de cada período.</li>
                    <li><strong>Ajuda:</strong> Esta seção fornece instruções detalhadas sobre como usar o site. Caso tenha dúvidas, você pode voltar a esta seção a qualquer momento.</li>
                </ul>

                <h3>Para Administradores:</h3>
                <ul>
                    <li><strong>Acesso à Área Administrativa:</strong> Para acessar a área administrativa, clique no botão "Área Administrativa" localizado no canto superior direito da página. Será solicitado que você insira a senha. A senha de acesso é <em>heliopolesel123</em>.</li>
                    <li><strong>Postar Conteúdo:</strong> Após o login, você verá um formulário de postagem. Escolha o tipo de conteúdo (Mural, Notícias ou Horários), insira o texto do post e, se necessário, anexe uma imagem.</li>
                    <li><strong>Publicação:</strong> Clique em "Postar" para publicar o conteúdo. As postagens aparecerão na seção correspondente e serão visíveis para todos os usuários do site.</li>
                    <li><strong>Manutenção de Horários:</strong> Na seção "Horários", os administradores podem publicar ou remover informações relacionadas aos horários das aulas, divididas entre os turnos Manhã, Tarde e Noite.</li>
                    <li><strong>Segurança:</strong> A área administrativa é protegida por senha. Evite compartilhar a senha com pessoas não autorizadas para garantir a integridade do conteúdo publicado.</li>
                </ul>
            </div>
        `;
    }
}

// Função para exibir os horários conforme a categoria escolhida
function showHorarios(turno) {
    const contentBox = document.getElementById('content-box');
    contentBox.innerHTML = `<h2>Horários - ${turno}</h2><p>Postagens dos horários para ${turno}.</p>`;
}

// Função de login de administrador
function adminLogin() {
    const password = prompt("Digite a senha de administrador:");

    if (password === 'heliopolesel123') {
        alert("Login bem-sucedido!");
        document.getElementById('admin-section').style.display = 'block';
    } else {
        alert("Senha incorreta!");
    }
}

// Função para postar conteúdo
function postContent() {
    const tipoPost = document.getElementById('tipo-post').value;
    const conteudo = document.getElementById('conteudo').value;
    const imagem = document.getElementById('imagem').files[0];
    const contentBox = document.getElementById('content-box');

    if (!conteudo.trim()) {
        alert('O conteúdo não pode estar vazio!');
        return;
    }

    let post = `
        <div class="post">
            <h3>${tipoPost}</h3>
            <p>${conteudo}</p>
            <p><small>Publicado em: ${new Date().toLocaleString()}</small></p>
    `;

    if (imagem) {
        const reader = new FileReader();
        reader.onload = function (e) {
            post += `<img src="${e.target.result}" alt="Imagem" style="max-width: 100%; margin-top: 10px;">`;
            post += `</div>`;
            contentBox.innerHTML += post;
        };
        reader.readAsDataURL(imagem);
    } else {
        post += `</div>`;
        contentBox.innerHTML += post;
    }

    document.getElementById('admin-form').reset();
}
