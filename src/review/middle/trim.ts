type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer rest}`
  ? Trim<rest>
  : S extends `${infer rest}${' ' | '\n' | '\t'}`
  ? Trim<rest>
  : S;
