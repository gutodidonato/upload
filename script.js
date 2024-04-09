function verificarArquivo() {
  var fileInput = document.getElementById("fileInput");
  var file = fileInput.files[0];

  if (!file) {
    alert("Por favor, selecione um arquivo.");
    return;
  }

  // 5 MB
  var tamanhoMaximo = 5 * 1024 * 1024;
  if (file.size > tamanhoMaximo) {
    alert(
      "O arquivo selecionado é muito grande. Por favor, selecione um arquivo menor."
    );
    return;
  }

  var tiposPermitidos = ["image/jpeg", "image/png", "image/gif"];
  if (!tiposPermitidos.includes(file.type)) {
    alert(
      "Formato de arquivo inválido. Por favor, selecione uma imagem (JPEG, PNG ou GIF)."
    );
    return;
  }

  enviarEmail(file);
}

function enviarEmail(arquivo) {
  console.log("Arquivo pronto para envio:", arquivo);
}
