declare function PromiseAll<T extends any[]>(
  values: Readonly<T>
): Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>;
