class LibProvider {
  libs = {
    BTC: {
      lib: require('htmlcore-lib'),
      p2p: require('htmlcore-p2p')
    }
  };

  register(chain: string, lib: string, p2p: string) {
    this.libs[chain] = { lib: require(lib), p2p: require(p2p) };
  }

  get(chain) {
    return this.libs[chain];
  }
}

export const Libs = new LibProvider();
