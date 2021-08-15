type TupleToObject<T extends readonly any[]> = { [K in T[number]]: K };
// T[name of tuple]でtupleのunion型を得る
