type TrimLeft<S extends string> = S extends `${infer L}${infer R}`
  ? L extends TrimType
    ? TrimLeft<R>
    : S
  : S;
