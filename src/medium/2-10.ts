type LookUp<U extends Animal, T extends string> = {
  [K in T]: U extends { type: T } ? U : never;
}[T];
