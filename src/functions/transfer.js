module.exports = function (transaction, changes) {
    let owner=KV.get("owner");
    ContractAssert(owner===transaction.sender,"You are not the owner to transfer NFT");
    let newOwner=transaction.params.receiver;
    ContractAssert(typeof newOwner=="string","Invalid receiver provided");
    changes.push(KV.set("owner",newOwner))
};
