FROM mysql:latest
run mkdir docker-mysqlscript
COPY ./mysqlscript/script.sql /docker-mysqlscript
LABEL "mysql-projeto"="mysql"
ENV MYSQL_ROOT_PASSWORD=root
EXPOSE 3002
