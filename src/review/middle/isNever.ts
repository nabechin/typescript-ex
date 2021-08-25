type IsNever<T> = [T] extends [never] ? true : false;

// never extends Aはneverと評価される
// なので[never] extends [never]としてunion distributionを防いでいる
