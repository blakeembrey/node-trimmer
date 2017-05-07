declare function trim (input: string, chars?: trim.Chars): string

declare namespace trim {
  export type Chars = string | string[] | ((char: string) => boolean)

  export function left (input: string, chars?: trim.Chars): string
  export function right (input: string, chars?: trim.Chars): string
}

export = trim
