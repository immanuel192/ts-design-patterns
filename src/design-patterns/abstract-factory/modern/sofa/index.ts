import { ISofa } from '../../interfaces';

export class ModernSofa implements ISofa {
  getLegs(): number {
    return 2;
  }
  sitOn(): void {
    console.log('You are sitting on Modern Sofa');
  }
}
