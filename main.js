function crearCarta() {
    const rut = document.getElementById("rut").value;
    const nombres = document.getElementById("nombres").value;
    const apPaterno = document.getElementById("appaterno").value;
    const apMaterno = document.getElementById("apmaterno").value;
    const edad = document.getElementById("edad").value;
    const genero = document.getElementById("genero").value;
    const telefono = document.getElementById("telefono").value;
    
    if (rut && nombres && apPaterno && apMaterno && edad && genero && telefono) {
    const data = `RUT: ${rut}\nNombres: ${nombres}\nApellido Paterno: ${apPaterno}\nApellido Materno: ${apMaterno}\nEdad: ${edad}\nGénero: ${genero}\nTeléfono: ${telefono}`;
    const file = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "form.txt");
    

    link.click();
  } else {
    alert("Por favor, rellene todos los espacios en blanco.");
  }
}
  