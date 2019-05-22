<?php
        $titulli = $_GET["titulli_i_filmit"];
        //replace
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
