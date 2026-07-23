export interface ITeam {
  id: string;
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

export interface IAddTeam {
  name: string;
  narration?: string;
  teamLeaderId: string;
}
