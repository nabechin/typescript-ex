type Merge<T> = { [K in keyof T]: T[K] };

type AppendToObject<T, U extends string, V> = Merge<T & { [K in U]: V }>;

// Mergeにしている理由は&を消すためなのかな？
