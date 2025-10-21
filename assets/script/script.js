const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#subject")
const mensagem = document.querySelector("#message")

// Variáveis de controle de validação
let isNomeValid = false
let isEmailValid = false
let isAssuntoValid = false
let isMensagemValid = false

function validaNome() {
  const errNome = document.querySelector("#errNome")
  if(nome.value.length < 3) {
    errNome.textContent = 'Nome muito curto'
    nome.style.border = '2px solid red'
    isNomeValid = false
  } else {
    errNome.textContent = ''
    nome.style.border = '4px solid green'
    isNomeValid = true
  }
}

function validaEmail() {
  const errEmail = document.querySelector("#errEmail")
  if (!email.value.match(emailRegex)) {
    errEmail.textContent = 'E-mail inválido'
    email.style.border = '2px solid red'
    isEmailValid = false
  } else {
    errEmail.textContent = ''
    email.style.border = '4px solid green'
    isEmailValid = true
  }
}

function validaAssunto() {
  const errAssunto = document.querySelector("#errSubject")
  if (assunto.value.length < 5) {
    errAssunto.textContent = 'O assunto precisa de 5 caracteres ao menos.'
    assunto.style.border = '2px solid red'
    isAssuntoValid = false
  } else {
    errAssunto.textContent = ''
    assunto.style.border = '4px solid green'
    isAssuntoValid = true
  }
}

function validaMensagem() {
  const errMensagem = document.querySelector("#errMessage")
  const spanPai = errMensagem.parentElement; // Pega o <span> pai
  let tamanho = mensagem.value.length;

  // Atualizar o número no HTML
  errMensagem.textContent = `${tamanho}`

  if (tamanho < 1 || tamanho > 150) {
    spanPai.style.color = 'red';
    mensagem.style.border = '2px solid red'
    isMensagemValid = false
  } else {
    spanPai.style.color = 'green';
    mensagem.style.border = '4px solid green'
    isMensagemValid = true
  }
}

function enviarForm(event) {
  event.preventDefault() // Impede o recarregamento da página

  // Força a validação de todos os campos (caso o usuário não tenha digitado nada)
  validaNome();
  validaEmail();
  validaAssunto();
  validaMensagem();

  if (isNomeValid && isEmailValid && isAssuntoValid && isMensagemValid) {
    alert('Enviado com sucesso')
    
    // Limpa os campos
    nome.value = '';
    email.value = '';
    assunto.value = '';
    mensagem.value = '';

    // Reseta as bordas
    nome.style.border = '1px solid #ccc' 
    email.style.border = '1px solid #ccc'
    assunto.style.border = '1px solid #ccc'
    mensagem.style.border = '1px solid #ccc'

    // Reseta as variáveis de controle
    isNomeValid = false;
    isEmailValid = false;
    isAssuntoValid = false;
    isMensagemValid = false;

    // Reseta a contagem de caracteres
    const errMensagem = document.querySelector("#errMessage");
    const spanPai = errMensagem.parentElement;
    errMensagem.textContent = '0';
    spanPai.style.color = 'green';

  } else {
    // Se algum campo for inválido, mostra o alerta
    alert("Um ou mais campos estão inválidos. Por favor, corrija e tente novamente.")
  }
}