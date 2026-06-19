// Наследование классов в ООП в JavaScript

/* Один класс может наследовать от другого класса, заимствуя его методы и свойства. Это нужно в том случае, когда два класса очень похожи. К примеру, у нас может быть класс User, а также Student, который имеет те же свойства и методы, но еще и добавляет свои. В этом случае было бы удобно, чтобы студент унаследовал повторяющиеся методы родителя. Давайте посмотрим, как это делается.

Пусть у нас есть класс User, который будет родителем:

class User {

}

Пусть у нас также есть класс со студентом, который будет потомком:

class Student {

}

Давайте сделаем так, чтобы класс-потомок унаследовал методы и свойства своего родителя. Это делается с помощью ключевого свойства extends:

class Student extends User {

} */

/* class User {

}

class Employee extends User {

} */

// Наследование публичных методов в ООП в JavaScript

/* Класс-потомок наследует все публичные методы родителей. Давайте посмотрим на примере. Пусть у нас есть класс со следующими методами:

class User {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

Пусть от этого класса наследует следующий класс:

class Student extends User {

}

Давайте проверим, что методы унаследовались. Создадим новый объект со студентом:

let student = new Student;

Установим ему имя с помощью унаследованного метода:

student.setName('john');

Прочитаем его имя с помощью унаследованного метода:

let name = student.getName();

console.log(name); */

/* class User {

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Employee extends User {

}

let employee = new Employee;

employee.setName('Tata');

let name = employee.getName();

console.log(name); */

// Методы потомка в ООП в JavaScript

/* Класс-потомок может иметь свои методы. Для примера добавим нашему студенту геттер и сеттер года обучения:

class Student extends User {
    setYear(year) {
        this.year = year;
    }
    getYear() {
        return this.year;
    }
}

В классе-потомке будут доступны как его личные методы, так и унаследованные. Давайте проверим. Создадим объект класса:

let student = new Student;

Установим ему имя с помощью унаследованного метода, а год обучения с помощью собственного метода:

student.setName('john');
student.setYear(1);

Прочитаем его имя и год обучения:

let name = student.getName();
let year = student.getYear(); 

console.log(name, year); */

/* class User {
    
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Employee extends User {

    setSalary(salary) {
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

let employee = new Employee;

employee.setName('Tata');
employee.setSalary(1000000);

let name = employee.getName();
let salary = employee.getSalary();

console.log(name, salary); */

// Переопределение методов родителя в ООП в JavaScript

/* Класс-потомок может переопределить метод родителя, создав метод с таким же именем. Давайте посмотрим на примере. Пусть у нас есть следующий родительский класс:

class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

Давайте в классе-потомке создадим одноименный метод:

class Student extends User {
	setName(name) {
		
	}
}

Как правило, переопределение методов родителя нужно для того, чтобы изменить или дополнить поведение этого метода. Давайте в нашем случае добавим проверку длины имени:

class Student extends User {
    setName(name) {
        if (name.length > 0) {
            this.name = name;
        } else {
            throw new Error('student name error');
        }
    }
}

Давайте убедимся в том, что вызывается именно переопределенный метод. Для начала создадим объект класса потомка:

let student = new Student;

Теперь вызовем наш метод, передав в него корректное значение:

student.setName('john');

А теперь вызовем метод, передав в него некорректное значение. В результате увидим в консоли выброшенную ошибку:

student.setName(''); // ошибка */

/* class User {
    setAge(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}

class Employee extends User {
    setAge(age) {
        if (age >= 18 && age <= 65) {
            this.age = age;
        } else {
            throw new Error('student name error');
        }
    }
}

let employee = new Employee;

employee.setAge(17);

let age = employee.getAge();

console.log(age); */

// Вызов переопределенного метода в ООП в JavaScript

/* При переопределении потомок теряет доступ к переопределенному методу родителя. Однако, получить к нему доступ все равно можно. Это делается с помощью ключевого слова super, которое указывает на родительский класс.

Давайте посмотрим на примере, когда нам может понадобится доступ к родительскому методу. Пусть у нас есть следующий класс-родитель:

class User {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

Пусть мы в классе-потомке переопределили метод родителя:

class Student extends User {
    setName(name) {
        if (name.length > 0) {
            this.name = name;
        } else {
            throw new Error('student name error');
        }
    }
}

Можно заметить, что в переопределенном методе при выполнения условия фактически выполняется код родительского метода. Получается не нужное дублирование кода.

Можно от него избавиться, если вызвать метод родителя. Давайте сделаем это:

class Student extends User {
    setName(name) {
        if (name.length > 0) {
            super.setName(name); // метод родителя
        } else {
            throw new Error('student name error');
        }
    }
} */

/* class User {
	setAge(age) {
		if (age >= 0) {
			this.age = age;
		} else {
			throw new Error('need age more 0');
		}
	}
}

class Employee extends User {
	setAge(age) {
		if (age <= 120) {
			super.setAge(age);
		} else {
			throw new Error('need age less 120');
		}
	}
}

let employee = new Employee;

employee.setAge(121); */

// Конструктор при наследовании в ООП в JavaScript

/* При наследовании можно переопределять конструктор родителя. Давайте посмотрим на примере. Пусть у нас есть следующий класс родителя:

class User {
    constructor(name, surn) {
        this.name = name;
        this.surn = surn;
    }

    getName() {
        return this.name;
    }
    getSurn() {
        return this.surn;
    }
}

Пусть от родительского класса наследует следующий класс:

class Student extends User {
    constructor(name, surn, year) {

    }
}

В этом случае нам обязательно нужно первой строкой вызвать конструктор родителя через super:

class Student extends User {
    constructor(name, surn, year) {
        super();
    }
}

Команда super по сути является конструктором родителя. Поэтому передадим в него требуемые параметры:

class Student extends User {
    constructor(name, surn, year) {
        super(name, surn);
    }
}

Теперь в потомке год обучения запишем в свое свойство потомка:

class Student extends User {
    constructor(name, surn, year) {
        super(name, surn);
        this.year = year;
    }
}

Сделаем геттер для года обучения:

class Student extends User {
    constructor(name, surn, year) {
        super(name, surn);
        this.year = year;
    }

    getYear() {
        return this.year;
    }
} */

/* class User {
    constructor(name, surn) {
        this.name = name;
        this.surn = surn;
    }

    getName() {
        return this.name;
    }

    getSurn() {
        return this.surn;
    }
}

class Employee extends User {
    constructor(name, surn, age, salary) {
        super(name, surn);
        this.age = age;
        this.salary = salary;
    }

    getAge() {
        return this.age;
    }

    getSalary() {
        return this.salary;
    }
}

let employee = new Employee('Tata', 'Appolonova', 28, 1000000);

console.log(employee.getName());
console.log(employee.getSurn());
console.log(employee.getAge());
console.log(employee.getSalary()); */

// Приватные методы при наследовании в ООП в JavaScript

/* Приватные свойства не наследуются. Но потомок может манипулировать ими через публичные методы родителя. Давайте посмотрим на практике. Пусть у нас есть следующий класс-родитель с приватным свойством и его геттером и сеттом:


class User {
    #name;

    setName(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
}

Пусть от родителя наследует следующий потомок:

class Student extends User {

}

Создадим объект потомка:

let student = new Student;

Воспользуемся методом родителя, чтобы записать его приватное свойство:

let name = student.getName();
console.log(name); */

/* class User {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	
	setSurn(surn) {
		this.#surn = surn;
	}
	getSurn() {
		return this.#surn;
	}
}

class Employee extends User {
    getFull() {
        return this.#name + ' ' + this.#surn;
    }
}

let employee = new Employee;

employee.setName('Tata');
employee.setSurn('Appolonova');

let name = employee.getName();
let surn = employee.getSurn();

// console.log(name, surn);

console.log(employee.getFull()); */

// Проблема приватных свойств при наследовании в ООП в JavaScript

/* To, что приватные свойства не наследуются, может привести к неожиданной проблеме. Давайте посмотрим на примере. Пусть у нас есть следующий класс-родитель с приватным свойством:

class User {
    #age;

    setAge(age) {
        this.#age = age;
    }
    getAge() {
        return this.#age;
    }
}

Пусть в классе-потомке мы решили сделать метод, который будет увеличивать возраст на единицу. Однако, попытка изменить приватное свойство родителя приведет к ошибке:

class Student extends User {
    incAge() {
        this.#age++ // ошибка
    }
}

Ошибка исчезнет, если в классе-потомке объявить приватное свойство #age:

class Student extends User {
	#age;
	
	incAge() {
		this.#age++;
	}
}

Тут-то нас и поджидает ловушка! На самом деле мы породили два приватных свойства: одно в родителе и одно в потомке. И они работают полностью независимо. Это значит, что методы родителя будут изменять свое свойство, а методы потомка - свои.

Эта проблема на самом деле имеет решение. Просто нужно манипулировать приватными свойствами родителя через методы этого родителя. Давайте перепишем наш код в соответствии с этим:

class Student extends User {
    incAge() {
        let age = this.getAge();
        age++;
        this.setAge(age);
    }
}

Можно упростить:

class Student extends User {
	incAge() {
		this.setAge(++this.getAge());
	}
} */

/* class User {
    #name;
    setName(name) { this.#name = name; }
    getName() { return this.#name; }
}

class Employee extends User {
    checkName(name) {
        if (name.length > 0) {
            this.setName(name);
        }
    }
}

let employee = new Employee();

employee.checkName('Tata');
console.log(employee.getName()); */

// Защищенные методы в ООП в JavaScript

/* Приватные методы не наследуются и не видны снаружи класса. Иногда, однако, нужны методы, которые наследуются, но не видны снаружи класса. Такие методы называются защищенными (protected). JavaScript, к сожалению, не поддерживает таких методов.

Поэтому я предлагаю ввести некоторое соглашение, позволяющее создавать такие методы. Будем начинать имена таких методов через подчеркивание. Фактически мы используем старое общепринятое соглашение о закрытых методах. Toлько называем такие методы защищенными в знак того, что они наследуются, но мы не будем использовать их снаружи. Впрочем, именно так они и применяются по древнему соглашению.

Итак, давайте напишем класс-родитель с защищенным методом:

class User {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this._capeFirst(this.name);
    }

    _capeFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}

Воспользуемся этим защищенным методом в классе-потомке:

class Student extends User {
    setSurn(surn) {
        this.surn = surn;
    }
    getSurn() {
        return this._capeFirst(this.surn);
    }
} */

/* class User {
	setName(name) {
		if (this._notEmpty(name)) {
			this.name = name;
		}
	}
	getName() {
		return this.name;
	}
	
	_notEmpty(str) {
		return str.length > 0;
	}
}
class Employee extends User {
	setSurn(surn) {
		if (this._notEmpty(surn)) {
			this.surn = surn;
		}
	}
	getSurn() {
		return this.surn;
	}
}

let employee = new Employee;

employee.setName('Tata');
console.log(employee.getName()); */

// Защищенные свойства в ООП в JavaScript

/* Введем также и защищенные свойства. Будем также начинать их имена с подчеркивания. Посмотрим на примере. Сделаем класс-родитель с защищенным свойством, содержащим возраст:

class User {
    setAge(age) {
        this._age = age;
    }
    getAge() {
        return this._age;
    }
}

В классе потомке сделаем метод, увеличивающий возраст на единицу:

class Student extends User {
	incAge() {
		this._age++;
	}
} */

/* class User {
	_name;
	
	setName(name) {
		this._name = name;
	}
	getName() {
		return this._name;
	}
}

class Employee extends User {
	setName(name) {
		if (name.length > 0) {
			this._name = name;
		}
	}
} */

// Иерархия наследования классов в ООП в JavaScript

/* Можно выполнять наследования от класса, который сам является потомком. Давайте посмотрим на примере. Пусть у нас есть следующий класс-родитель:

class User {
	setName(name) {
		this._name = name;
	}
	getName() {
		return this._name;
	}
}

От этого класса наследует следующий класс:

class Student extends User {
	setYear(year) {
		this._year = year;
	}
	getYear() {
		return this._year;
	}
}

А от этого класса наследует еще один класс:

class StudentProgrammer extends 
	Student { 
	setSkill(skill) {
		this._skill = skill;
	}
	getSkill() {
		return this._skill;
	}
} */

/* class User {
    setName(name) {
        this._name = name;
    }
    setSurn(surn) {
        this._surn = surn;
    }

    getName() {
        return this._name;
    }
    getSurn() {
        return this._surn;
    }
}

class Employee extends User {
    setSalary(salary) {
        this._salary = salary;
    }
    getSalary() {
        return this._salary;
    }
    work() {
        return `${this._name} ${this._surn} работает...`;
    }
}

class Programmer extends Employee {
    setLanguage(lang) {
        this._language = lang;
    }
    getLanguage() {
        return this._language;
    }

    writeCode() {
        return `Пишу код на ${this._language}...`;
    }
    work() {
        return `${this._name} ${this._surn} программирует на ${this._language}`;
    }
}

class Designer extends Employee {
    setTool(tool) {
        this._tool = tool;
    }
    getTool() {
        return this._tool;
    }

    createDesign() {
        return `Создаю макет в ${this._tool}...`;
    }
    work() {
        return `${this._name} ${this._surn} проектирует в ${this._tool}`;
    }
}

let dev = new Programmer();
dev.setName('Эдуард');
dev.setSurn('Эминов');
dev.setSalary(1000000);
dev.setLanguage('Go');

console.log(dev.getName());
console.log(dev.getSalary());
console.log(dev.getLanguage());
console.log(dev.writeCode());
console.log(dev.work());

let des = new Designer();
des.setName('Тата');
des.setSurn('Апполонова');
des.setSalary(1000000);
des.setTool('Figma');

console.log(des.getName());
console.log(des.getSalary());
console.log(des.getTool());
console.log(des.createDesign());
console.log(des.work()); */

/* let elem = document.querySelector('div');
console.dir(elem); */

/* let elem = document.querySelector('input');
console.dir(elem); */

/* let elems = document.querySelectorAll('div');
console.dir(elems); */

/* let elem = document.querySelector('div');
let elems = elem.children;

console.dir(elems); */