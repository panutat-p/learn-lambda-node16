## Guide

https://www.cloudmailin.com/blog/using-typescript-with-aws-lambda

https://docs.aws.amazon.com/lambda/latest/dg/typescript-handler.html

## Example Code

https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html

## Lambda Docker Base Image

https://docs.aws.amazon.com/lambda/latest/dg/nodejs-image.html

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
  --role-name lambda-role \
  --assume-role-policy-document file://trust-policy.json

aws iam attach-role-policy \
  --role-name lambda-role \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
```
