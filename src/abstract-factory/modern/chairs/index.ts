import { IChair } from '../../interfaces';

export class ModernChair implements IChair {
  hasLegs(): boolean {
    return false;
  }

  sitOn(): void {
    console.log('You are sitting on Modern chair');
  }
}
