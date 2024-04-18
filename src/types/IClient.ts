export interface IClient {
	_id: string;
	name: string;
	projectName: string;
	status: string;
	cost: number;
	paymentType: 'Mensual' | 'Unico';
	nextPayment: string;
}
