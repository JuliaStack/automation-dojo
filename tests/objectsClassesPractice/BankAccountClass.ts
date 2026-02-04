class BankAccount {
  private balance: number;
  accountHolder: string;
  accountID: string;
  currency: string;
  accountType: string;
  pin: string;

  constructor(
    balance: number,
    accountHolder: string,
    accountID: string,
    currency: string,
    accountType: string,
  ) {
    this.balance = balance;
    this.accountHolder = accountHolder;
    this.accountID = accountID;
    this.currency = currency;
    this.accountType = accountType;
    this.pin = this.generatePin();
  }
  private generatePin() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }
  getBalance(pin: string) {
    if (pin === this.pin) {
      return this.balance;
    } else {
      throw new Error("Invalid PIN");
    }
  }
  deposit(amount: number) {
    this.balance += amount;
  }
  withdraw(amount: number, pin: string) {
    if (pin === this.pin) {
      this.balance -= amount;
    } else {
      throw new Error("Invalid PIN");
    }
  }
}
const myAccount = new BankAccount(
  1000000,
  "John Doe",
  "US12345678901234567890",
  "USD",
  "Platinum",
);

console.log(myAccount);
console.log(myAccount.getBalance(myAccount.pin)); // Accessing the balance using the correct PIN

myAccount.deposit(5000);
console.log(myAccount.getBalance(myAccount.pin)); // Balance after deposit

myAccount.withdraw(2000, myAccount.pin);
console.log(myAccount.getBalance(myAccount.pin)); // Balance after withdrawal
