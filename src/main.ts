import { AccountService } from "./account.service";
import { AccountComponent } from "./account.component";

function main(): void {
	const accountService : AccountService = new AccountService();
	const accountComponent : AccountComponent = new AccountComponent(accountService);	

	let amount: HTMLElement | null = document.getElementById("amount");
	if (amount !== null) {
		amount.innerHTML = accountComponent.totalAmount.toString();
	}
}


main();