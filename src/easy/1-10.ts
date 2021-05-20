// T[number]は各要素の型をユニオンで取得
// [1,2,"aaa"] -> 1 | 2 | "aaa"
type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;
