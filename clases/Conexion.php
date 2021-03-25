<?php

    class Conexion {

        public function conectar() {

            // $servidor = "localhost";
            // $user = "localhost";
            // $password = "Nandodrago4";
            // $db = "agendafp";

            // AGREGAR EL PUERTO PARA NO TENER MI MALDITO ERROR XD

            $conexion = mysqli_connect("localhost","root", "Nandodrago4", "agendafp", "33061");

            return $conexion;
        }
    }


  
?>