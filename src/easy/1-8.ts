// If<true, "aaa", "bbb"> -> "aaa"
type If<C extends boolean, T, F> = C extends true ? T : F;
