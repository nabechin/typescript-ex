type CamelCase<S> = S extends `${infer L}-${infer M}${infer R}`
  ? M extends '-'
    ? `${L}-${CamelCase<`-${R}`>}`
    : M extends Uppercase<M>
    ? `${L}-${M}${CamelCase<R>}`
    : `${L}${Uppercase<M>}${CamelCase<R>}`
  : S;
