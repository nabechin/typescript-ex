type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
type MyExclude<T, K> = T extends K ? never : T;

type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>;
