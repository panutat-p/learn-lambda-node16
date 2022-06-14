https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-create-from-base

```shell
docker build -t run-es-module .   
docker run -p 9000:8080 run-es-module
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```
