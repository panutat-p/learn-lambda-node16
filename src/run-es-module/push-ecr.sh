ls -la Dockerfile
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 548250577290.dkr.ecr.ap-southeast-1.amazonaws.com
docker build -t run-es-module .
docker tag run-es-module:latest 548250577290.dkr.ecr.ap-southeast-1.amazonaws.com/run-es-module:latest
docker push 548250577290.dkr.ecr.ap-southeast-1.amazonaws.com/run-es-module:latest
