export interface ResStudent {
  id: number;
  fullName: string;
  createdAt: string;
}

export interface ReqPostStudent {
  familyName: string;
  givenName: string;
}

export interface ReqPutStudent {
  familyName: string;
  givenName: string;
}
