type ExcludeType = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends
  | `${ExcludeType}${infer R}`
  | `${infer R}${ExcludeType}`
  ? Trim<R>
  : S;
