type TupleToObject<T extends readonly (number|string|symbol)[]> = {
  [value in T[number]]: value
}
