export interface ITransport {
  plan(): void;
}

export abstract class LogisticBase {
  private transport: ITransport;

  planDelivery() {
    if (!this.transport) {
      this.transport = this.createTransport();
    }
    this.transport.plan();
  }
  protected abstract createTransport(): ITransport;
}
