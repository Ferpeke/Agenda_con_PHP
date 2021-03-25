<?php
    require_once "../../clases/Conexion.php";
    $objCon = new Conexion();
    $conexion = $objCon -> conectar();

    $sql = "SELECT id_categoria, nombre, descripcion FROM t_categorias";
    $result = mysqli_query($conexion, $sql);


?>

<div class="card">
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-hover table-condensed table-bordered" id="tablaCategoriasDT">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <?php
                    while ($mostrar = mysqli_fetch_array($result)) {

                        $idCategoria = $mostrar['id_categoria'];

                    
                
                ?>

                <tbody>
                    <tr>
                        <td><?php echo $mostrar['nombre'];  ?></td>
                        <td><?php echo $mostrar['descripcion'];  ?></td>
                        <td>
                            <span onclick="obtenerDatosCategoria('<?php echo $idCategoria ?>')" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#modalActualizarCategoria">
                                <span class="far fa-edit"></span>
                            </span>
                        </td>
                        <td>
                            <span class="btn btn-danger btn-sm" onclick="eliminarCategoria('<?php echo $idCategoria ?>')">
                                <span class="fas fa-trash-alt"></span>
                            </span>
                        </td>
                    </tr>
                    <?php
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
<script>
    $(document).ready(function(){
        $("#tablaCategoriasDT").DataTable();
    });
</script>