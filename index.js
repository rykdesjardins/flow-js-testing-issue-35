import { emulator, init, getScriptCode, executeScript } from 'flow-js-testing';

import { UInt64 } from '@onflow/types';

async function main() {
    await init(".")
    await emulator.start();

    try {
        const scriptCode = await getScriptCode({ name : "getRootStruct", addressMap: { "RootContract" : "f8d6e0586b0a20c7" } });
        const scriptResult = await executeScript({ code : scriptCode, args: [] });

        console.log(scriptResult);
    } catch (err) {
        console.error(err);
    }

    await emulator.stop();
}

main();
