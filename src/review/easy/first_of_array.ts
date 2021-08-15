type First<T extends any[]> = T[number] extends never ? never : T[0];
// T[number]でTが空のリストの時はneverに変わる

type AnotherFirst<T extends any[]> = T extends [infer R, ...unknown[]]
  ? R
  : never;

// [infer R, ...unknown[]]少なくとも一つの要素があるかどうか判定できる
