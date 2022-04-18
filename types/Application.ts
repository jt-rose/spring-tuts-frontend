export interface ApplicationInput {
  companyName: string;
  position: string;
  appliedOn: Date;
  website: string;
  interview: boolean;
  notes: string;
}

export interface ApplicationData extends ApplicationInput {
  id: number;
}
