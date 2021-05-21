// ネストされたオブジェクトはDeepReadonly<T[U]>で再帰的に型付されていく。
// keyof T extends neverは再帰のベースを設定し、永遠にループすることを防いでいる。
type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [U in keyof T]: DeepReadonly<T[U]> };
