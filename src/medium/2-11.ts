// extendsの後はリテラル型でもよい
// 大きい問題があれば小さくしてみる
// 例えば、この問題のように、文字列の前に色々取り除きたいものがあったりするとき
// 一気に取り除こうとしない

type ExcludeType = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${ExcludeType}${infer R}`
  ? TrimLeft<R>
  : S;
