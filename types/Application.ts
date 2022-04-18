export interface ApplicationInput {
  companyName: string;
  appliedOn: Date;
  website: string;
  interview: boolean;
  notes: string;
}

export interface ApplicationData extends ApplicationInput {
  id: number;
}
