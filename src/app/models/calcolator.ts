import { TypeCalc } from './enums/typeCalculator.model';
//si crea un file ts chiamato nomeClasse.model.ts

export class CalcolatorType {
  constructor(
    public typeName: TypeCalc,
    public url: string,
    public icon: string,
    public isOn: boolean
    ){}
}
