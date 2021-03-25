<?php
  require_once "../../clases/Categorias.php";

  $idCategoria = $_POST['idCategoria'];

  $Categoria = new Categorias();

  echo $Categoria -> eliminarCategoria($idCategoria);
