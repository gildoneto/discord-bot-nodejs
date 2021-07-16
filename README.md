# DiscordBot

O DiscordBot foi o projeto final da Iniciativa Padawan, onde o [Felipe Reinaux](https://github.com/fereinaux) foi o mentor durante no período de 01/06/2021 a 15/07/2021.

Para rodar este projeto na sua máquina, siga os seguintes passos:

1 - Abra o git bash a partir da pasta de sua preferência.

2 - Clone o projeto rodando o comando `git clone https://github.com/gildoneto/discord-bot-nodejs.git`

3 - Abra o projeto no VS Code, e no terminal bash certifique-se de estar na pasta `discord-bot-nodejs`

4 - Rode o comando `npm install` para instalar as dependências do projeto

5 - Entre no Discord, e crie um servidor próprio clicando no sinal de `+` no canto inferior esquerdo

6 - Entre na página `https://discord.com/developers/applications/` pra criar seu bot

7 - Clique em `New Application` e escolha o nome do seu bot

8 - Na pagina na qual você foi direcionado, clique em `bot` e depois em `Add Bot`

10 - Ainda na mesma pagina, mais abaixo, marque a opção `Administrator` na seção `Bot Permissions`

11 - Clique em `General Information` e copie o **APPLICATION ID**

12 - No link a seguir substitua a palavra `COLEAQUI` pelo **APPLICATION ID** copiado `https://discord.com/oauth2/authorize?client_id=COLEAQUI&permissions=8&scope=bot`

13 - Selecione o servidor que você criou no passo 5, clique em `Continuar`, marque a opção `Administrador` e clique em `Autorizar`

14 - Pronto, seu bot foi adicionado ao seu servidor.

15 - Na página `https://discord.com/developers/applications/` clique no seu bot criado

16 - Clique agora em `Bot`, e na pagina do bot, ao lado do icone, copie o TOKEN

17 - Va ate o arquivo `.env`, substitua a palavra PASSWORD pelo TOKEN copiado

18 - Ufa! Agora sim. Digite o comando `node app.js` e veja a magica acontecer.

Depois desses passos, o seu Bot deve ficar online, e atender alguns comandos. Digite !comandos pra começar a brincadeira e que a forca esteja com você.

teste
