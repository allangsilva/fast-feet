run-database:
	docker start mysql

run-database-image:
	docker run --name mysql -e MYSQL_ROOT_PASSWORD=docker -p3306:3306 -d mysql:5.7
