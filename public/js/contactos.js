$(document).ready(function(){

    $("#cargaTablaContactos").load('vistas/contactos/tablaContactos.php');

    $('#btnAgregarContacto').click(function(){
        
      if ($('#idCategoriaSelect').val() == 0) {
			  swal({title:"Debes selecciona una categoria",
              icon: "warning",
              dangerMode: true,
        });
			  return false;
		  }
      
      if ($('#nombre').val() == "") {
        swal({title:"Debes agregar el nombre",
              icon: "warning",
              dangerMode: true,
        });
			  return false;
      }
      if ($('#apaterno').val() == "") {
        swal({title:"Debes agregar el apellido Paterno",
              icon: "warning",
              dangerMode: true,
        });
			  return false;
      }
      if ($('#amaterno').val() == "") {
        swal({title:"Debes agregar el apellido Materno",
              icon: "warning",
              dangerMode: true,
        });
			  return false;
      }
      if ($('#telefono').val() == "") {
        swal({title:"Debes agregar el telefono",
              icon: "warning",
              dangerMode: true,
        });
        return false;
      }
      if ($('#email').val() == "") {
         swal({title:"Debes agregar el email",
              icon: "warning",
              dangerMode: true,
        });
			  return false;
      }
      
      agregarContacto();
    });

    $('#btnActualizarContacto').click(function(){
      actualizarContacto();
    });


});

function actualizarContacto() {
  $.ajax({
    type: "POST",
    url: "procesos/contactos/actualizarContactos.php",
    data: $('#frmAgregarContactoU').serialize(),
    success: function (respuesta) {
        respuesta = respuesta.trim();
        if (respuesta == 1) {
          $('#cargaTablaContactos').load('vistas/contactos/tablaContactos.php');
          $('#modalActualizarContacto').modal("toggle");
            swal(":D", "Se Actualizo con exito", "success");
        } else {
           alert(respuesta);
           
          swal(":(", "No se Actualizo con exito!!!", "error")
        }
      }
});
}

function agregarContacto() {
    $.ajax({
        type: "POST",
        url: "procesos/contactos/agregarContacto.php",
        data: $('#frmAgregarContacto').serialize(),
        success: function (respuesta) {
            respuesta = respuesta.trim();
            if (respuesta == 1) {
                $('#frmAgregarContacto')[0].reset();
                $("#cargaTablaContactos").load('vistas/contactos/tablaContactos.php');
                swal ( "¡ Buen trabajo! " , "Se agrego con exito" , "success" );
            } else {
               alert(respuesta);
               
              swal(":(", "No se Agrego con exito!!!", "error")
            }
          }
    });
}

function eliminarContacto(idContacto) {
    swal({
      title: "¿Estas seguro de eliminar este contacto?",
      text: "Una vez eliminado no podra ser recuperado",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        $.ajax({
          type: "POST",
          data: "idContacto=" + idContacto,
          url: "procesos/contactos/eliminarContacto.php",
          success: function (respuesta) {
            respuesta = respuesta.trim();
            if (respuesta == 1) {
                $("#cargaTablaContactos").load('vistas/contactos/tablaContactos.php');
              swal(":D", "Se Elimino con exito", "success");
            } else {
               alert(respuesta);
              swal(":(", "No se Elimino con exito!!!", "error")
            }
          }
        });
      }
    });
  }

  function obtenerDatosContacto(idContacto) {
	$.ajax({
		type: "POST",
		data: "idContacto=" + idContacto,
		url: "procesos/contactos/obtenerDatosContacto.php",
		success:function(respuesta) {
			respuesta = jQuery.parseJSON(respuesta);
			idCategoria = respuesta['id_categoria'];

			$('#nombreU').val(respuesta['nombre']);
			$('#apaternoU').val(respuesta['paterno']);
			$('#amaternoU').val(respuesta['materno']);
			$('#telefonoU').val(respuesta['telefono']);
			$('#emailU').val(respuesta['email']);
			$('#idContactoU').val(respuesta['id_contacto']);
			$('#categoriasIdU').load("vistas/contactos/selectCategoriasUpdate.php?idCategoria=" + idCategoria);
			
		}
	});
}
