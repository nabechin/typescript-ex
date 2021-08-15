type Awaited<T> = T extends Promise<infer R> ? R : Error;
