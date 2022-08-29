//write your code here to make the tests pass

class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName;
    }
}

class Employee {
    constructor(name) {
        this.name = name
    }

    work(office) {
        // push 10 new docs to the office's docs array
        for (let i = 0; i < 10; i++) {
            office.documents.push(new Document(this.name))
        }
    }
}

class Manager {
    constructor(name, employees = []) {
        this.name = name;
        this.employees = employees;
    }

    hireEmployee(name) {
        this.employees.push(new Employee(name))
    }

    askEmployeesToWork(office) {
        this.employees.forEach(e => {e.work(office)});
    }
}

class Cleaner {
    constructor(name) {
        this.name = name
    }

    clean() {
        console.log("Clean");
    }
}


class Office {
    constructor(documents = [], managers = [], cleaners = []) {
        this.documents = documents;
        this.managers = managers;
        this.cleaners = cleaners;
    }

    hireCleaner(name) {
        this.cleaners.push(new Cleaner(name))
    }

    hireManager(name) {
        this.managers.push(new Manager(name))
    }

    startWorkDay() {
        this.managers.forEach(m => m.askEmployeesToWork(this))
        this.cleaners.forEach(c => c.clean())
    }
}
