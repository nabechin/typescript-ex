type Includes<T extends readonly any[], U> = T extends [infer V, ...infer W]
  ? [V] extends [U]
    ? [U] extends [V]
      ? true
      : false
    : Includes<W, U>
  : false;

//  ? [V] extends [U] ? [U] extends [V]としているのは
//  VがリテラルでUがプリミティブもしくはUがプリミティブVがリテラルを排除するため
