<?php
        //det 5 te behet insertimi i shenimeve te studentit permes nje forme ne HTML
    if(isset($_POST['add'])){
        $dbhosti = 'localhost:3306';
        $dbuseri = 'root';
        $dbpasswordi = '';
        $db = 'bizinterneti';
        $con = mysqli_connect($dbhosti,$dbuseri, $dbpasswordi, $db);
        if(!$con){
            die('Lidhja nuk mund te realizohet'. mysqli_connect_error());
        }
        #echo 'Lidhja me db perfundoi me sukses';

        if(!get_magic_quotes_gpc()){
            $id = addslashes($_POST['ID']);
            $emri = addslashes($_POST['emri']);
        }
        else{
            $id = $_POST['id'];
            $emri = $_POST['emri'];
        }
        $mbiemri = $_POST['mbiemri'];

         $sql = "INSERT INTO studentet(Id, emri, mbiemri, data_reg)"
        . " VALUES('$id', '$emri','$mbiemri',NOW())";


        $retval = mysqli_query($con, $sql);

        if(!$retval){
          die('Lidhja nuk mund te realizohet'. mysqli_connect_error());
        }

        echo "te dhenat jane regjistruar me sukses";


         mysqli_close($con);
    }
?>