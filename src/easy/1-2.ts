type MyReadonly<T> = { [key in keyof T]: T[key] };
