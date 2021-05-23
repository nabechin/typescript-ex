type Replace<S extends string, From extends string, To extends string> =
  From extends ''
    ? S
    : S extends `${infer T}${From}`
    ? S extends `${From}${infer T}`
      ? `${T}${To}`
      : `${To}${T}`
    : never;
