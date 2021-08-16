type MyReadonly2<T, K extends keyof T = keyof T> = { readonly [U in K]: T[U] } &
  { [P in Exclude<keyof T, K>]: T[P] };
