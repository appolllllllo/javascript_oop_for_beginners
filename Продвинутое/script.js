// Потеря контекста в ООП в JavaScript

/* При работе с классами может теряться контекст и this будет указывать не на объект класса, а на что-то другое. Давайте посмотрим как это может произойти и что с этим делать.

Пусть у нас есть класс User, который содержит имя юзера и массив городов, в которых этот юзер был:

class User {
    constructor(name, cities) {
        this.name = name;
        this.cities = cities; 
    }
}

Пусть есть метод, который выводит города:

class User {
	constructor(name, cities) {
		this.name = name;
		this.cities = cities;
	}
	
	showCities() {
		this.cities.forEach(function(city) {
			console.log(city);
		});
	}
}

Пусть в этом методе мы решили использовать некоторый вспомогательный метод класса. В этом случае контекст и потеряется:

class User {
	constructor(name, cities) {
		this.name = name;
		this.cities = cities;
	}
	
	showCities() {
		this.cities.forEach(function(city) {
			console.log(this.#cape(city)); // контекст потерялся 
		});
	}
	
	#cape(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
}

Можно исправить проблему, например, введя стрелочную функцию:

class User {
	constructor(name, cities) {
		this.name = name;
		this.cities = cities;
	}
	
	showCities() {
		this.cities.forEach(city => {
			console.log(this.#cape(city));
		});
	}
	
	#cape(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
} */

/* class Employee {
	constructor(name, salary, coeffs) {
		this.name = name;
		this.salary = salary;
		this.coeffs = coeffs;
	}
	
	getTotal() {
		return this.coeffs.reduce((res, coeff) => {
			return res + this.salary * coeff;
		}, 0);
	}
}

let employee = new Employee('john', 1000, [1.1, 1.2, 1.3]); 

let total = employee.getTotal();

console.log(total); */

// Исходный код метода в ООП в JavaScript

/* Можно получить исходный код метода класса, если обратиться к нему без круглых скобок. Давайте попробуем. Пусть у нас есть следующий класс:

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
}

Создадим объект этого класса:

let user = new User('john');

console.log(user.getName); */

/* class Employee {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

let employee = new Employee('Tata');

console.log(employee.getName); */

// Потеря контекста в коде метода в ООП в JavaScript

/* При использовании исходного кода метода класса может потеряться контекст. Давайте посмотрим на примере. Пусть у нас есть следующий класс:

class User {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

Создадим объект этого класса:

let user = new User('john');

Запишем код метода в переменную:

let func = user.getName;

В момент записи метода в переменную контекст и потерялся. Теперь this внутри кода метода не будет указывать на объект класса. Проверим, вызовем нашу функцию:

console.log(func()); // ошибка

Для решения проблемы можно привязать контекст к функции, например, через bind:

func = func.bind(user);
console.log(func()); // работает */

// Конфликты имен методов и свойств в ООП в JavaScript

/* Имена свойств и методов не должны совпадать, это вызовет конфликт. Давайте посмотрим на примере. Пусть у нас есть следующий класс:

class User {
	name() {
		console.log('method');
	}
}

Создадим объект этого класса:

let user = new User;

Вызовем его метод, пока все будет работать:

user.name(); // работает

А теперь запишем данные в одноименное свойство, затерев тем самым код метода:

user.name = 'str';

user.name(); // ошибка
 
Для избежания подобных конфликтов всегда давайте методам имена-глаголы, а свойствам - имена-существительные. */

/* class Employee {
	constructor(salary) {
		this.salary = salary;
	}
	getSalary() {
		return this.salary + '$';
	}
} */

/* Класс не обязательно должен иметь имя. Могут быть и анонимные классы. Можно к примеру, исходный код класса записать в переменную:

let ArrHelper = class {
    getSum(arr) {

    }
    getAvg(arr) {

    }
}

А можно сразу создать объект класса:

let ArrHelper = new class {
    getSum(arr) {

    }
    getAvg(arr) {

    }
} */

// Классы и модули в ООП в JavaScript

/* Как правило каждый класс располагают в отдельном модуле. При этом имя файла модуля должно соответствовать имени хранимого класса. Давайте поместим наш класс User в соответствующий файл:

export default class User {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

В файле index.js импортируем наш класс:

import User from './User.js';

Теперь в этом файле можно работать с нашим классом:

let user = new User('john'); */

/* import Employee from './Employee.js';

let employee = new Employee('Tata');

console.log(employee.getName()); */

// Классы, модули и наследование в ООП в JavaScript

/* Давайте посмотрим, как наследовать классы, размещенные в модулях. Пусть у нас есть следующий класс:

export default class User {

}

Пусть от этого класса мы будем наследовать другой класс:

export default class Student extends User {

}

В этом случае к классу-потомку нужно подключить класс-родитель:

import User from './User.js';

export default class Student extends User {

} */

/* import Programmer from './Programmer.js';

let programmer = new programmer('Tata');

programmer.setLanguage('JavaScript');

console.log(programmer.getName());
console.log(programmer.getLanguage()); */

// Свойства-аксессоры в ООП в JavaScript

/* Есть два типа свойств объекта.

Первый тип это свойства-данные (data properties). Мы уже знаем, как работать с ними. Все свойства, которые мы использовали до текущего момента, были свойствами-данными.

Второй тип свойств мы ещё не рассматривали. Это свойства-аксессоры (accessor properties). По своей сути это функции, которые используются для присвоения и получения значения, но во внешнем коде они выглядят как обычные свойства объекта.

Свойства-аксессоры создаются с помощью ключевых слов get и set написанных при объявлении методов:

class User {
    get name() {

    }
    set name(name);
}

В результате такого объявления наш класс будет обладать свойством name. При этом при попытке чтения этого свойства будет вызван метод, объявленный через get:

let name = user.name;

При попытке записи будет вызван метод, объявленный через set:

user.name = 'john'; */

/* class Employee {
	get name() {
		console.log('get');
	}
	set name(name) {
		console.log('set');
	}
}

let employee = new Employee;

let name = employee.name;

employee.name = 'Tata';

console.log(name); */

// Геттеры аксессоров в ООП в JavaScript

/* Давайте подробнее разберем применение геттеров свойств-аксессоров. Пусть у нас есть следующий класс с приватным свойством:

class User {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
}

Давайте сделаем в этом классе публичное свойство name, которое можно будет прочитать, но нельзя будет записать:

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
}

Проверим работу. Создадим объект нашего класса, передав ему параметром значение имени:

let user = new User('john');

А теперь прочитаем имя через публичное свойство:

let name = user.name;

console.log(name);

А вот попытка записать имя приведет к ошибке, как мы и добивались:

user.name = 'eric'; */

/* class Employee {
    #name;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
}

let employee = new Employee('Tata');


console.log(employee.name); */

// Сеттеры аксессоров в ООП в JavaScript

/* Давайте теперь кроме геттера сделаем еще и сеттер аксессора:

class User {
	#name;
	
	get name() {
		return this.#name;
	}
	
	set name(name) {
		this.#name = name;
	}
}

Добавим теперь проверку в сеттере:

class User {
    #name;

    set name(name) {
        if (name.length > 0) {
            this.#name = name;
        } else {
            throw new Error('name is incorrect');
        }
    }
    get name() {
        return this.#name;
    }   
}

Создадим объект класса:

let user = new User;

Запишем данные в наше свойство:

user.name = 'john';

Попробуем записать некорректную строку и получим ошибку:

user.name = ''; */

/* class Employee {
    #name;

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        if (name.length > 0) {
            this.#name = name;
        } else {
            throw new Error('name is incorrect');
        }
    }
}

let employee = new Employee('Tata');

console.log(employee.name); */

// Геттеры мнимых свойств в ООП в JavaScript

/* С помощью аксессоров можно создавать мнимые свойства, которых в объекте на самом деле нет. Давайте посмотрим на примере. Пусть у нас есть класс с двумя публичными свойствами:

class User {
	constructor(name, surn) {
		this.name = name;
		this.surn = surn;
	}
}

Давайте сделаем третье свойство, которое будет содержать имя и фамилию. Создадим для этого свойство-аксессор:

class User {
	constructor(name, surn) {
		this.name = name;
		this.surn = surn;
	}
	
	get full() {
		return this.name + ' ' + this.surn;
	}
}

Проверим. Создадим объект класса, передав параметрами имя и фамилию:

let user = new User('john', 'smit');

Выведем значения публичных свойств:

console.log(user.name); // 'john'
console.log(user.surn); // 'smit'

А теперь выведем значение нашего мнимого свойства:

console.log(user.full); // 'john smit' */

// Сеттеры мнимых свойств в ООП в JavaScript

/* Кроме геттеров мнимых свойств можно создавать и их сеттеры. В этом случае внутри сеттера мы должны получить данные, разделить их и записать соответствующие части в нужные публичные свойства.

Давайте попробуем. Реализуем сеттер мнимого свойства full:

class User {
	constructor(name, surn) {
		this.name = name;
		this.surn = surn;
	}
	
	get full() {
		return this.name + ' ' + this.surn;
	}
	
	set full(full) {
		let [name, surn] = full.split(' '); 
		
		this.name = name;
		this.surn = surn;
	}
}

Упростим дестуктуризацию:

class User {
	constructor(name, surn) {
		this.name = name;
		this.surn = surn;
	}
	
	get full() {
		return this.name + ' ' + this.surn;
	}
	
	set full(full) {
		[this.name, this.surn] = full.split(' '); 
	}
}

Создадим объект класса:

let user = new User('john', 'smit');

Запишем данные в наш мнимый сеттер:

user.full = 'eric jons';

Проверим, что свойства объекта поменялись:

console.log(user.name); // 'eric'
console.log(user.surn); // 'jons'
console.log(user.full); // 'eric jons' */