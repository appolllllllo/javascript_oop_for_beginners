// Введение в классы и объекты в JavaScript

/* Сейчас мы займемся изучением ООП в JavaScript. Давайте рассмотрим пример из жизни, а потом перенесем его на JavaScript.

Сейчас мы займемся изучением ООП в JavaScript. Давайте рассмотрим пример из жизни, а потом перенесем его на JavaScript.

В качестве примера возьмем автомобиль. У него есть колеса, цвет, вид кузова, объем двигателя и так далее. Кроме того, водитель может отдавать ему команды: ехать, остановится, повернуть направо, налево и тп.

Можно говорить о том, что существует некоторый класс автомобилей, обладающий общими свойствами (у всех есть колеса и всем им можно отдавать команды).

Конкретный автомобиль, стоящий на улице - это представитель этого класса, или, другими словами, объект этого класса. У всех объектов этого класса есть свойства: количество колес, цвет, вид кузова и методы: ехать, остановится, повернуть направо, налево.

Другими словами сам класс - это чертеж, по которым на заводе делаются автомобили. Объект же - это сама машина, сделанная по этим чертежам.

В JavaScript класс создается с помощью ключевого слова class, за которым следует название этого класса. Давайте сделаем класс Car:

class Car {
    // тут код, то есть JavaScript-чертеж автомобиля 
}

Укажем теперь в нашем чертеже, что любой автомобиль, созданный по этому чертежу, будет иметь свойство для цвета и свойство для количества топлива.

Для этого внутри класса напишем свойство color и свойство fuel:

class Car {
	color; // цвет автомобиля
	fuel;  // количество топлива
}

Давайте теперь сделаем методы нашего класса. В JavaScript методы похожи на обычные функции, только объявляются без ключевого слова function.

Как уже упоминалось выше, наш автомобиль может ехать, может поворачивать, может останавливаться. Сделаем соответствующие методы в нашем классе:

class Car {
    color; // цвет автомобиля
    fuel; // количество топлива

    / Команда ехать:
	go() {
		// какой-то JavaScript код
	}
	
	// Команда поворачивать:
	turn() {
		// какой-то JavaScript код
	}
	
	// Команда остановиться:
	stop() {
		// какой-то JavaScript код
	}
}

Мы с вами сделали чертеж нашего автомобиля. Теперь нужно отправится на завод и сделать объект этого класса (то есть конкретный автомобиль).

В JavaScript это делается с помощью ключевого слова new, после которого пишется имя класса:

new Car; // командуем заводу сделать автомобиль 

Однако, если просто создать объект класса - это ни к чему не приведет (это все равно, что, к примеру, объявить массив и никуда его не записать). Нам нужна переменная для хранения этого объекта.

Пусть эта переменная будет называться myCar - запишем в нее созданный нами объект:

let myCar = new Car;

После создания автомобиля можно обращаться к его свойствам. Обращение к ним происходит через точку. Давайте установим свойства нашего объекта:

let myCar = new Car; // командуем заводу сделать автомобиль 

myCar.color = 'red'; // красим в красный цвет 
myCar.fuel = 50;     // заливаем топливо 

Все, наш автомобиль создан, покрашен и заправлен. Теперь мы можем отдавать ему команды через методы этого автомобиля.

Обращение к методам также происходит через точку, но, в отличие от свойства, после имени метода следует писать круглые скобки. Давайте покомандуем нашим объектом:

myCar.go();
myCar.turn();
myCar.stop(); */

// Классы и объекты в ООП в JavaScript

/* ООП классы объявляются с помощью ключевого слова class. Давайте для примера сделаем класс, описывающий некоторых юзеров:

class User {

}

С помощью команды new можно создать объект этого класса:

let user = new User;

Можно вывести созданный объект в консоль:

console.log(user); */

/* class Employee {

}

let employee = new Employee;

console.log(employee); */

// Свойства объектов в ООП в JavaScript

/* Давайте теперь научимся работать со свойствами объектов. Свойства позволяют записывать в объект, а затем прочитывать из него некоторые данные. Давайте посмотрим на примере. Пусть у нас есть объект класса User из предыдущего урока:

let user = new User;

Давайте запишем некоторые данные в свойства нашего объекта:

user.name = 'john';
user.surn = 'smit';

А теперь прочитаем эти свойства:

console.log(user.name);
console.log(user.surn); */

/* class Employee {

}

let employee = new Employee;

employee.name = 'Tata';
employee.age = '28';
employee.salary = 1000000;

console.log(employee.name);
console.log(employee.age);
console.log(employee.salary); */

// Несколько объектов одного класса в ООП в JavaScript

/* Можно создавать несколько объектов одного класса. К примеру, создадим двух юзеров:

let user1 = new User;
let user2 = new User;

Дадим им имена:

user1.name = 'john';
user2.name = 'eric';

Выведем эти имена:

console.log(user1.name);
console.log(user2.name); */

/* class Employee {

}

let employee1 = new Employee;
let employee2 = new Employee;

employee1.name = 'Ed';
employee1.salary = 1000000;

employee2.name = 'Tata';
employee2.salary = 1000000;

let sum = employee1.salary + employee2.salary;

console.log(sum); */

// Методы классов в ООП в JavaScript

/* В классах также можно делать методы. Давайте сделаем в нашем классе тестовый метод:

class User {
    show() {
        return '+++';
    }
}

Создадим объект нашего класса:

let user = new User;

А теперь вызовем наш метод:

console.log(user.show()); // выведет '+++'  */

/* class Employee {
    show() {
        return 'Улыбнись';
    }
}

let employee = new Employee;

console.log(employee.show()); */

// Параметры методов в ООП в JavaScript

/* Методы могут принимать параметры. Давайте для примера передадим в наш метод два параметра:

class User {
    show(name, surn) {
        return name + surn;
    }
}

Создадим объект нашего класса:

let user = new User;

Вызовем наш метод, передав в него параметры:

console.log(user.show('john', 'smit')); */

/* class Employee {
    show(name, salary) {
        return name + ": " + salary;
    }
}

let employee = new Employee;

console.log(employee.show('Tata', 1000000)); */

// Обращение к свойствам внутри классов в ООП в JavaScript

/* Внутри методов класса this будет указывать на объект этого класса:

class User {
    show() {
        console.log(this); // объект
    }
}

Это значит, что мы можем обращаться к свойствам объекта через this. Давайте попробуем. Пусть у нашего объекта есть свойство name. Выведем это свойство в нашем методе:

class User {
    show() {
        console.log(this.name);
    }
}

Давайте теперь создадим объект нашего класса:

let user = new User;

Запишем нужное нам свойство:

user.name = 'john';

Давайте теперь вызовем метод, тем самым выведя на экран значение свойства:

user.show(); // выведет 'john' */

/* class Employee {
    show () {
        alert(this.name);
        alert(this.salary);
    }
}

let employee = new Employee;

employee.name = 'Tata';
employee.salary = 10000000;

employee.show(); */

// Обращение к методам внутри классов в ООП в JavaScript

/* Одни методы можно вызывать внутри других через this. Давайте посмотрим на примере. Пусть у нас дан класс с юзером и методом, в котором возвращается свойство:

class User {
    show() {
        return this.name;
    }
}

Пусть у нас также есть метод cape, преобразующий первую букву строки в заглавную:

class User {
    show() {
        return this.name;
    }

    cape(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}

Давайте воспользуемся методом cape внутри метода show:

class User {
    show() {
        return this.cape(this.name);
    }

    cape(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
} */

/* class Student {

    show() {
        return this.cape(this.name) + '.' + this.cape(this.surn) + '.';
    }
    cape(str) {
        return str[0].toUpperCase();
    }
}

let student = new Student;

student.name = 'Tata';
student.surn = 'Appolonova';

alert(student.show()); */

// Объявление свойств внутри классов в ООП в JavaScript

/* В начале класса можно объявлять то, какие свойства будут у этого класса. Давайте, например, объявим, что у юзера будет свойство name:

class User {
    name;

    show() {
        return this.name;
    }
}

Можно сразу же записать в него какое-нибудь значение:

class User {
    name = 'john';

    show() {
        return this.name;
    }
}

Давайте теперь создадим объект нашего класса:

let user = new User;

А теперь выведем изначально заданное значение:

console.log(user.name); // 'john' */

/* class Student {
    name = 'Tata';
    surn = 'Appolonova';

    show() {
        return this.name + " " + this.surn;
    }
}

let student = new Student;

console.log(student.show()); */

// Конструктор в ООП в JavaScript

/* Существует специальный метод, который будет вызываться в момент создания нового объекта класса. Этот метод называется constructor. Давайте сделаем его в нашем классе:

class User {
    constructor() {
        console.log('+++');
    }
}

Создадим теперь объект класса и убедимся, что метод вызывается:

new User; // выведет '+++' */

/* class Employee {
    constructor() {
        console.log('+++');
    }
}

new Employee; */

// Параметры в конструкторе в ООП в JavaScript

/* В конструктор можно передавать параметры. Давайте посмотрим на примере:

class User {
    constructor(name, surn) {
        console.log(name + ' ' + surn);
    }
}

Передадим параметры в момент создания объекта:

new User('john', 'smit'); */

/* class Employee {
    constructor(name, salary) {
        console.log(name + ": " + salary);
    }
}

new Employee('Tata', 1000000); */

// Свойства через параметры конструктора в ООП в JavaScript

/* Переменные, переданные через параметры конструктора, можно записать в свойства объекта:

class User {
    constructor(name, surn) {
        this.name = name;
        this.surn = surn;
    }
}

Таким образом переданные значения станут доступны во всех методах класса. Для примера воспользуемся переданными значениями в каком-нибудь методе:

class User {
    constructor(name. surn) {
        this.name = name;
        this.surn = surn;
    }

    show() {
        return this.name + ' ' + this.surn;
    }
}

Давайте проверим, как это работает. Создадим новый объект, передав в него параметром имя и фамилию юзера:

let user = new User('john', 'smit');

Обратимся теперь к нашему методу:

console.log(user.show()); */

/* class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showName() {
        return this.name;
    }

    showSalary() {
        return this.salary;
    }

    raiseSalary(percent) {
        this.salary += (this.salary / 100 * percent);
        return this.salary;
    }
}

let employee = new Employee('Tata', 1000000);

console.log(employee.raiseSalary(20)); */

// Приватные свойства в ООП в JavaScript

/* Свойства объекта, которые можно прочитывать и записывать извне, называются публичными. Существуют также приватные свойства, которые будут доступны только внутри класса.

Имена приватных свойств нужно начинать с символа #. Кроме того, такие свойства обязательно нужно объявить в начале кода класса. Давайте сделаем это:

class User {
    #name;
}

Теперь запишем данные в наше свойство. Это можно сделать, например, в конструкторе класса:

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }
}

Сделаем теперь метод, который будет возвращать значение нашего свойства:

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }

    show() {
        return this.#name;
    }
}

Создадим объект класса, передав параметром имя юзера:

let user = new User('john');

Попытка обратиться напрямую к нашему свойству вне класса приведет к ошибке:

console.log(user.#name); // ошибка

А вызов нашего метода позволит прочитать это свойство:

console.log(user.show()); // выведет 'john' */

/* class Employee {
    #name;
    #salary;
    #age;

    constructor(name, salary, age) {
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }

    show() {
        return this.#name + ' | ' + this.#salary + ' | ' + this.#age; 
    }
}

let employee = new Employee('Тата', 1000000, 28);

console.log(employee.show()); */

// Приватные методы в ООП в JavaScript

/* Приватными могут быть не только свойства, но и методы. Обычно приватными делают вспомогательные методы, чтобы они случайно не могли быть вызваны извне класса.

Давайте посмотрим на примере. Пусть у нас есть следующий класс:

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }

    show() {
        return this.#name;
    }
}

Сделаем в этом классе приватный метод, который параметром будет принимать строку и делать заглавным ее первый символ:

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }

    #cape(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}

Воспользуемся нашим вспомогательным методом внутри другого метода:

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }

    show() {
        return this.#cape(this.#name);
    }

    #cape(str) {
        return str[0].toUpperCase() + str.clice(1);
    }
}

Давайте проверим. Создадим объект нашего класса:

let user = new User('john');

Вызовем публичный метод, использующий вспомогательный:

console.log(user.show()); */

/* class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	getSalary() {
		return this.#addSign(this.salary);
	}
	
	#addSign(num) {
		return num + '$';
	}
}

let employee = new Employee('Tata', 1000000);

console.log(employee.getSalary()); */

// Приватность в старом стиле в ООП в JavaScript

/* Объявление приватных свойств и методов через символ # появилось в JavaScript совсем недавно. До этого приходилось пользоваться специальным хитрым приемом.

Суть этого приема в том, что заключается соглашение о том, что имена приватных свойств и методов должны начинаться с символа подчеркивания. Реально такие имена не будут приватными, но мы договариваемся о том, что не будем их использовать извне класса.

Давайте попробуем. Сделаем приватное свойство в таком стиле:

class User {
    constructor(name) {
        this._name = name;
    }

    show() {
        return this._name;
    }
}

Создадим объект класса:

let user = new User('john', 'smit');

Вызовем метод, выводящий значение нашего свойства:

console.log(user.show());

Попытка обратиться к свойству извне класса не приведет к ошибке:

console.log(user._name); // ошибки нет */

/* class Employee {
	constructor(name, salary) {
		this._name = name;
		this._salary = salary;
	}
	
	getName() {
		return this._name;
	}
	getSalary() {
		return this._salary;
	}
}

let employee = new Employee('Tata', 1000000);

console.log(employee.getName());

console.log(employee._salary); */

/* class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	getSalary() {
		return this._addSign(this.salary);
	}
	
	_addSign(num) {
		return num + '$';
	}
}

let employee = new Employee('Tata', 1000000);

console.log(employee.getSalary()); */

// Геттеры свойств в ООП в JavaScript

/* Пусть у нас есть следующий класс с приватными свойствами:

class User {
    #name;
    #surn;

    constructor(name, surn) {
        this.#name = name;
        this.#surn = surn;
    }
}

Как вы видите, эти свойства задаются один раз при создании объекта. Сейчас, однако, эти свойства невозможно прочитать, ведь они приватные и нет соответствующих методов для этого.

Давайте сделаем для наших свойств специальные методы, позволяющие прочитать эти свойства. Такие методы (их называют геттеры) должны начинаться со слова get, а затем должно идти название читаемого свойство.

Давайте сделаем геттеры наших свойств:

class User {
    #name;
    #surn;

    constructor(name, surn) {
        this.#name = name;
        this.#surn = surn;
    }

    getName() {
        return this.#name;
    }

    getSurn() {
        return this.#surn;
    }
}

Давайте проверим их работу. Создадим объект, параметром передав данные юзера:

let user = new User('john', 'smit');

Прочитаем эти данные, воспользовавшись геттерами:

console.log(user.getName());
console.log(user.getSurn()); */

/* class Employee {
    #name;
    #salary;
    #age;

    constructor(name, salary, age) {
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary;
    }

    getAge() {
        return this.#age;
    }
}

let employee = new Employee('Tata', 1000000, 28);

console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge()); */

// Сеттеры свойств в ООП в JavaScript

/* Для записи приватных свойств также делают методы, которые называют сеттеры. Их имена следует начинать со слова set. Давайте сделаем сеттеры свойств:

class User {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	setSurn(surn) {
		this.#surn = surn;
	}
	
	getName() {
		return this.#name;
	}
	getSurn() {
		return this.#surn;
	}
}

Давайте проверим работу геттеров и сеттеров. Создадим объект нашего класса:

let user = new User;

С помощью сеттеров установим значения свойств:

user.setName('john');
user.setSurn('smit');

С помощью геттеров выведем значения свойств:

console.log(user.getName());
console.log(user.getSurn()); */

/* class Employee {
    #name;
    #surn;
    #age;

    setName(name) {
        this.#name = name;
    }

    setSurn(surn) {
        this.#surn = surn;
    }

    setAge(age) {
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getSurn() {
        return this.#surn;
    }

    getAge() {
        return this.#age;
    }
}

let employee = new Employee;

employee.setName('Tata');
employee.setSurn('Appolonova');
employee.setAge(28);

console.log(employee.getName());
console.log(employee.getSurn());
console.log(employee.getAge()); */

// Преимущества сеттеров и геттеров в ООП в JavaScript

/* В предыдущем уроке мы сделали для каждого свойства геттер и сеттер. Может возникнуть вопрос, зачем нужные такие сложности, ведь фактически того же самого эффекта можно достичь, если сделать свойства публичными, а не приватными.

Дело в том, что геттеры и сеттеры имеют преимущество: перед обращением к свойству можно выполнять некоторые проверки. К примеру, в нашем случае мы при записи имени и фамилии можем проверить, что новое значение не является пустой строкой:

class User {
    #name;
    #surn;

    setName(name) {
        if (name.length > 0) {
            this.#name = name;
        } else {
            throw new Error('name is incorrect');
        }
    }
    
    setSurn(surn) {
        if (surn.length > 0) {
            this.#surn = surn;
        } else {
            throw new Error('name is incorrect');
        }
    }

    getName() {
        return this.#name;
    }

    getSurn() {
        return this.#surn;
    }
}

Давайте проверим, как это работает. Для начала создадим объект класса:

let user = new User;

Теперь попробуем записать корректное значение:

user.setName('john');

А теперь попробуем записать некорректное:

user.setName(''); // ошибка */

/* class Employee {
    #name;
    #salary;
    #age;

    setName(name) {
        if (name.length > 0) {
            this.#name = name;
        } else {
            throw new Error('name is incorrect');
        }
    }

    setSalary(salary) {
        if (typeof salary === 'number') {
            this.#salary = salary;
        } else {
            throw new Error('salary is incorrect');
        }
    }

    setAge(age) {
        if (age >= 0 && age <= 120) {
            this.#age = age;
        } else {
            throw new Error('age is incorrect');
        }
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary + '$';
    }

    getAge() {
        return this.#age;
    }
}

let employee = new Employee;

employee.setName('Tata');
employee.setSalary(1000000);
employee.setAge(28);

console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge()); */

// Цепочки методов в ООП в JavaScript

/* Можно сделать так, чтобы методы можно было вызывать друг за другом цепочкой. Для этого каждый такой метод должен возвращать this. Давайте попробуем. Добавим соответствующий код в сеттеры нашего класса:

class User {
    #name;
    #surn;

    setName(name) {
        this.#name = name;
        return this;
    }

    setSurn(surn) {
        this.#surn = surn;
        return this;
    }

    getName() {
        return this.#name;
    }

    getSurn(surn) {
        return this.#surn;
    }
}

Теперь наши сеттеры можно вызывать друг за другом, цепочкой. Давайте проверим. Создадим объект нашего класса:

let user = new User;

Вызовем наши сеттеры цепочкой:

user.setName('john').setSurn('smit');

Проверим, что значения свойств изменились:

console.log(user.getName());
console.log(user.getSurn()); */

/* class Employee {
    #name;
    #salary;
    #age;

    setName(name) {
        if (name.length > 0) {
            this.#name = name;
        } else {
            throw new Error('name is incorrect');
        }
        return this;
    }

    setSalary(salary) {
        if (typeof salary === 'number') {
            this.#salary = salary;
        } else {
            throw new Error('salary is incorrect');
        }
        return this;
    }

    setAge(age) {
        if (age >= 0 && age <= 120) {
            this.#age = age;
        } else {
            throw new Error('age is incorrect');
        }
        return this;
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary + '$';
    }

    getAge() {
        return this.#age;
    }
}

let employee = new Employee;

employee.setName('Tata').setSalary(1000000).setAge(28);

console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge()); */

// Класс как набор методов в ООП в JavaScript

/* Иногда классы используют для группировки методов схожей тематики. В этом случае как правило создается только один объект этого класса и его методы используются много раз в различных ситуациях.

Давайте посмотрим на примере. Сделаем класс, который будет манипулировать массивами чисел:

class ArrHelper {

}

Каждый метод этого класса параметром будет принимать массив и выполнять над ним заданную операцию. Пусть, к примеру, у нас будут следующие методы:

class ArrHelper {
    getSum(arr) {
        // сумма элементов
    }

    getAvg(arr) {
        // среднее арифметическое
    }
}

Напишем реализацию этих методов:

class ArrHelper {
    getSum(arr) {
        let res = 0;

        for (let num of arr) {
            res += num;
        }
        return res;
    }

    getAvg(arr) {
        if (arr.length > 0) {
            let sum = this.getSum(arr);
            return sum / arr.length;
        } else {
            return 0;
        }
    }
}

Давайте посмотрим, как мы будем пользоваться этими методами. Создадим объект нашего класса:

let arrHelper = new ArrHelper;

Найдем с помощью нашего объекта сумму чисел различных массивов:

let sum1 = arrHelper.getSum([1, 2, 3]);
console.log(sum1);

let sum2 = arrHelper.getSum([3, 4, 5]);
console.log(sum2); */

/* class Validator {
    isEmail(str) {
        if (typeof str !== 'string' || str.trim() === '') return false;
        if (str.includes(' ')) return false;
        if (!str.includes('@') || !str.includes('.')) return false;

        let atIndex = str.indexOf('@');
        let dotIndex = str.lastIndexOf('.');

        // @ не может быть первым
        if (atIndex === 0) return false;
        // точка должна идти строго после @ (минимум 1 символ между ними)
        if (dotIndex <= atIndex + 1) return false;
        // точка не может быть последней
        if (dotIndex === str.length - 1) return false;

        return true;
    }

    isDomain(str) {
        if (typeof str !== 'string' || str.trim() === '') return false;
        if (str.includes(' ')) return false;
        if (!str.includes('.')) return false;
        // не может начинаться или заканчиваться точкой
        if (str[0] === '.' || str[str.length - 1] === '.') return false;

        // разбиваем по точкам и проверяем, что между ними есть символы
        const parts = str.split('.');
        for (let i = 0; i < parts.length; i++) {
            if (parts[i].length === 0) return false; // ловит "site..com"
        }
        return true;
    }

    isNumber(str) {
        if (typeof str !== 'string' || str.trim() === '') return false;
        
        for (let i = 0; i < str.length; i++) {
            // сравниваем символы по кодам: отсеиваем всё, кроме '0'-'9'
            if (str[i] < '0' || str[i] > '9') {
                return false;
            }
        }
        return true;
    }
}

let validator = new Validator;

console.log(validator.isEmail('user@mail.ru'));
console.log(validator.isEmail('@site.com'));
console.log(validator.isEmail('user site@.ru'));

console.log(validator.isDomain('example.com'));
console.log(validator.isDomain('.com'));
console.log(validator.isDomain('site..com'));

console.log(validator.isNumber('12345'));
console.log(validator.isNumber('12.5'));
console.log(validator.isNumber('123a')); */

// Массивы объектов в ООП в JavaScript

/* Объекты классов можно хранить в массиве и выполнять с ними различные операции, как с элементами массива. Давайте посмотрим на примере. Пусть у нас есть следующий класс:

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

Сделаем массив объектов этого класса:

let users = [
    new User('john');
    new User('eric');
    new User('kyle');
]

Давайте переберем этот массив циклом и для каждого юзера выведем его имя:

for (let user of users) {
    console.log(user.getName());
} */

/* class Employee {
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary;
    }
}

let employees = [
    new Employee('Tata', 1000000),
    new Employee('Ed', 1000000),
];

for (let employee of employees) {
    console.log(employee.getName() + ': ' + employee.getSalary());
} */

// Объекты внутри классов в ООП в JavaScript

/* В классах можно использовать объекты других классов. Давайте посмотрим на примере. Пусть мы хотим сделать юзера с именем и фамилией, а также городом, в котором он живет. Пусть у нас есть следующий класс для города:

class City {
    constructor(name) {
        this.name = name;
    }
}

Будем имя, фамилию и город передавать параметрами конструктора:

class User {
    constructor(name, surn, city) {
        this.name = name;
        this.surn = surn;
        this.city = city;
    }
}

При этом имя и фамилия будут строками, а вот город - объектом своего отдельного класса:

let city = new City('luis');
let user = new User('john', 'smit', city);

Давайте выведем имя нашего юзера:

console.log(user.name);

А теперь выведем название города для нашего юзера:

console.log(user.city.name); */

/* class Employee {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
	}
}

class Position {
    constructor(name) {
        this.name = name;
    }
}

let position = new Position('senior')

class Department {
    constructor(name) {
        this.name = name;
    }
}

let department = new Department('frontend');

let employee = new Employee('Tata', position, department);

console.log(employee.name);
console.log(employee.position.name);
console.log(employee.department.name); */

// Манипуляция объектами в классах в ООП в JavaScript

/* Классы параметрами методов могут принимать объекты других классов и манипулировать этими объектами. Давайте посмотрим на примере. Пусть у нас есть следующий класс:

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.name;
    }
}

Пусть мы решили сделать класс, который будет манипулировать набором объектов с юзерами:

class UsersCollection {

}

Будем хранить объекты с юзерами в виде массива в приватном свойстве:

class UsersCollection {
    #users;

    constructor() {
        this.#users = [];
    }
}

Сделаем метод для добавления нового юзера в массив:

class UsersCollection {
    #users;

    constructor() {
        this.#users = [];
    }

    add(user) {
        this.#users.push(user);
    }
}

А теперь сделаем метод, который выведет в консоль имена всех юзеров:

class UsersCollection {
    #users;

    constructor() {
        this.#users = [];
    }

    add(user) {
        this.#users.push(user);
    }

    show() {
        for (let user of this.#users) {
            console.log(user.getName());
        }
    }
}

Давайте посмотрим на работу нашего класса. Для начала создадим его объект:

let uc = new UsersCollection;

Теперь добавим в нашу коллекцию несколько юзеров:

uc.add(new User('john'));
uc.add(new User('eric'));
uc.add(new User('kyle'));

А теперь вызовем метод, который выведет в консоль имена всех юзеров:

uc.show(); */

/* class Employee {
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary;
    }
}

class EmployeesCollection {
    #users;

    constructor() {
        this.#users = [];
    }

    add(user) {
        this.#users.push(user);
    }

    show() {
        for (let user of this.#users) {
            console.log(user.getName());
        }
    }

    getSum() {
        let sum = 0;
        for (let user of this.#users) {
            sum += user.getSalary();
        }
        return sum;
    }

    getAvg() {
        if (this.#users.length > 0) {
            let sum = this.getSum();
            return sum / this.#users.length;
        }
        return 0;
    }

}

let ec = new EmployeesCollection;

ec.add(new Employee('Tata', 1000000));
ec.add(new Employee('Ed', 1000000));

ec.show();
console.log(ec.getSum());
console.log(ec.getAvg()); */

// Сравнение объектов в ООП в JavaScript

/* Давайте посмотрим, как сравниваются переменные, содержащие объекты. Две переменные будут считаться равными, если они содержат ссылку на один и тот же объект. Посмотрим на практике. Пусть у нас есть следующий класс:

class User {
    constructor(name) {
        this.name = name;
    }
}

Создадим два объекта этого класса:

let user1 = new User('1');
let user2 = new User('2');

Сравним переменные, содержащие ссылку на один и тот же объект:

console.log(user1 === user1); // true

А теперь сравним переменные, содержащие ссылку на разные объекты:

console.log(user1 === user2); // false */

/* class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 === emp2); // false */

/* class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 === emp1); // true */

/* class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('john');

console.log(emp1 === emp2); // false */

/* class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 !== emp1); // false */

/* class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = emp1;

console.log(emp1 === emp2); // true */

/* class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 !== emp2); // true */

/* class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = emp1;
emp2.name = 'eric';

console.log(emp1 === emp2); // true */

// Оператор instanceof в ООП в JavaScript

/* Оператор instanceof позволяет проверить принадлежит ли объект определенному классу. Давайте посмотрим на примере. Пусть у нас есть следующий класс:

class User {

}

Сделаем объект в этого класса:

let user = new User;

Проверим, принадлежит ли объект из переменной нашему классу:

console.log(user.instanceof User); // true */

/* class Student {
	
}
class Employee {
	
}

let employee = new Employee;
console.log(employee instanceof Employee); // true
console.log(employee instanceof Student); // false */

/* class Student {
	constructor(name) {
		this.name = name;
	}
}

class Employee {
	constructor(name) {
		this.name = name;
	}
}

let users = [
	new Student('user1'),
	new Employee('user2'),
	new Student('user3'),
	new Employee('user4'),
	new Student('user5'),
	new Employee('user6'),
	new Student('user7'),
];


function getEmployeeName(arr) {
    let names = [];
    for (let elem of arr) {
        if (elem instanceof Employee) {
            names.push(elem.name);
        }
    }
    return names;
}

console.log(getEmployeeName(users)); */

// Встроенные классы JavaScript

/* В JavaScript много встроенных классов, с которыми вы уже сталкивались ранее. Для примера рассмотрим работу с датой:

let date = new Date;

Если вывести объект с датой в консоль, то мы увидим ее строковое представление:

console.log(date);

Можно, однако, увидеть в консоли список свойств и методов объекта. Для этого нужно воспользоваться следующей командой: */

/* let reg = new RegExp;

console.log(reg);
console.dir(reg);

console.log(reg instanceof RegExp); */

/* let arr = [1, 2, 3];

console.log(arr);
console.dir(arr);

console.log(arr instanceof Array); */

/* let arr = new Array(1, 2, 3);

console.log(arr);
console.dir(arr);

console.log(arr instanceof Array); */

/* let obj = {a: 1, b: 2, c: 3};

console.log(obj);
console.dir(obj);

console.log(obj instanceof Object); */

/* let obj = new Object;

console.log(obj);
console.dir(obj);

console.log(obj instanceof Object); */

// Встроенные классы DOM JavaScript

/* DOM элементы также представляют собой объекты встроенных классов. Давайте посмотрим на примере. Пусть у нас есть абзац:

<p>text</p>

let elem = document.querySelector('p');

Выведем этот абзац в консоль:

console.log(elem);

А теперь посмотрим список свойств и методов нашего абзаца:

console.dir(elem);

Можно определить к какому классу принадлежит наш абзац. Для этого в списке свойств нужно найти особое свойство [[Prototype]]. В нем мы видим, что абзац принадлежит классу HTMLParagraphElement. Проверим это:

console.log(elem instanceof HTMLParagraphElement); // true */

/* let elem = document.querySelector('div');

console.dir(elem); 

console.log(elem instanceof HTMLDivElement); */

/* let elem = document.querySelector('input');

console.dir(elem);

console.log(elem instanceof HTMLInputElement); */

/* let elems = document.querySelectorAll('div');
console.dir(elems);

console.log(elems instanceof NodeList); */

/* let elem = document.querySelector('div');
let elems = elem.children;

console.dir(elems);

console.log(elems instanceof HTMLCollection); */
