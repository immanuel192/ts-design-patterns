import { LogisticBase, ITransport } from './interfaces';

export class LandLogistic extends LogisticBase {
  createTransport() {
    return new TruckTransport();
  }
}

class TruckTransport implements ITransport {
  plan(): void {
    console.log('You are using truck transport');
  }
}
