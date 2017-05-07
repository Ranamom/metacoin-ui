var meta;
$(function(){
  var acc0 = web3.eth.accounts[0],
      acc1 = web3.eth.accounts[1],
      acc2 = web3.eth.accounts[2];

  var metaAbi = [{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}];
  var metaAddress = "0x58c2360e5d3258a1c85038f4258821d3c8d083c1";
  meta = web3.eth.contract(metaAbi).at(metaAddress);

  function getBalance() {
    console.log(meta.getBalance.call(web3.eth.accounts[0]).toNumber());
  }

  $("button").click(getBalance);
});
