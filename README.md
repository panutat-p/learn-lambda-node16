## Guide

https://www.cloudmailin.com/blog/using-typescript-with-aws-lambda

https://docs.aws.amazon.com/lambda/latest/dg/typescript-handler.html

## Example Code

https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html

## Lambda Docker Base Image

https://docs.aws.amazon.com/lambda/latest/dg/nodejs-image.html

## TypeScript

### Deploy TypeScript code using aws-cli and es-build

https://docs.aws.amazon.com/lambda/latest/dg/typescript-package.html#aws-cli-ts

```shell
npm install -D esbuild
npm i @aws-sdk/client-s3
npm i @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb
npm i @aws-sdk/client-lambda
npm i -D @types/aws-lambda
npm i base-64
npm i -D @types/base-64
```

```shell
aws iam create-role \
  --role-name typescript-role \
  --assume-role-policy-document file://trust-policy.json

aws iam attach-role-policy \
  --role-name typescript-role \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

aws iam list-roles | grep typescript-role

zip function.zip index.mjs

aws typescript create-function \
    --function-name run-es-module \
    --runtime nodejs16.x \
    --zip-file fileb://function.zip \
    --handler index.handler \
    --role arn:aws:iam::548250577290:role/typescript-role

aws typescript get-function --function-name  run-es-module

zip function.zip index.mjs

aws typescript update-function-code \
    --function-name  run-es-module \
    --zip-file fileb://function.zip \

aws typescript invoke \
    --no-cli-pager \
    --function-name run-es-module \
    response.json
cat response.json

aws typescript update-function-configuration \
    --function-name run-es-module \
    --description "see cold start--"
```

## Invoke Lambda using SDK

https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lambda/classes/invokecommand.html

https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lambda/interfaces/invokecommandinput.html
