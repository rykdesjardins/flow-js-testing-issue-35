# flow-js-testing-issue-35

A tiny example to help debug [issue #35](https://github.com/onflow/flow-js-testing/issues/35) of the [flow-js-testing](https://github.com/onflow/flow-js-testing) repo. 

## Run it
It's a simple NodeJS project. You will need to install the dependencies first.

1. `npm i`
2. `npm start`

You should get the following error message : 

```
Error: failed to encode value: unsupported value: <nil>, <nil>
    at Object.onEnd (/home/ryk/dev/flow-js-testing-issue-35/node_modules/@onflow/sdk/dist/sdk.js:1:11028)
    at /home/ryk/dev/flow-js-testing-issue-35/node_modules/@improbable-eng/grpc-web/dist/grpc-web-client.js:1:24140
    at /home/ryk/dev/flow-js-testing-issue-35/node_modules/@improbable-eng/grpc-web/dist/grpc-web-client.js:1:11457
    at Array.forEach (<anonymous>)
    at e.rawOnError (/home/ryk/dev/flow-js-testing-issue-35/node_modules/@improbable-eng/grpc-web/dist/grpc-web-client.js:1:11419)
    at e.onTransportHeaders (/home/ryk/dev/flow-js-testing-issue-35/node_modules/@improbable-eng/grpc-web/dist/grpc-web-client.js:1:8996)
    at NodeHttp.responseCallback (/home/ryk/dev/flow-js-testing-issue-35/node_modules/@improbable-eng/grpc-web-node-http-transport/lib/index.js:31:22)
    at Object.onceWrapper (events.js:422:26)
    at ClientRequest.emit (events.js:315:20)
    at HTTPParser.parserOnIncomingClient (_http_client.js:641:27)
```
