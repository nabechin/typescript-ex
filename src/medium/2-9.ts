// readonlyはarray or object
// mappedtypeとconditionaltypeは併用可能
// [P in T] P extends string? P : never
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K] }>;

// arrayをsecond_arrayに複製する.
const array = [1, 2, 3];
const second_array = [...array];
console.log(second_array);
