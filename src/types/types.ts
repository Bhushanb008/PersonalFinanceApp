export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  date: string;
  note: string;
}



export type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  Transactions: undefined;
  TransactionDetail: {item: Transaction};
};