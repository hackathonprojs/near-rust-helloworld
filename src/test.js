describe('Token', function () {
  let near;
  let contract;
  let accountId;

  beforeAll(async function () {
    console.log('nearConfig', nearConfig);
    near = await nearlib.connect(nearConfig);
    accountId = nearConfig.contractName;
    contract = await near.loadContract(nearConfig.contractName, {
      viewMethods: ['get_helloworld'],
      changeMethods: [],
      sender: accountId
    });
  });

  describe('counter', function () {
    it('can get_helloworld', async function () {
      const result = await contract.get_helloworld({"message":"gameofstake.testnet"});

      expect(result).toEqual("hello world, gameofstake.testnet");
    });
  });
});