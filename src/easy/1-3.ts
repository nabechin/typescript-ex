// ["aaa", "bbb"] -> {"aaa": "aaa", "bbb": "bbb"}
type TupleToObject<T extends readonly any[]> = { [P in T[number]]: P };
