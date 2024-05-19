import resStatus from '../configs/resStatus.config';

class APIError extends Error {
  readonly status: number;
  readonly subCode?: number;

  constructor(statusCode: resStatus, msg: string, subCode?: number) {
    super(msg);
    this.status = statusCode;
    this.subCode = subCode;
  }
}

export default APIError;
