### Deploy TypeScript code using aws-cli and es-build

https://docs.aws.amazon.com/lambda/latest/dg/typescript-package.html#aws-cli-ts

```shell
npm run build

aws lambda create-function \
    --role arn:aws:iam::548250577290:role/lambda-role \
    --runtime "nodejs16.x" \
    --function-name hello-world-ts \
    --handler index.handler \
    --zip-file "fileb://dist/index.zip"

aws lambda get-function --function-name hello-world-ts
```

```shell
npm run build

aws lambda update-function-configuration \
    --function-name hello-world-ts \
    --description "see cold start--"
```

```shell
aws lambda invoke \
    --no-cli-pager \
    --function-name hello-world-ts \
    response.json
cat response.json
```
