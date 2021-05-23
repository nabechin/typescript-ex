// [1,2,3] -> [1,2]
type Pop<T extends any[]> = T extends [...infer U, any] ? U : never;
