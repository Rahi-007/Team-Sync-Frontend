import { BusinessUnit, ProjectStatus, SubType, WorkType } from "@/config/enum";

export interface IProject {
    id: number;
    name: string;
    businessUnit: BusinessUnit;
    client: {
        id: number;
        name: string;
    };
    briefCode: string;
    workType: WorkType;
    subType: SubType;
    quantity: number;
    submitDate: Date;
    submitCode: string;
    status: ProjectStatus;
    assign: {
        id: number;
        name: string;
    }
    link?: string;
    createdAt: Date;
    updatedAt?: Date;
    createdBy: {
        id: number;
        name: string;
    };
    updatedABy?: {
        id: number;
        name: string;
    };
}

export interface IAddProject {
    name: string;
    businessUnit: BusinessUnit;
    client: number;
    briefCode: string;
    workType: WorkType;
    subType: SubType;
    quantity: number;
    submitDate: Date;
    submitCode: string;
    status: ProjectStatus;
    assign: number;
    link?: string;
}
