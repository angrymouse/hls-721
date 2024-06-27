const highlayer = require("highlayer-sdk");
const { TransactionSigner, getHighlayerCliAddress } = require("highlayer-cli");

(async () => {
  const client = new highlayer.SigningHighlayerClient({
    sequencer: "http://51.159.210.149:2880",
    node:"http://51.159.210.149:3000",
    signingFunction: TransactionSigner,
  });
  const ContractKV=client.KV({node:"http://51.159.210.149:3000",contractId:"hlcontract1qh8y7sc4vl3mr7nglf22mtfu5skqr7azn03spshsga0ve6cs24peqgr8xrp"});
  console.log(await ContractKV.get("owner"));
})();
