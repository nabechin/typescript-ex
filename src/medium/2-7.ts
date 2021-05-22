// 配列の最後の要素を返却する
// 1. スプレッド構文を使って、元の配列 = [...最後尾の要素を除いた配列, 最後の要素]の等式を作成.
// 2. inferを使い、ジェネリクスパラメータに割り当てる配列に応じて要素の型を推論させてconditional typeで取得.
type Last<T extends any[]> = T extends [...any, infer U] ? U : never;
