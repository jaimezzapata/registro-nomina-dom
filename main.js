const guardarEmpleado = document.getElementById("guardarEmpleado");
const listarEmpleados = document.querySelector('#listarEmpleados')
const buscarEmpleado = document.querySelector('#buscarEmpleado')
const inputs = document.querySelectorAll("#formulario input");
const cards = document.querySelector('#cards')
const validarNumeros = /-?(?:[0-9]+(?:\.[0-9]*)?|(?:[0-9]+)?\.[0-9]+)/g;

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    let elementoEvaluar = e.target.name;
    switch (elementoEvaluar) {
      case "valorHora":
        if (validarNumeros.test(e.target.value)) {
          console.log("Si son numeros");
        } else {
          console.log("Son letras");
        }
      break;
    }
  });
});

console.log(inputs);
let listadoEmpleados = [];

guardarEmpleado.addEventListener("click", () => {
  let valorHora = document.querySelector("#valorHora");
  let cantidadHoras = document.querySelector("#cantidadHoras");
  let nombreEmpleado = document.querySelector("#nombreEmpleado");
  let cargoEmpleado = document.querySelector("#cargoEmpleado");
  let documentoEmpleado = document.querySelector("#documentoEmpleado");
  let empleado = {
    documento: documentoEmpleado.value,
    nombre: nombreEmpleado.value,
    cargo: cargoEmpleado.value,
    salario: parseInt(valorHora.value) * parseInt(cantidadHoras.value),
  };
  listadoEmpleados.push(empleado);
  console.table(listadoEmpleados);
  valorHora = document.querySelector("#valorHora").value = "";
  cantidadHoras = document.querySelector("#cantidadHoras").value = "";
  nombreEmpleado = document.querySelector("#nombreEmpleado").value = "";
  cargoEmpleado = document.querySelector("#cargoEmpleado").value = "";
  documentoEmpleado = document.querySelector("#documentoEmpleado").value = "";
});

listarEmpleados.addEventListener('click', ()=> {
  console.log('click')
  const cardEmpleado = listadoEmpleados.map((empleado)=>{
    return (
      cards.innerHTML = 
      `
        <section class='card'>
          <h1>Documento: ${empleado.documento}</h1>
          <h1>Nombre: ${empleado.nombre}</h1>
          <h1>Cargo: ${empleado.cargo}</h1>
          <h1>Salario: ${empleado.salario}</h1>
        </section>
      `
    )
  })
  cards.innerHTML = cardEmpleado
})

buscarEmpleado.addEventListener('click', ()=> {
  let documentoEmpleado = document.querySelector("#documentoEmpleado");
  const cardEmpleado = listadoEmpleados.map((empleado)=>{
    if(documentoEmpleado.value === empleado.documento){
      return (
        cards.innerHTML = 
        `
          <section class='card'>
            <h1>Documento: ${empleado.documento}</h1>
            <h1>Nombre: ${empleado.nombre}</h1>
            <h1>Cargo: ${empleado.cargo}</h1>
            <h1>Salario: ${empleado.salario}</h1>
          </section>
        `
      )
    }
  })
  cards.innerHTML = cardEmpleado
})
