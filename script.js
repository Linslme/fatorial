
function fatorar() {
    // Obter o valor do input
    const numero = parseInt(document.getElementById('id_num').value);

    // Verificar se o valor é válido
     if (isNaN(numero) || numero < 0) {
        alert("Por favor, insira um número válido.");
        return;
    }

    // Calcular o fatorial e montar a string de exibição
    let resultado = 1;
    let expressao = "";
    
    for (let i = numero; i > 0; i--) {
        resultado *= i;
        expressao += i;
        if (i > 1) {
            expressao += " X "; 
        }
    }

    // Criar a section dinamicamente
    let section = document.getElementById('res');

    // Se já existir uma section, remove para criar uma nova
    if (section) {
        section.remove();
    }

    // Cria uma nova section 
    section = document.createElement("section");
    section.id = "res";

    // Adiciona o texto de resultado dentro da section
    section.innerHTML = `<h1>O fatorial de ${numero} é igual a ${resultado}</h1>
    <p> O cálculo fatorial é feito da seguinte forma: 
    <h3>${expressao} = ${resultado}</h3>`;

    // Insere a section no body
    document.body.appendChild(section);
}
