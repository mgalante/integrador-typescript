import { accounts } from "./data"
import { Account } from "./account.model" 
export class AccountService {
	getAccounts() : Account[]{
		let loadedAccounts : Account[] = accounts;
		return loadedAccounts;
	}
}
