type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Record<string, unknown>
    ? DeepReadonly<T[K]>
    : T[K];
};
