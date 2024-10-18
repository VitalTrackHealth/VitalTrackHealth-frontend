up:
	docker run -d -p 80:80 --name app app:dev

down:
	docker stop app
	docker rm app

build:
	docker build -t app:dev .

