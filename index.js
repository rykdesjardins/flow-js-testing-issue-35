import { emulator, init, getScriptCode, executeScript, deployContractByName, getAccountAddress } from 'flow-js-testing';

async function main() {
    await init(".")
    console.log("-------------------")
    console.log("SETUP")
    console.log("✅ Project folder initialized");
    await emulator.start();
    console.log("✅ Emulator is waiting for communication");
    console.log("-------------------\n")

    console.log("DEPLOYMENT")
    console.log(`Deploy "RootContract" to new account`);

    // Since we want to use structure from deployed contract, we need to deploy it first :)
    // We will create new account, which will hold the contract, and store returned value in RootContract variable
    // so it will be easier to use it in addressMap later down the line
    const RootContract = await getAccountAddress("RootContract");
    // Then we deploy contract using it's name - "RootContract" - and specify address where it shall be deployed
    await deployContractByName({ name: "RootContract", to: RootContract });

    console.log("✅ Deployment complete!");
    console.log("-------------------\n")

    try {
        // We use RootContract we created early for addressMap
        const name = "getRootStruct"
        const addressMap = { RootContract };

        // Since now contract is deployed we can execute our script.
        // Since we don't pass any arguments - we can omit their definition
        const code = await getScriptCode({ name, addressMap });
        const scriptResult = await executeScript({ code });

        // There is a new API since v0.1.10, which makes this a one liner
        const newApiResult = await executeScript({ name, addressMap });

        console.log("EXECUTE")
        console.log(`✅ Script executed successfully!`);
        console.log(scriptResult);
        console.log(newApiResult);
        console.log("-------------------\n")

    } catch (err) {
        console.error(err);
    }

    await emulator.stop();
    console.log("TEARDOWN")
    console.log("✅ Emulator stopped.");
}

main();
