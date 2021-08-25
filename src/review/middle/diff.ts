type Marge<T> = { [K in keyof T]: T[K] };
type Diff<O, O1> = Marge<
  Pick<O, Exclude<keyof O, keyof O1>> & Pick<O1, Exclude<keyof O1, keyof O>>
>;
