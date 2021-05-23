// オブジェクトのプロパティの値を評価したいとき、U extends {propaty: value}で条件式を立てる.
// 例えば、2つの目のジェネリクスパラメータが'dog'のとき、
// {"dog": Dog}["dog"]
// {property: value}[key]の形は、propertyとkeyの値が合致するvalueを取得する。
type LookUp<U extends Animal, T extends string> = {
  [K in T]: U extends { type: T } ? U : never;
}[T];
