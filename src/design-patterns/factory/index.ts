import { LandLogistic } from './land-logistic';
import { LogisticBase } from './interfaces';
import { SeaLogistic } from './sea-logistic';

enum ELogistic {
  Land = 0,
  Sea = 1
}

function getLogisticInstance(type: ELogistic): LogisticBase {
  if (type === ELogistic.Land) {
    return new LandLogistic();
  }
  if (type === ELogistic.Sea) {
    return new SeaLogistic();
  }
  return null;
}

const logistic = getLogisticInstance(ELogistic.Land);
logistic.planDelivery();
