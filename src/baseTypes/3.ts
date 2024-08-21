let some: unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
    str = some;
} else {
    // Можемо обробити випадок, коли 'some' не є рядком
    // Наприклад:
    str = 'Default string';
    // або обробка помилки
}


export {};