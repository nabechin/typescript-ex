type Permutation<T, P = T> = [T] extends [never]
  ? []
  : T extends any
  ? [T, ...Permutation<Exclude<P, T>>]
  : T;

// [T] extends [never]がbasecaseとなっている。
// 合併型から配列を作るには[A, ...T]で良い
