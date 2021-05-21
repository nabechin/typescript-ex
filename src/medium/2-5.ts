// T[number]は配列の書く要素のユニオン型をとる
type TupleToUnion<T extends any[]> = T[number];
