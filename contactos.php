<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="public/img/contac.png" sizes="16x16">
    <title>Contactos</title>
    <?php require_once "dependencias.php" ?>
</head>
<body>
    <div class="container mt-3">
        <div class="row mt-3">
            <div class="col">
                <?php require_once "menu.php" ?>
            </div>
        </div>
        <div class="jumbotron bg-success text-white">
            <h1 class="display-4 text-center" style="font-family: monospace;">Contactos</h1>
            <button class="btn btn-primary" data-toggle="modal" data-target="#modalAgregarContacto">
                <span class="fas fa-user-plus"></span>
                Agregar contacto
            </button>
            <hr class="my-4">

            <div id="cargaTablaContactos"></div>


        </div>
        <?php

            require_once "vistas/contactos/modalAgregar.php";
            require_once "vistas/contactos/modalActualizar.php";
        
        ?>
    </div>
    <script src="public/js/contactos.js"></script>
</body>
</html>