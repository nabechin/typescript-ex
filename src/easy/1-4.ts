// [1,2,3] -> 1, [] -> never
type First<T extends any[]> = T extends [] ? never : T[0];
