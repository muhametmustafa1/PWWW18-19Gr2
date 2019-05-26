<?php
    if(isset($_POST['button'])){
        $dbhosti = 'localhost:3306';
        $dbuseri = 'root';
        $dbpasswordi = '';
        $db = 'cubitvdatabase';
        $con = mysqli_connect($dbhosti,$dbuseri, $dbpasswordi, $db);
        if(!$con){
            die('Lidhja nuk mund te realizohet'. mysqli_connect_error());
        }
        #echo 'Lidhja me db perfundoi me sukses';

        if(!get_magic_quotes_gpc()){
            $titulli = addslashes($_POST['titulli_i_filmit']);
        }
        else{
            $titulli = $_POST['titulli_i_filmit'];
        }

        $sql = "INSERT INTO filmat(Emri)"
        . " VALUES('$titulli')";
   
   
   $retval = mysqli_query($con, $sql);
   
   if(!$retval){
       die('Lidhja nuk mund te realizohet'. mysqli_connect_error());
   
   }
   
   echo "te dhenat jane regjistruar me sukses";
   
   
   mysqli_close($con);   
    }
?>
<?php
 //Perdorimi i funksioneve replace, explode dhe implode
        //replace
        $titulli = $_POST['titulli_i_filmit'];

        $titulli = str_replace('  ', ' ', $titulli);
        echo "<pre>EFEKTI I REPLACE : $titulli </pre>" . "<br>";
        //funksioni explode
        $vargu = explode(" ",$titulli);
        echo "Titulli i filmit perbehet prej ketyre fjaleve:" . "<br>";
        foreach($vargu as $fjalet){
            echo $fjalet . ", ";
        }
        echo "<br>";
        // funksioni implode()
        $titulli = implode(" ", $vargu);
        echo "Pra titulli i filmit eshte: $titulli" ;


?>
