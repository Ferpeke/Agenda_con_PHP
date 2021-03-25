<?php

require_once "../../clases/Categorias.php";

$idCategoria = $_POST['idCategoria'];

$Categorias = new Categorias();

// convertimos el arreglo a una cadena de tipo JSON 
echo json_encode($Categorias -> obtenerDatosCategoria($idCategoria) );
