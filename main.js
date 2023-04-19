function crearCarta() {
    // Get the form data
    const rut = document.getElementById("rut").value;
    const nombres = document.getElementById("nombres").value;
    const apPaterno = document.getElementById("appaterno").value;
    const apMaterno = document.getElementById("apmaterno").value;
    const edad = document.getElementById("edad").value;
    const genero = document.getElementById("genero").value;
    const telefono = document.getElementById("telefono").value;
    
    // Create a text file with the form data
    const data = `RUT: ${rut}\nNombres: ${nombres}\nApellido Paterno: ${apPaterno}\nApellido Materno: ${apMaterno}\nEdad: ${edad}\nGénero: ${genero}\nTeléfono: ${telefono}`;
    const file = new Blob([data], { type: "text/plain" });
    
    // Create a link to download the text file
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "form.txt");
    
    // Click the link to download the text file
    link.click();
  }
  