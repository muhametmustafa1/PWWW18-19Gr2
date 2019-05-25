
 <?php
        //det 5 te behet insertimi i shenimeve te studentit permes nje forme ne HTML
    if(isset($_POST['butoni2'])){
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
            $username = addslashes($_POST['username2']);
            $password = addslashes($_POST['password2']);
        }
        else{
            $username = $_POST['username2'];
            $password = $_POST['password2'];
        }
        
        //Perdorimi i metodave printf dhe trim
        echo "<pre>Username i dhene eshte:" . $username . "<br> </pre>" ;
        $sp=printf("[%8s]<br>",$username);
        echo trim($username, " ");

        //regjistrimi i perdoruesve ne databaze
         $sql = "INSERT INTO perdoruesit(username, password)"
        . " VALUES('$username', '$password')";
        $retval = mysqli_query($con, $sql);
        if(!$retval){
          die('Lidhja nuk mund te realizohet'. mysqli_connect_error());
        }

        echo "<h1>Jeni regjistruar me sukses</h1>";


         mysqli_close($con);
    }
    ?>