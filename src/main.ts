function main(): void {
	let amount: HTMLElement | null = document.getElementById("amount");
	if (amount !== null) {
		amount.innerHTML = "Loaded!";
	}
}


main();