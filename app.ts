export class User {
    private firstName: string;
    private lastName: string;
    private email: string;
    private age: number;
    private status: string;
  
    constructor(firstName: string, lastName: string, email: string, age: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.age = age;
      this.status = age > 18 ? "adult" : "minor";
    }
  
    // Long Method
    public getUserDetails(): string {
      let userDetails = "User Details:\n";
      userDetails += "Name: " + this.firstName + " " + this.lastName + "\n";
      userDetails += "Email: " + this.email + "\n";
      userDetails += "Age: " + this.age + "\n";
      userDetails += "Status: " + this.status + "\n";
      return userDetails;
    }
  
    // Duplicated Code
    public isAdult(): boolean {
      return this.age > 18;
    }
  
    public canVote(): boolean {
      return this.age > 18;
    }
  
    // Magic Number
    public applyDiscount(price: number): number {
      if (this.age > 65) {
        return price * 0.9; // 10% discount for seniors
      } else if (this.age > 18 && this.age < 30 && price <= 100) {
        return price * 0.95; // 5% discount for young adults
      }
      return price;
    }
  
    // Method that belongs to another class
    public sendEmail(subject: string, message: string): void {
      console.log(`Sending email to ${this.email} with subject: ${subject} and message: Dear ${this.firstName} ${this.lastName}, ${message}`);
    }
  }
  
  // Usage
  const user = new User("John", "Doe", "john.doe@example.com", 30);
  console.log(user.getUserDetails());
  console.log(user.isAdult());
  console.log(user.canVote());
  console.log(user.applyDiscount(100));
  user.sendEmail("Welcome!", "Thanks for joining us!");
  