## About

Executará uma série de testes na página e gerará um relatório sobre o seu desempenho. Nesse relatório, você poderá usar os testes que apresentaram falha como indicadores do que pode ser feito para aprimorar a plataforma.

## Install
```
npm install -g faustao-errou
```
```
npm install -g lighthouse
# or use yarn:
# yarn global add lighthouse
```
```
npm install minimist
```

## Run
```
npm start
```

Ao executar o arquivo sh todas as urls inseridas no arquivo urls.txt serão auditadas

## Authentication

Ao abrir o chrome-debug realize o login na plataforma e deixe a janela aberta, ela será necessária para a autenticação das urls auditadas

## Utils
```
node src/app.js --url=https://www.site.com.br
```

_Utilize o comando acima para auditar somente uma página, substituindo o url.com.br pelo endereço desejado_

**Obs.: a etapa de autenticação é necessária nesta parte também, para isso execute o comando e realize o login:**
```
chrome.exe --remote-debugger-port=9222
``` 