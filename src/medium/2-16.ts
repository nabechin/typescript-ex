//可変超引数は(...arge: any[])という型で定義される
//引数の型をinferを使ってキャプチャして起き、その引数にAの型を追加するために[...R, A]を定義する

type AppendArgument<Fn, A> = Fn extends (...param: infer R) => infer T
  ? (...param: [...R, A]) => T
  : never;
