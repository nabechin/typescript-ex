//objectTにプロパティU, 値Vを乗せた新規オブジェクトを作成する。
type AppendToObject<T, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};
