import {
  InvocationType,
  InvokeCommand,
  LambdaClient,
  LogType,
} from '@aws-sdk/client-lambda';
import { decode } from 'base-64';

const client = new LambdaClient({ region: 'ap-southeast-1' });

const command = new InvokeCommand({
  FunctionName: 'run-es-module',
  InvocationType: InvocationType.RequestResponse,
  LogType: LogType.Tail,
});

(async () => {
  try {
    const data = await client.send(command);
    console.log(data.StatusCode);
    if (data.LogResult != null) {
      console.log(`\n${decode(data.LogResult)}`);
    }
    console.log(new TextDecoder('utf-8').decode(data.Payload));
  } catch (e) {
    console.log(e);
  }
})();
