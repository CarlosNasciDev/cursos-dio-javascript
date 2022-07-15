var jogador1 = 0
var jogador2 = 0
var placar = ''

if (jogador1 > 0) {
    console.log('jogador 1 marcou ponto.')
} else if (jogador2 > 0) {
    console.log('jogador 2 marcou ponto.')
}
else {
    console.log ('niguém marcou ponto.')
} 

switch (placar) {
    case jogador1 > jogador2:
        console.log('jogador 1 ganhou.')
        break;
    
    case jogador2 > jogador1:
        console.log('jogador 2 ganhou.')
        break;
    
    default:
        console.log('empatou')
        break;
}