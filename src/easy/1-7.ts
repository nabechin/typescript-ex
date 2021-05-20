// inferキーワードTがPromise<T>に合致したときに、Promiseのジェネリクスが
// 型推論される。
type Awaited<T> = T extends Promise<infer T> ? T : never;
