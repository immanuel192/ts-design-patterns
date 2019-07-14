import { LogisticBase, ITransport } from './interfaces';
export class SeaLogistic extends LogisticBase {
  createTransport() {
    return new BoatTransport();
  }
}

class BoatTransport implements ITransport {
  plan(): void {
    console.log('You are using boat transport');
  }
}
