type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>;
