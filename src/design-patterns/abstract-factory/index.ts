import { IFurnitureFactory } from './interfaces';
import { ModernFactory } from './modern';
import { VictorianFactory } from './victorian';

enum EFactoryType {
  Victorian = 0,
  Modern = 1
}

class FurnitureFactory {
  constructor(private readonly factory: IFurnitureFactory) { }

  transaction() {
    const sofa = this.factory.createSofa();
    console.log(`The chair sofa has ${sofa.getLegs()} legs`);
    sofa.sitOn();
  }
}

function buildShop(type: EFactoryType) {
  let factory: FurnitureFactory;

  switch (+type) {
    case EFactoryType.Modern:
      factory = new FurnitureFactory(new ModernFactory());
      break;
    case EFactoryType.Victorian:
      factory = new FurnitureFactory(new VictorianFactory());
      break;
  }
  return factory;
}

const shop = buildShop(EFactoryType.Modern);
shop.transaction();
