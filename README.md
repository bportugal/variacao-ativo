# VariacaoAtivoBportugal

Esse projeto foi desenvolvido com Angular, por Bruno Portugal.

## Development server

No terminal, primeiramente rode o comando `npm install`, após sua conclusão, rode o comando `ng serve` para iniciar o servidor. Navegue até `http://localhost:4200/`.

## Explicação de funcionamento

Após executar o comando e acessar `http://localhost:4200/`, existirão 3 campos. 

1) O primeiro é para colocar o código do ativo na bolsa brasileira.

2) O segundo (Range) representa o período para análise das cotações do ativo.

3) O terceiro representa a periodicidade (intervalo) dentro do período selecionado em (2) de obtenção dos dados. Ex: A cada 1 dia, 5 dias ou 1 mês.

Após a busca, será apresentado um gráfico Candlesticks com o maior e menor valores do dia, além dos valores de abertura e fechamento daquele dia em questão.
Existe a opção de escolher outros tipos de gráficos, os demais serão plotados considerando o valor de abertura de cada dia. 

Também será exibida uma tabela com a variação do preço de abertura do ativo nos últimos 30 dias, assim como sua variação percentual em relação ao dia anterior e ao primeiro dia da amostra.
