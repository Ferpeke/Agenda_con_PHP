$(document).ready(function () {
  $("#cargaTablaCategorias").load('vistas/categorias/tablaCategorias.php');

  $("#btnGuardarCategoria").click(function () {
    if ($('#nombreCategoria').val() == "") {
      swal({title:"Debes de agregregar un nombre de categoria!",
              icon: "warning",
              dangerMode: true,
        });
			  return false;
    } 
    agregarCategoria();
  });

  $("#btnActualizarCategoria").click(function () {
      
      actualizarCategoria();

    
  });


});

function agregarCategoria() {
  $.ajax({
    type: "POST",
    data: $('#frmAgregarCategoria').serialize(),
    url: "procesos/categorias/agregarCategorias.php",
    success: function (respuesta) {
      respuesta = respuesta.trim();
      if (respuesta == 1) {
        $('#frmAgregarCategoria')[0].reset();
        $("#cargaTablaCategorias").load('vistas/categorias/tablaCategorias.php');
        $('#modalActualizarCategoria').modal("toggle");
        swal ( "¡ Buen trabajo! " , "Se agrego con exito" , "success" );
      } else {
        // alert(respuesta);
        swal(":(", "No se agrego con exito!!!", "error")
      }
    }
  });
}


function eliminarCategoria(idCategoria) {
  swal({
    title: "¿Estas seguro de eliminar esta catgoria?",
    text: "Una vez eliminado no podra ser recuperado",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      $.ajax({
        type: "POST",
        data: "idCategoria=" + idCategoria,
        url: "procesos/categorias/eliminarCategoria.php",
        success: function (respuesta) {
          respuesta = respuesta.trim();
          if (respuesta == 1) {
            $("#cargaTablaCategorias").load('vistas/categorias/tablaCategorias.php');
            swal(":D", "Se Elimino con exito", "success");
          } else {
            // alert(respuesta);
            swal(":(", "No se Elimino con exito!!!", "error")
          }
        }
      });
    }
  });
}


function obtenerDatosCategoria(idCategoria){
  $.ajax({
    type: "POST",
    data: "idCategoria=" + idCategoria,
    url: "procesos/categorias/obtenerDatosCategoria.php",
    success:function(respuesta) {
      //te va a regresar un archivo JSON
      respuesta = jQuery.parseJSON(respuesta);

      $('#idCategoria').val(respuesta['idCategoria']);
      $('#nombreCategoriaU').val(respuesta['nombre']);
      $('#descripcionU').val(respuesta['descripcion']);
    }
  });
}


function actualizarCategoria() {
  $.ajax({
    type: "POST",
    data: $('#frmActualizarCategoria').serialize(),
    url: "procesos/categorias/actualizarCategoria.php",
    success: function (respuesta) {
      respuesta = respuesta.trim();
      if (respuesta == 1) {
        $("#cargaTablaCategorias").load('vistas/categorias/tablaCategorias.php');
        swal(":D", "Se Actualiza con exito", "success");
      } else {
         alert(respuesta);
        swal(":(", "No se Actualizo con exito!!!", "error")
      }
    }
  });
}