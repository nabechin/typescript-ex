type ReplaceAll<S extends string, From extends string, To extends string> =
  S extends `${From}${infer U}${infer V}`
    ? S extends `${infer U}${From}${infer V}`
      ? S extends `${infer U}${infer V}${From}`
        ? ReplaceAll<`${infer U}${infer V}${To}`, From, To>
        : ReplaceAll<`${infer U}${To}${infer V}`, From, To>
      : ReplaceAll<`${To}${infer U}${infer V}`, From, To>
    : S;
