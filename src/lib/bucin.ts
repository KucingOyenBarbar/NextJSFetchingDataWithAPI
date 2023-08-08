// bucin.ts
export interface BucinInterface {
  name: string,
  age: number,
  isBucin?: boolean,
  missYou(miss: boolean): void
}

export default class Bucin implements BucinInterface {
  public name: string
  public readonly age: number
  public isBucin: boolean

  constructor(name: string, age: number, isBucin = false)
  { this.name = name, this.age = age, this.isBucin = isBucin }
  
  missYou(miss: boolean): void {
    miss
      ? console.log(`I miss you🥺`)
      : null
  }
}

const bucin: Bucin = new Bucin('Farhan', 21)
bucin.isBucin = true
bucin.missYou(bucin.isBucin)