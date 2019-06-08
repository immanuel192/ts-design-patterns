import { ISofa } from '../../interfaces';

export class VictorianSofa implements ISofa {
  getLegs(): number {
    return 4;
  }
  sitOn(): void {
    console.log('You are sitting on Victorian Sofa');
  }
}
