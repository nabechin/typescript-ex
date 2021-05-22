type Last<T extends any[]> = T extends [...any, infer T] ? T : never;
