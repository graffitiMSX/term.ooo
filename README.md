# Termo/Wordle helper

**Autor:** Rudolf A. F. Gutlich

## Como usar
  
Altere as constantes no início do arquivo './src/app.js':


- Insira as letras que não fazem parte da palavra em: mustNotInclude

- Insira as letras que fazem parte da palavra em: mustInclude

- Caso já saiba as letras iniciais, insira em: start

- Caso já saiba as letras finais, insira em: end

- Insira as letras que existem mas não estão na posição correta em: notInPositionX

- Insira as letras que existem e estão nas posições corretas em: inPositionX


Execute com `npm run dev` e altere os parâmetros acima à medida em que for efetuando novas tentativas, salvando o arquivo à cada rodada para obter as sugestões.
 

# Fonte de palavras:

  *Palavras com 5 letras obtidas de:*

[https://www.ime.usp.br/~pf/dicios/](https://www.ime.usp.br/~pf/dicios/)
Atualizado em 2022-03-22
Paulo Feofiloff
Departamento de Ciência da Computação
Instituto de Matemática e Estatística da USP

Link utilizado para conversão: [https://www.ime.usp.br/~pf/dicios/br-utf8.txt](https://www.ime.usp.br/~pf/dicios/br-utf8.txt)

Arquivo com todas as palavras deste dicionário: *'./src/sources/palavras.txt'*
