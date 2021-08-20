type Chainable<P = {}> = {
  option<K extends string, T>(key: K, value: T): Chainable<P & { [U in K]: T }>;
  get(): P;
};

// オブジェクトの合併は&
