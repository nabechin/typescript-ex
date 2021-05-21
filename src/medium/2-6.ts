// オブジェクトの初期化はジェネリクスで定義されたTにデフォルト値を与える。
// objectの更新を<T & { [U in K]: V }>で実現している。
// Chainable型にobjectの型を保持させる手段としては、保持させるobjectをすでに与えたChainableを返す。
// [P in K]: V
// Kはstringに割り当て可能であれば良い

type Chainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<T & { [U in K]: V }>;
  get(): T;
};
