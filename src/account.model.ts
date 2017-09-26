export type currency = "USD" | "ARS";

export interface Account{
    number: string;
    owner: string;
    coowner?: string;
    investements:Investment[];
}

export interface Investment {
		fund: string;
		amount: number;
		currency: currency|string;
}

