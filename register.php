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

// 处理注册请求
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "注册成功！";
    } else {
        echo "注册失败: " . $conn->error;
    }
}

// 关闭数据库连接
$conn->close();
?>
