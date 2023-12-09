# Principais Comandos Terminal

- `cls`: Limpa o terminal.
- `dir`: Lista todos os arquivos e diretórios na pasta.
- `cd 'nome do diretório'`: Navega para o diretório especificado.
- `cd ..`: Retorna ao diretório anterior.
- `mkdir 'nome do diretório'`: Cria um novo diretório.
- `code .`: Abre o Visual Studio Code no diretório atual.
- `echo >> 'nome do arquivo'.'formato do arquivo'`: Cria um arquivo no diretório atual.
  - _(Pressione Enter duas vezes após o comando `echo`.)_
- `node 'nome do arquivo'`: Executa um arquivo usando o Node.js.
- `node .\'nome da pasta'\'nome do arquivo'`: Executa um arquivo em outro diretório sem sair do diretório atual.
- `rm 'nome do arquivo'`: Apaga um arquivo do diretório.
- `rm dir 'nome do diretório'`: Apaga um diretório.

# Principais Comandos Git

- `git config --global user.name "nomedeusuario"`: Configura o nome do usuário no Git.
- `git config --global user.email "emaildousuario"`: Configura o e-mail do usuário no Git.
- `git log`: Mostra o histórico de commits do Git.
- `git init`: Inicializa um repositório Git no diretório atual.
- `git clone`: Clona um repositório Git para o computador.
- `git status`: Retorna informações sobre arquivos alterados e o status da branch.
- `git add .`: Adiciona todos os arquivos modificados para o próximo commit.
- `git add "nome do arquivo"`: Adiciona um arquivo específico para o próximo commit.
- `git reset`: Desfaz o `git add`.
- `git reset .`: Reseta todos os arquivos.
- `git reset 'nome do arquivo'`: Reseta apenas o arquivo selecionado.
- `git reset "nome do arquivo"`: Desfaz o commit no arquivo selecionado.
- `git reset soft`: Desfaz o último commit.
- `git commit -m 'mensagem'`: Confirma as alterações nos arquivos preparados anteriormente e cria um novo commit.
- `git amend --amend -m 'mensagem'`: Altera a mensagem do último commit.
- `git reflog`: Mostra os commits e seus estados.
- `git reset head~'n'`: Reseta o commit no head selecionado.
- `git reset^`: Reseta o último commit.
- `git push`: Envia as alterações commitadas para o repositório Git remoto.
- `git pull`: Baixa as alterações do repositório Git remoto.
- `git checkout 'nome da branch'`: Altera entre branches.
- `git checkout -b 'nome da branch'`: Cria uma nova branch.
- `git push -u origin 'nome da branch'`: Envia a nova branch para o repositório Git remoto.
- `git branch -d 'nome da branch'`: Deleta uma branch.
- `git diff 'branch1' 'branch2'`: Ve a diferença entre duas branches.
- `git fetch 'branch que quer pegar'`: Clona uma branch sem alterar os arquivos locais.
