const priceForm = document.getElementById("price-form");
    const userIdInput = document.getElementById("user_id_input");
    const nombreProductoInput = document.getElementById(
      "nombre_producto_input"
    );

    priceForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita el envío del formulario por defecto

      // Obtiene los valores de los campos de entrada
      const user_id = userIdInput.value;
      const nombre_producto = nombreProductoInput.value;

      // Construye la URL con los valores de entrada
      const url = `/precio/${user_id}/${nombre_producto}`;

      // Redirige al usuario a la URL construida
      window.location.href = url;
    });