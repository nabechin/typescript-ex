type LengthOfString<S extends string, A extends any[] = []> = S extends ''
  ? A['length']
  : S extends `${infer L}${infer R}`
  ? LengthOfString<R, [...A, L]>
  : never;
