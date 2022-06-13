```shell
aws iam list-roles | grep lambda-role

zip function.zip index.mjs

aws lambda create-function \
    --role arn:aws:iam::548250577290:role/lambda-role \
    --runtime "nodejs16.x" \
    --function-name run-es-module \
    --handler index.handler \
    --zip-file "fileb://function.zip"

aws lambda get-function --function-name run-es-module
```

```shell
aws lambda create-function \
    --role arn:aws:iam::548250577290:role/lambda-role \
    --function-name run-es-module \
    --package-type Image \
    --code "ImageUri=548250577290.dkr.ecr.ap-southeast-1.amazonaws.com/run-es-module:latest"

aws lambda get-function --function-name run-es-module
```

```shell
zip function.zip index.mjs

aws lambda update-function-code \
    --function-name  run-es-module \
    --zip-file fileb://function.zip
```

```shell
aws lambda update-function-configuration \
    --function-name run-es-module \
    --description "see cold start--"
```

```shell
aws lambda invoke \
    --no-cli-pager \
    --function-name run-es-module \
    response.json
cat response.json
```
