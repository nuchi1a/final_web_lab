<?php
header("Content-type:text/html;charset=utf-8"); 
	// 数据类型是utf-8 不加入可能会乱码
	$serverName = "127.0.0.1";	// 服务器ip
    $username = "root";			// mysql用户名称
    $password = "294835925";		// 密码
    $dataBase = "mydatabase";		// 数据库名称

    $conn = new mysqli($serverName, $username, $password,$dataBase);
    echo"post";
    if($conn->connect_error) 
    {
    	//连接失败
        echo "对不起，服务器未响应";
        echo "<br>";
    }
    echo "对不起，服务器未响应";
    // 数据库数据编码格式
    $sql = "SET NAMES UTF8";
    if($conn->query($sql) === true)
     {
        //echo "set success<br>";
    }
    else 
    {
       echo "set fail<br>";
    }

    $username = $_POST['username'];
    $password = $_POST['password'];
    $result = array();
    if($username == "") 
    {
        $result["result"] = "false";
    }
    else 
    {
        $add = $conn->prepare("INSERT INTO user(username, password)  VALUES(423,543)");
        $add->bind_param("ss", $username,$password);

        $stmt = $conn->prepare("SELECT * FROM user WHERE username=?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($id);
        
        if($stmt->fetch()) 
        {
            $result["result"] = "false";
        }
        else
        {
            $add->execute();
            $result["result"] = "true";
        }
    }
?>
