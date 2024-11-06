// Função para validar e adicionar um contato
function addContact() {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  // Validação do telefone: apenas números com até 15 dígitos
  const phoneRegex = /^\d{1,15}$/;
  if (!phoneRegex.test(phone)) {
      alert("Por favor, insira um telefone válido (apenas números com até 15 dígitos).");
      return;
  }

  // Adiciona contato à tabela
  const table = document.getElementById("contactTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  const nameCell = newRow.insertCell(0);
  const phoneCell = newRow.insertCell(1);

  nameCell.textContent = name;
  phoneCell.textContent = phone;

  // Limpa os campos de entrada
  nameInput.value = "";
  phoneInput.value = "";
}
