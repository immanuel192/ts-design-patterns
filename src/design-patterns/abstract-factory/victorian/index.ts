import { IFurnitureFactory } from '../interfaces';
import { VictorianChair } from './chairs';
import { VictorianSofa } from './sofa';

export class VictorianFactory implements IFurnitureFactory {
  createChair() {
    return new VictorianChair();
  }
  createSofa() {
    return new VictorianSofa();
  }

}
