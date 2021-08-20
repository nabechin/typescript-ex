type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer S
  ? (...args: [...R, A]) => S
  : never;

// ...argsは引数の値の数はいくつでも良い
// ただ、引数の型を追加する必要があるため、[...R, A]としている
