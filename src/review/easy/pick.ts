type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

// PはMapped Typeの引数型
// KはMapped Typeの制約型 string|number|symbolの部分型である必要がある。Kが合併型の時は、各要素のシグネチャが生成される。
// T[P]はtemplate型
