// type First<T extends any[]> = T['length'] extends 0 ? never:T[0]
type First<T extends any[]> = T[number] extends never ? never:T[0]