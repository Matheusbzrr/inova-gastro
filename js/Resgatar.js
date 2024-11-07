function Resgatar() {
    const nome = localStorage.getItem("nome");
    const email = localStorage.getItem("email");
  const mensagem =
    "Parabéns! Você desbloqueou um prêmio incrível 🎉!!Clique abaixo para resgatar um prêmio cheio de sabor 🤩✌";

  alert(mensagem);

  fetch("http://127.0.0.1:5000/resgatar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, email, mensagem }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na comunicação com o servidor");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.status === "sucesso") {
        window.location.href = "Resgatado.html";
      } else {
        alert(data.mensagem);
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao tentar resgatar o prêmio.");
    });
}
