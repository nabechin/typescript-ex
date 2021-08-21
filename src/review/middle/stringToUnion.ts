type StringToUnion<T extends string, P extends unknown[] = []> = T extends ''
  ? P[number]
  : T extends `${infer L}${infer R}`
  ? StringToUnion<R, [L, ...P]>
  : [];
