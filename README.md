## Guide
https://www.cloudmailin.com/blog/using-typescript-with-aws-lambda

https://docs.aws.amazon.com/lambda/latest/dg/typescript-handler.html

## Example Code
https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html

## Lambda Docker Base Image
https://docs.aws.amazon.com/lambda/latest/dg/nodejs-image.html

## open-source definition
```shell
npm install -D @types/aws-lambda
npm install -D esbuild
npm i @aws-sdk/client-s3
npm i @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb
npm i @aws-sdk/client-lambda
```

```shell
aws iam create-role \
  --role-name lambda-role \
  --assume-role-policy-document file://trust-policy.json

aws iam attach-role-policy \
  --role-name lambda-role \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

aws iam list-roles | grep lambda-role

zip function.zip index.mjs

aws lambda create-function \
    --function-name run-es-module \
    --runtime nodejs16.x \
    --zip-file fileb://function.zip \
    --handler index.handler \
    --role arn:aws:iam::548250577290:role/lambda-role
    
aws lambda get-function --function-name  run-es-module

zip function.zip index.mjs

aws lambda update-function-code \
    --function-name  run-es-module \
    --zip-file fileb://function.zip \

aws lambda invoke \
    --no-cli-pager \
    --function-name run-es-module \
    response.json
cat response.json
```

## Invoke Lambda using SDK
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lambda/classes/invokecommand.html

https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lambda/interfaces/invokecommandinput.html