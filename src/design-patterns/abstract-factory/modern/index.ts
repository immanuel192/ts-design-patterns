import { IFurnitureFactory } from '../interfaces';
import { ModernChair } from './chairs';
import { ModernSofa } from './sofa';

export class ModernFactory implements IFurnitureFactory {
  createChair() {
    return new ModernChair();
  }
  createSofa() {
    return new ModernSofa();
  }

}
