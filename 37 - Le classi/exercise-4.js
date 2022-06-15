class BankAccount {
    
    constructor(balance) {
     this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        this.view();           //per seguire tracciamento
    }

    withdraw(amount) {
        this.balance -= amount;
        this.view();          //per seguire tracciamento
    }

    view() {
        console.log(this.balance);
    }
}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
