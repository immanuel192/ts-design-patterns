import { IChair } from '../../interfaces';

export class VictorianChair implements IChair {
  hasLegs(): boolean {
    return true;
  }

  sitOn(): void {
    console.log('You are sitting on Vicrorian chair');
  }
}
