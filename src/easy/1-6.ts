// implement standart Exclude type
// <"aaa" | "bbb" |"ccc", "aaa"> -> "bbb" | "ccc"
type MyExclude<T, U> = T extends U ? never : T;
