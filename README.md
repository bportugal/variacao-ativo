# VariacaoAtivoBportugal

Esse projeto foi desenvolvido com Angular, por Bruno Portugal.

## Development server

No terminal, primeiramente rode o comando `npm install`, após sua conclusão, rode o comando `ng serve` para iniciar o servidor. Navegue até `http://localhost:4200/`.

## Explicação de funcionamento

Após executar o comando e acessar `http://localhost:4200/`, existirão 3 campos. 

O primeiro é para colocar o código do ativo na bolsa brasileira.

O segundo (Range) representa o período para análise das cotações do ativo.

O terceiro representa a periodicidade dentro do período selecionado em (2) de obtenção dos dados. Ex: A cada 1 dia, 5 dias ou 1 mês.

Após a busca, será apresentado um gráfico Candlesticks com o maior e menor valores do dia, além dos valores de abertura e fechamento daquele dia em questão.
Também será exibida uma tabela com a variação do preço do ativo nos últimos 30 dias, assim como sua variação percentual em relação ao dia anterior e ao primeiro dia da amostra.
