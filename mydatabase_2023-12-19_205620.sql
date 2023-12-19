/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
DROP TABLE IF EXISTS goods;
CREATE TABLE `goods` (
  `name` varchar(200) DEFAULT NULL,
  `COLORs` varchar(32) DEFAULT NULL,
  `usething` varchar(32) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `numbers` int DEFAULT NULL,
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(32) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO goods(name,COLORs,usething,price,numbers) VALUES('\'丹麦lego75053乐高星球大战积木益智玩具\'','\'1颜色：大号\'','\'6到12岁\'','200','10'),('\'酒精\'','\'1颜色：大号\'','\'18岁以上\'','2000','10'),('\'西瓜\'','\'1颜色：大号\'','\'6到12岁\'','10','10'),('\'肾宝\'','\'1颜色：大号\'','\'6到12岁\'','200','10'),('\'手机\'','\'1颜色：大号\'','\'6到12岁\'','6300','10'),('\'电脑\'','\'1颜色：大号\'','\'6到12岁\'','10000','10'),('\'零食\'','\'1颜色：大号\'','\'6到12岁\'','2300','10'),('\'玩具\'','\'1颜色：大号\'','\'6到12岁\'','1300','10'),('\'游戏\'','\'1颜色：大号\'','\'6到12岁\'','249','10'),('\'衣服\'','\'1颜色：大号\'','\'6到12岁\'','1000','10');
INSERT INTO `user`(username,password) VALUES('\'123\'','\'123\''),('\'345\'','\'456\''),('\'Wilson\'','\'55\''),('\'Wilson\'','\'55\''),('\'John Does\'','\'123\''),('\'John Does\'','\'123\''),('\'s\'','\'a\''),('\'45323\'','\'123234\''),('\'45323\'','\'123234\'');