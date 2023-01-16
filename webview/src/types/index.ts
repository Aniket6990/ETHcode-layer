interface NativeCurrencyType {
  name: string;
  symbol: string;
  decimal: string;
}

export interface NetworkConfig {
  rpc: string;
  blockScanner: string;
  chainID: string;
  nativeCurrency: NativeCurrencyType;
}

export interface EventType {
  msgType: string;
  eventType: string;
  msg: any;
}
