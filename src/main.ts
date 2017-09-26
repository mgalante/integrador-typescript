import { AccountService } from "./account.service";

function main(): void {
	let accountService : AccountService = new AccountService();
	let accounts = accountService.getAccounts();
	console.log(accounts);

	let amount: HTMLElement | null = document.getElementById("amount");
	if (amount !== null) {
		amount.innerHTML = "Loaded!";
	}
}


main();