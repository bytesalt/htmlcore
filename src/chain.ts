module.exports = {
  BTC: {
    lib: require('htmlcore-lib'),
    p2p: require('htmlcore-p2p'),
  },
  BCH: {
    lib: require('htmlcore-lib-cash'),
    p2p: require('htmlcore-p2p-cash'),
  },
}
