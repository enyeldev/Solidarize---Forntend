export type Response<T> = {
  code: number;
  messages: string;
  succesess: boolean;
  data: T;
};

export type DonationDto = {
  id: number;
  amount: number;
  date: string;
  donorId: number;
  seasonId: number;
};

export type DonorDto = {
  id: number;
  name: string;
  email: string;
  phone: string;
  addres: string;
};

export type AddDonorRequest = Omit<DonorDto, 'id'>;

export type ReportDto = {
  generateDate: string;
  totalDonated: number;
  reportName: string;
  totalDonors: number;
};

export type SeasonDto = {
  id: number;
  name: string;
  description: string;
  goal: number;
  initialDate: string;
  endDate: string;
};
