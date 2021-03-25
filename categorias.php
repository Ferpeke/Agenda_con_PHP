<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="public/img/contac.png" sizes="16x16">
    <title>Categorias</title>
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
            <h1 class="display-4 text-center" style="font-family: monospace;">Categorias</h1>
            <button class="btn btn-primary" data-toggle="modal" data-target="#modalAgregarCategoria">
                <span class="fas fa-layer-group"></span>
                Agregar categoria
            </button>
            <hr class="my-4">

            <div id="cargaTablaCategorias"></div>
        </div>
        <!-- agregar modal de catgorias -->
        <?php 
            require_once "vistas/categorias/modalAgregar.php";
            require_once "vistas/categorias/modalActualiza.php";
        ?>
    </div>
    <script src="public/js/categorias.js"></script>
</body>

</html>