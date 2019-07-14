export interface IChair {
  hasLegs(): boolean;
  sitOn(): void;
}

export interface ISofa {
  getLegs(): number;
  sitOn(): void;
}

export interface IFurnitureFactory {
  createChair(): IChair;
  createSofa(): ISofa;
}
