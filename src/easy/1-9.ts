// それぞれの配列をスプレッド構文を使い分解し、まとめる。
type Concat<T extends Array<any>, U extends Array<any>> = [...T, ...U];
