type ReplaceKeys<U, T extends string | number | symbol, Y extends object> =
  U extends any
    ? {
        [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
      }
    : never;
