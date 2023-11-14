//PRINCIPAIS COMANDOS TERMINAL
cls //limpa o terminal
dir //lista tudo que tem na pasta
cd 'nome do diretório' //vai para o diretório
cd .. //retorna ao diretorio anterior
mkdir 'nome do diretorio' //cria um diretorio
code . //abre o vscode no diretorio atual
echo >> 'nome do arquivo'.'formato do arquivo' - cria um arquivo no diretorio atual 
ps.: aperta enter 2x depois do comando echo
node 'nome do arquivo' //exibe no terminal um arquivo com o node.js
node .\'nome da pasta'\'nome do arquivo' //executa um arquivo que esta em outro diretorio sem sair do atual
rm 'nome do arquivo' //apaga um arquivo do diretorio
rm dir 'nome do diretorio' //apaga um diretorio

//PRINCIPAIS COMANDOS GIT
git config --global user.name "nomedeusuario"
git config --global user.email"emaildousuario"
git log //mostra o historico do git
git init  //faz com que o diretório atual se torne um repositório git
git clone  //clona o repositório do git para o PC
git status //retorna as informações de arquivos alterados, bem como a branch
git add . //prepara todos os arquivos que serão commitados
git add . //prepara todos os arquivos que foram modificados para serem commitados
git add "nome do arquivo" //prepara apenas o arquivo selecionado para ser commita
git reset //desfaz o git add 
git reset . //reseta tudo 
git reset 'nome do arquivo' //reseta apenas o selecionado
git reset "nome do arquivo" //desfaz o commit no arquivo selecionado
git reset soft
git commit -m 'mensagem'//confirma as alterações nos arquivos preparados anteriormente e registra as alterações no git (cria um marco)
git amend -- amend -m 'mensagem' // altera a mensagem do ultimo commit
git reflog //mostra quais arquivos foram commitados e estão prontos para push
git reset head~'n' //reseta o commit no head selecionado
git reset^ //reseta o ultimo commit
git push //envia para o git remoto as alterações commitadas
git pull //baixa do git remoto as alterações
git checkout 'nome da branch' //altera entre branch
git checkout -b 'nome da branch' //cria uma nova branch
git push -u origin 'nome da branch' //envia a nova branch para o git remoto
git branch -d 'nome da branch' //deleta uma branch
git diff 'branch que quer comparar' 'branch 2 a ser comparada/branch que quer comparar' //ve a diferença entre 2 branchs
git fetch 'branch que quer pegar' //clona uma branch SEM ALTERAR os arquivos locais