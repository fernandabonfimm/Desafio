// 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

function calcularDistanciaPercorrida(tempo) {
  const velocidadeCarro = 110; 
  const velocidadeCaminhao = 80; 

  const distanciaCarro = (velocidadeCarro / 60) * tempo; 
  const distanciaCaminhao = (velocidadeCaminhao / 60) * tempo; 

  return distanciaCarro + distanciaCaminhao;
}

//a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.
const distanciaEntreCidades = 100; 
const distanciaPedagio = 20; 
const tempoPedagio = 5; 

// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)
const distanciaAtePedagio = (distanciaEntreCidades - distanciaPedagio) / 2;

const tempoCarroAtePedagio = (distanciaAtePedagio / 110) * 60; 

const tempoCaminhaoAtePedagio = (distanciaAtePedagio / 80) * 60 + tempoPedagio; 

const distanciaEntrePedagios = distanciaPedagio;

const tempoCarroEntrePedagios = (distanciaEntrePedagios / 110) * 60; 

const tempoCaminhaoEntrePedagios = (distanciaEntrePedagios / 80) * 60 + tempoPedagio; 

const tempoTotalCarro = tempoCarroAtePedagio + tempoCarroEntrePedagios + tempoCarroAtePedagio;

const tempoTotalCaminhao = tempoCaminhaoAtePedagio + tempoCaminhaoEntrePedagios + tempoCaminhaoAtePedagio;

const tempoCruzamento = (distanciaEntreCidades / 190) * 60; 

const distanciaCruzamento = calcularDistanciaPercorrida(tempoCruzamento);

if (distanciaCruzamento <= distanciaEntreCidades / 2) {
  console.log("O carro está mais próximo de Ribeirão Preto.");
} else {
  console.log("O caminhão está mais próximo de Ribeirão Preto.");
}

// c) Explique como chegou no resultado.
//Para chegar no resultado, foram calculados os tempos que cada veículo leva para percorrer a distância até o primeiro pedágio e a distância entre os pedágios, levando em conta o tempo de parada no pedágio do caminhão. 
//Em seguida, foi calculado o tempo total que cada veículo leva para percorrer toda a distância, somando os tempos calculados anteriormente para cada trecho. 
//Depois foi calculado o tempo de cruzamento entre os dois veículos, dividindo a distância entre as cidades pela soma das velocidades do carro e do caminhão. 
//Com a distância percorrida por cada veículo até o momento do cruzamento, foi possível verificar qual dos dois está mais próximo, comparando a distância do cruzamento com a metade da distância total entre as cidades.