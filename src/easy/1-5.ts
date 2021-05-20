// ["aaa", "bbb"] as const -> 2
type Length<T extends readonly any[]> = T['length'];
