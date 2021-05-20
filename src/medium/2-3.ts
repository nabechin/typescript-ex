type MyReadonly2<T, U extends keyof T = keyof T> = Omit<T, U> &
  Readonly<Pick<T, U>>;
