import { AccountService } from "./account.service";
import { Account } from "./account.model"

function Component(config: any){
	console.log("Config", config);
	
	return (target: any)=>{
		console.log("target", target)
	}
}

@Component({id: 1})
export class AccountComponent {
	constructor(private accountService: AccountService) { }
	get totalAmount(): number {
		const accounts: Account[] = this.accountService.getAccounts();
		let total = 0;
		accounts.forEach(account => {
			account.investements.filter(investment => investment.currency === "ARS")
				.forEach(investment => {
					total += investment.amount;
				})
		});
		return Math.round(total*100)/100;
	}
}