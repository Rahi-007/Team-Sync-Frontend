export interface ITeam {
  id: number;
  name: string;
  narration?: string;
  members: {
    id: string;
    name: string;
  }[];
  teamLeader: {
    id: string;
    name: string;
  };
  createdAt: Date;
  updatedAt?: Date;
  createdBy: {
    id: string;
    name: string;
  };
  updatedBy?: {
    id: string;
    name: string;
  };
}
export interface ISelectTeam {
  id: number;
  name: string;
}

export interface IAddTeam {
  name: string;
  narration?: string;
  teamLeaderId: string;
}
