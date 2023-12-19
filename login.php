<?php
// 连接到数据库
$servername = "localhost";
$username = "sfydb_6594880s";
$password = "Qq294835925";
$dbname = "sfydb_6594880";
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接是否成功
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

// 处理登录请求
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
    	$_SESSION['username'] = $username;
        echo "登录成功！";
    } else {
        echo "用户名或密码错误！";
    }
}

// 关闭数据库连接
$conn->close();
?>
