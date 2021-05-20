// = keyof Tは2つのめgenericsが与えられなかったときに備えて、default値を設定している
type MyReadonly2<T, U extends keyof T = keyof T> = Omit<T, U> &
  Readonly<Pick<T, U>>;
