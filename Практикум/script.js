// Класс Circle в ООП в JavaScript

/* class Circle {
    #radius;

    constructor(radius) {
        this.#radius = radius;
    }

    getArea() {
        return Math.PI * this.#radius ** 2;
    }

    getCircumference() {
        return 2 * Math.PI * this.#radius;
    }
}

let circle = new Circle(5);

console.log(`Площадь: ${circle.getArea().toFixed(2)}`);
console.log(`Длина окружности: ${circle.getCircumference().toFixed(2)}`); */

// Класс Rectangle в ООП в JavaScript

/* class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getSquare() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    getRatio() {
        return this.getSquare() / this.getPerimeter();
    }
}

let rect = new Rectangle(10, 5);

console.log(rect.getSquare());
console.log(rect.getPerimeter());
console.log(rect.getRatio().toFixed(2)); */

// Класс Text в ООП в JavaScript

/* class Text {
    constructor(text) {
        this.text = text;
    }

    getLength() {
        return this.text.length;
    }

    getLettersCount() {
        let count = 0;
        for (let char of this.text) {
            if (char.toLowerCase() !== char.toUpperCase()) {
                count++;
            }
        }
        return count;
    }

    getSpaceCount() {
        let count = 0;
        for (let char of this.text) {
            if (char === ' ') {
                count++;
            }
        }
        return count;
    }

    getLengthWithoutSpaces() {
        return this.getLength() - this.getSpaceCount();
    }

    getWords() {
        return this.text.split(' ').filter(word => word !== '');
    }

    getSentences() {
        return this.text.split('.')
            .map(sentence => sentence.trim())
            .filter(sentence => sentence !== '');
    }
}

let txt = new Text("Привет! Меня зовут Тата. А тебя?");
console.log(txt.getLength());  
console.log(txt.getSpaceCount());
console.log(txt.getWords());
console.log(txt.getSentences()); */

// Класс Period в ООП в JavaScript

/* class Period {
    constructor(start, end) {
        let time1 = new Date(start).getTime();
        let time2 = new Date(end).getTime();

        this._diffMs = Math.abs(time2 - time1);
    }

    getSeconds() {
        return this._diffMs / 1000;
    }

    getMinutes() {
        return this._diffMs / (1000 * 60);
    }

    getHours() {
        return this._diffMs / (1000 * 60 * 60);
    }

    getDays() {
        return this._diffMs / (1000 * 60 * 60 * 24);
    }
}

let period = new Period('2024-01-01T10:00:00', '2024-01-03T12:30:45');

console.log('Секунды:', period.getSeconds()); 
console.log('Минуты:', period.getMinutes());
console.log('Часы:', period.getHours());
console.log('Дни:', period.getDays()); */

// Класс Zate в ООП в JavaScript

/* class Zate {
    constructor(year, month, day) {
        this.date = new Date(year, month - 1, day);
    }

    getYear() {
        return this.date.getFullYear();
    }

    getMonth() {
        return this.date.getMonth() + 1;
    }

    getDay() {
        return this.date.getDate();
    }

    getDayOfWeek() {
        return this.date.getDay();
    }

    getDayOfWeekName() {
        const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        return days[this.date.getDay()];
    }

    getMonthName() {
        const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        return months[this.date.getMonth()];
    }
}

let zate = new Zate(1997, 11, 7);

console.log('Год:', zate.getYear());
console.log('Месяц:', zate.getMonth());
console.log('День:', zate.getDay());
console.log('День недели (число):', zate.getDayOfWeek()); 
console.log('День недели (название):', zate.getDayOfWeekName());
console.log('Месяц (название):', zate.getMonthName()); */

// Класс ZateExt в ООП в JavaScript

/* class Zate {
    constructor(year, month, day) {
        this.date = new Date(year, month - 1, day);
    }

    getYear() {
        return this.date.getFullYear();
    }

    getMonth() {
        return this.date.getMonth() + 1;
    }

    getDay() {
        return this.date.getDate();
    }

    getDayOfWeek() {
        return this.date.getDay();
    }

    getDayOfWeekName() {
        const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        return days[this.date.getDay()];
    }

    getMonthName() {
        const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        return months[this.date.getMonth()];
    }
}

class ZateExt extends Zate {
    constructor(year, month, day) {
        super(year, month, day);
    }

    addYears(years) {
        this.date.setFullYear(this.date.getFullYear() + years);
    }
   
    subYears(years) {
        this.addYears(-years);
    }

    addMonths(months) {
        this.date.setMonth(this.date.getMonth() + months);
    }
    
    subMonths(months) {
        this.addMonths(-months);
    }

    addDays(days) {
        this.date.setDate(this.date.getDate() + days);
    }

    subDays(days) {
        this.addDays(-days);
    }
}

let z = new ZateExt(1997, 11, 7);

z.addMonths(2);
console.log(z.getMonth(), z.getYear());

z.subDays(10);
console.log(z.getDay(), z.getMonth());

z.subYears(1);
console.log(z.getDay(), z.getMonth(), z.getYear()); */

// Класс Month в ООП в JavaScript

/* class Month {
    constructor(month) {
        this.month = month;
        this._refYear = 2024;
    }

    getMonth() {
        return this.month;
    }

    getMonthName() {
        const names = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
                       'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        return names[this.month - 1];
    }

    getLastDay() {
        return new Date(this._refYear, this.month, 0).getDate();
    }

    getFirstDayOfWeek() {
        return new Date(this._refYear, this.month - 1, 1).getDay();
    }

    getLastDayOfWeek() {
        return new Date(this._refYear, this.month, 0).getDay();
    }
}

let m = new Month(11);

console.log('Номер:', m.getMonth());
console.log('Название:', m.getMonthName());
console.log('Последний день:', m.getLastDay());
console.log('1-е число (день недели):', m.getFirstDayOfWeek());
console.log('Последнее число (день недели):', m.getLastDayOfWeek()); */

// Класс Store в ООП в JavaScript

/* Давайте реализуем класс Store, который будет представлять собой оболочку над локальным хранилищем и позволит легко сохранять и изменять в нем хранящиеся структуры данных.

Давайте посмотрим, как мы будем работать с описанным классом. Для начала создадим его объект:

let store = new Store;

Теперь сохраним данные с заданным ключом:

store.set('key', {a: 1, b: 2, c: 3}); 

Получим эти данные по ключу:

let res = store.get('key');

console.log(res); // {a: 1, b: 2, c: 3}

Получим часть сохраненной структуры, указав несколько ключей через точку:

let res = store.get('key.a');

console.log(res); // 1

Получим другую часть по сложному ключу:

let res = store.get('key.b');

console.log(res); // 2 */

/* class Store {
    constructor() {
        this._data = {};
    }

    set(key, value) {
        if (key.includes('.')) {
            const parts = key.split('.');
            const mainKey = parts[0];
            const subKeys = parts.slice(1);
            
            if (!this._data[mainKey]) {
                this._data[mainKey] = {};
            }
            
            let current = this._data[mainKey];
            for (let i = 0; i < subKeys.length - 1; i++) {
                const k = subKeys[i];
                if (!current[k]) current[k] = {};
                current = current[k];
            }
            
            current[subKeys[subKeys.length - 1]] = value;
        } else {
            this._data[key] = value;
        }
    }

    get(key) {
        if (key.includes('.')) {
            const parts = key.split('.');
            const mainKey = parts[0];
            const subKeys = parts.slice(1);
            
            if (!this._data[mainKey]) return undefined;
            
            let result = this._data[mainKey];
            for (const subKey of subKeys) {
                if (result === undefined || result === null) return undefined;
                result = result[subKey];
            }
            return result;
        } else {
            return this._data[key];
        }
    }

    update(key, changes) {
        const current = this.get(key);
        if (current === undefined) return false;
        
        const updated = { ...current, ...changes };
        this.set(key, updated);
        return true;
    }

    delete(key) {
        if (key.includes('.')) {
            const parts = key.split('.');
            const mainKey = parts[0];
            const subKeys = parts.slice(1);
            
            if (!this._data[mainKey]) return false;
            
            let current = this._data[mainKey];
            for (let i = 0; i < subKeys.length - 1; i++) {
                current = current[subKeys[i]];
                if (!current) return false;
            }
            
            delete current[subKeys[subKeys.length - 1]];
        } else {
            delete this._data[key];
        }
        return true;
    }
}

let store = new Store();

store.set('key', {a: 1, b: 2, c: 3});

let res = store.get('key');
console.log(res);

res = store.get('key.a');
console.log(res);

res = store.get('key.b');
console.log(res);

store.update('key', {a: 10, d: 4});
console.log(store.get('key.a'));
console.log(store.get('key.d'));

store.delete('key.c');
console.log(store.get('key')); */
