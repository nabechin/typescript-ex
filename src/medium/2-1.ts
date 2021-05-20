// ReturnType型。inferは型の中に定義されている動的に変化する型をキャプチャする.
type MyReturnType<T> = T extends (...args: any[]) => infer U ? U : never;
