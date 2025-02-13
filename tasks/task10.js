//Задание 1 .
/*
написать метод, который на вход получает объект, а на выходе возвращает число, соответствующее сумме всех числовых полей.
*/
const Obj = {
    a : 1,
    b: 2,
    c: 3,
    d: 0
}

class sumNumericFieldsClass {
   static sumNumericFields(){
        let sum = Obj.a + Obj.b +Obj.c + Obj.d;
        return sum;
    }
}

const sum = sumNumericFieldsClass.sumNumericFields(Obj);
console.log(sum); 
//Задание 2,со звездочкой .
/*
метод возвращает массив с названиями полей, причем эти названия полей отсортированы по убыванию.
Например, для объекта {name: 'Vasya', friends: 5, likes: 19, projects: 7} вернется массив [likes, projects, friends].
*/

const Obj2 = {name: 'Vasya', friends: 5, likes: 19, projects: 7};

class ReturnArrayClass {
    static ReturnArray(obj) {
        const numericFields = [];

        for (const key in obj) {
            if (typeof obj[key] === 'number') {
                numericFields.push({ name: key, value: obj[key] });
            }
        }

        numericFields.sort((a, b) => b.value - a.value);

        const sortedFieldNames = numericFields.map(item => item.name);

        return sortedFieldNames;
    }
}

const result = ReturnArrayClass.ReturnArray(Obj2);
console.log(result);