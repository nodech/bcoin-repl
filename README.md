Bcoin REPL
===

Simple REPL wrapper for [bcoin][0] library, for ease of use and testing.


## Installing
```
$ npm i -g bcoin-repl
```

# Bin files

There are three tools in the package: `bcoin-repl`, `bcoin-repl-node` and `bcoin-repl-spvnode`.

:biohazard: 
**`bcoin-repl-node` and `bcoin-repl-spvnode` will give you access to running node, make sure you know what you're doing.** :biohazard: 

## bcoin-repl
Bcoin REPL will only expose the bcoin library (with node repl's autocompletion), so you can use it as a bitcoin tool. All libraries(tools) exposed by bcoin are loaded into REPL context so you can easily access them. Also you could use `bcoin` variable which contains all libraries.

```
  $ bcoin-repl
  
  bcoin> Amount.fromSatoshis(1000000).toString()
  '0.01'
```

## bcoin-repl-node
This tool will run the FullNode and behaves like `bcoin` full node itself, accepts cli args, Env variables and file configs same as `bcoin`. Once FullNode is running there will be several instances available in the context like `node`, `chain`, `mempool`, `walletdb`.. You can also use all libraries exposed by `bcoin` with `bcoin` variable.

Example:
```
$ BCOIN_NETWORK='testnet' BCOIN_LOG_LEVEL='info' ./bin/bcoin-repl-node

bcoin-node> 
// Turn off logs, you could also change env variable (or args)
bcoin-node> logger.setLevel('none');
undefined

bcoin-node> mempool.getSnapshot(); // list mempool tx hashes
[]

bcoin-node> let blockhash = bcoin.util.revHex('0000000000000dca8da883af9515dd90443d59139adbda3f9eeac1d18397fec3');
undefined
bcoin-node> chain.getBlock(blockhash).then((block) => { console.log(block); });
Promise..
{ hash: '0000000000000dca8da883af9515dd90443d59139adbda3f9eeac1d18397fec3',
  height: -1,
  size: 15099,
  ....
```

## bcoin-repl-spvnode
Spv node is same as `bcoin spv`. Difference between `bcoin-repl-node` and `bcoin-repl-spvnode` is that `mempool` and `miner` are not exposed.


[0]: https://github.com/bcoin-org/bcoin
