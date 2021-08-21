type ValidNumber = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
type Absolute<T extends number | string | bigint> =
  `${T}` extends `${infer L}${infer R}`
    ? L extends ValidNumber
      ? `${L}${Absolute<R>}`
      : `${Absolute<R>}`
    : '';
