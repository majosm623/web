function mostrarModulo(id) {
  const modulos = document.querySelectorAll('.modulo');
  modulos.forEach(modulo => {
    modulo.style.display = 'none';
  });

  const moduloActivo = document.getElementById(id);
  if (moduloActivo) {
    moduloActivo.style.display = 'block';
  }
}
