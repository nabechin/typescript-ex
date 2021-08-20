type LookUp<U extends Animal, T> = U extends { type: T } ? U : never;
// conditional typeの分配を利用
