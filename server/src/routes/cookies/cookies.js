const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

// Ruta para el inicio de sesión y establecer una cookie de autenticación
app.post("/login", (req, res) => {
  // Verificar credenciales de inicio de sesión y generar un token de autenticación

  // Establecer una cookie de autenticación
  res.cookie("token", "valorToken", { maxAge: 900000, httpOnly: true });
  res.send("Inicio de sesión exitoso");
});

// Ruta para acceder al contenido del carrito de compras almacenado en una cookie
app.get("/detailcart", (req, res) => {
  // Obtener el contenido del carrito de compras de la cookie
  const cartItems = req.cookies.cartItems;

  // Verificar si hay elementos en el carrito
  if (cartItems) {
    res.send("Acciones del carrito realizadas");
  } else {
    res.send("El carrito está vacío");
  }
});
