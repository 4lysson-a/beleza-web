<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Página de confirmação</title>
</head>
<body>
        <?php
                $email = $_POST['email'];
                $senha = $_POST['senha'];
                $c = 0;
                if($email==""){
                    $c = c+1;
                    echo "Você tem: $c Campo(s) obrigatório(s) não preenchido(s)";
                }if($senha==""){ 
                        c = c+1;                
                        echo "Você tem: $c Campo(s) obrigatório(s) não preencido(s)";
                    }
                else{
                    print "login aprovado";
                }
        ?>
</body>
</html>