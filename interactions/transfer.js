const highlayer = require("highlayer-sdk");
const { TransactionSigner, getHighlayerCliAddress } = require("highlayer-cli");

(async () => {
  const client = new highlayer.SigningHighlayerClient({
    sequencer: "http://51.159.210.149:2880",
    signingFunction: TransactionSigner,
  });

  const transaction = new highlayer.TransactionBuilder()
    .setAddress(getHighlayerCliAddress())
    .addActions([
      highlayer.Actions.allocateGas({
        amount: 5000000,
        price: 1,
      }),
      {
        program: "hlcontract1qh8y7sc4vl3mr7nglf22mtfu5skqr7azn03spshsga0ve6cs24peqgr8xrp",
        action: "transfer",
        params: {
          receiver:"test2"
        },
      },
    ]);

  console.log(await client.signAndBroadcast(transaction));
})();
