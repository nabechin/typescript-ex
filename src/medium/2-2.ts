// Omitの型定義
type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>;
