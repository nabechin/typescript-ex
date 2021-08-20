type Replace<S extends string, From extends string, To extends string> =
  From extends ''
    ? S
    : S extends `${infer R}${From}${infer U}`
    ? `${R}${To}${U}`
    : S;
