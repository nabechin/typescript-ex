type FalseType = 0 | '' | false | [] | Record<string, never>;

type AnyOf<T extends readonly any[]> = T[number] extends FalseType
  ? false
  : true;
