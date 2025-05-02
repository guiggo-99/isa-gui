const dataInicio = new Date("2024-10-19T19:00:00-03:00");
const display = document.getElementById("relacionamento-tempo");

function atualizarContador() {
  const agora = new Date();

  // Ajusta "dataBase" para o ponto de virada às 19h
  const hojeAs19h = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate(), 19, 0, 0);
  const dataReferencia = agora >= hojeAs19h ? hojeAs19h : new Date(hojeAs19h.getTime() - 24 * 60 * 60 * 1000);

  let anos = dataReferencia.getFullYear() - dataInicio.getFullYear();
  let meses = dataReferencia.getMonth() - dataInicio.getMonth();
  let dias = dataReferencia.getDate() - dataInicio.getDate();

  if (dias < 0) {
    meses--;
    const ultimoDiaMesAnterior = new Date(dataReferencia.getFullYear(), dataReferencia.getMonth(), 0).getDate();
    dias += ultimoDiaMesAnterior;
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  // Tempo desde a última virada (às 19h)
  const diffMs = agora - dataReferencia;
  const horas = Math.floor(diffMs / (1000 * 60 * 60));
  const minutos = Math.floor((diffMs / (1000 * 60)) % 60);
  const segundos = Math.floor((diffMs / 1000) % 60);

  display.innerHTML = `${anos} ano(s), ${meses} mês(es), ${dias} dia(s), ${horas}h ${minutos}min ${segundos}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
