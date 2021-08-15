type Length<T extends any> = T extends readonly unknown[] ? T['length'] : Error;
// typeof Array["length"]で要素数を得ることができる
