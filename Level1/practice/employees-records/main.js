
var employees = [];

function Employee(name, salary, title){
    this.name = name; 
    this.salary = salary;
    this.title = title;
    this.status = "Full Time";
    this.printEmployeeForm = function(){
        console.log("Name: " + name + " Job Title: " + title + ", Salary: $" + salary + "/year, " + "Status: " + this.status)
    }
}
var emp1 = new Employee("Jordan", 90000, "Sofware Engineer")
var emp2 = new Employee("Cynthia", 60000, "Experience Designer")
var emp3 = new Employee("Gigi", 20000, "Influncer")

emp3.status = "Part-time"

emp1.printEmployeeForm();
emp2.printEmployeeForm();
emp3.printEmployeeForm();

employees.push(emp1, emp2, emp3)


console.log(employees)
