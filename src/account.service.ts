import { accounts } from "./data"
import { Account } from "./account.model"

export class AccountService {
	/**
	 * Metodo para obterner las cuentas
	 */
	getAccounts() : Account[]{
		const loadedAccounts : Account[] = accounts;
		return loadedAccounts;
	}
}
