export interface IClient {
    id: string;
    firstName: string;
    lastName?: string;
    phone: string;
    address?: string;
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
export interface ISelectClient {
    id: string;
    name: string;
}

export interface IAddClient {
    firstName: string;
    lastName?: string;
    phone: string;
    address?: string;
}
