AOS.init();

// Modo escuro
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Formulário com envio real (substitua a URL abaixo pela sua da Sheet.best)
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const loader = document.getElementById('form-loader');
  loader.style.display = 'block';

  const form = e.target;
  const data = {
    Nome: form.nome.value,
    Telefone: form.telefone.value,
    Email: form.email.value,
    Mensagem: form.mensagem.value
  };

  try {
    await fetch("https://sheet.best/api/sheets/SEU-ID-AQUI", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("Mensagem enviada com sucesso!");
    form.reset();
  } catch (error) {
    alert("Erro ao enviar. Tente novamente.");
  } finally {
    loader.style.display = 'none';
  }
});

// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Chat IA simulado
document.getElementById('chat-send-btn').addEventListener('click', () => {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;

  const messages = document.getElementById('chat-messages');
  messages.innerHTML += `<div><strong>Você:</strong> ${msg}</div>`;
  input.value = '';

  setTimeout(() => {
    let reply = "Desculpe, ainda estou aprendendo.";
    if (msg.toLowerCase().includes("preço") || msg.toLowerCase().includes("planos")) {
      reply = "Temos planos a partir de R$79,90!";
    }
    messages.innerHTML += `<div><strong>Atendimento:</strong> ${reply}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }, 1000);
});

// Fechar chat
document.getElementById('chat-close').addEventListener('click', () => {
  document.getElementById('chat-container').style.display = 'none';
});
