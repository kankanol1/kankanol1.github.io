<?php

        header('Content-Type: application/json');
        header('Content-Type: text/html;charset=utf-8');
        $name = $_GET['name'];
        $company = $_GET['company'];
        $email = $_GET['email'];
        $phone = $_GET['phone'];
        $text = $_GET['text'];


        //设置数据库权限
        $dbhost = 'localhost:3306';
        $dbuser = 'root';
        $dbpass = '';
        $database ="test";



        //echo "建立连接";
        $conn = new mysqli($dbhost, $dbuser, $dbpass,$database);
        //mysql_query("set names gb2312");

        if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
        }


        //定义类
        class Pdata{
        var $id;
        var $name;
        var $company;
        var $email;
        var $phone;
        var $text;
        function Pdata($id,$name,$company,$email,$phone,$text){
        $this->id = $id;
        $this->name = $name;
        $this->company = $company;
        $this->email= $email;
        $this->phone= $phone;
        $this->text= $text;
        }
        }

        $dataC = array();

        $sql = "SELECT * FROM info ";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
        $flag = $result->num_rows;
        while($row = $result->fetch_assoc()) {
        $item = new Pdata( $row["id"], $row["name"], $row["company"], $row["email"], $row["phone"], $row["text"]);
        array_push($dataC ,$item);
        }
        }



        //插入数据

        $sql = "INSERT INTO info (id,name,company,email,phone,text) VALUES ('$flag','$name', '$company','$email','$phone','$text')";
        $result = $conn->query($sql);

        

        $response = array("msg"=> '连接成功',"data" => $dataC,"insert"=>$result);
        header('Content-Type: text/json');
        echo json_encode($response);
        mysqli_close($conn);

        ?>











