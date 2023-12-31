import { CategoryEntity } from "../services/category.interface";
import { DebtsInstitution } from "../services/debts.interface";
import { FinanceBalance, FinancesBalanceEntity } from "../services/finance.interface";
import { WalletEntity } from "../services/wallet.interface";

export interface FinanceDetailsProps {
    financeType: "INCOME" | "EXPENSE" | undefined;
    setCategory(category?: CategoryEntity): void;
    category: CategoryEntity | undefined;
    setPaidDate(paidAt: string): void;
    paidDate: string | undefined;
    setDescription(description: string): void;
    description: string | undefined;
    setIsPaid(isPaid: boolean): void;
    isPaid: boolean | undefined;
    setBill(bill?: DebtsInstitution): void;
    bill: DebtsInstitution | undefined;
}

export interface FinancesContextData {
    filteredMonth: string;
    filteredYear: string;
    setFilteredMonth(filteredMonth: string): void;
    setFilteredYear(filteredYear: string): void;
    getFinancesBalance: () => Promise<FinanceBalance | undefined>;
    finances: FinanceBalance | undefined;
    deleteFinance(id: number): Promise<void>
}

export type ParamRoute = {
    Detail: {
        event: 'INCOME' | 'EXPENSE';
        finance?: FinancesBalanceEntity
    };
}

export interface FinanceForms {
    money: string | undefined;
    paidDate: string | undefined;
    title: string | undefined;
    description: string | undefined;
    category: CategoryEntity | undefined;
    wallet: WalletEntity | undefined;
    isPaid: boolean;
    id?: number;
    bill: DebtsInstitution | undefined;
}