type Flatten<T extends any[]> = T extends [infer L, ...infer R]
  ? L extends unknown[]
    ? [...Flatten<L>, ...Flatten<R>]
    : [L, ...Flatten<R>]
  : [];

// [infer L, ...infer R]でRは何を示しているのか？
// ex) [1, 2, 3, 4] -> R = [2, 3, 4]
