// IMPORT MODULES under test here:
import { 
    greetUsersOverAge60,
    greetUsers,
    addAllAges,
    getAverageCoolFactor,
    getTotalOfEachGender,
    getGenderBreakdownOfFordOwners,
} from '../functions.js';
import customers from './data.js';

const { test, skip } = QUnit;

test('greetUsers', (expect) => {
    const expected = 	
    [
        'Hello Customers Suzi Summerson',
        'Hello Customers Boot Penton',
        'Hello Customers Cacilia Caramuscia',
        'Hello Customers Mattie Mungane',
        'Hello Customers Kathryne Gostling',
        'Hello Customers Cristal Oakman',
        'Hello Customers Mahmud Shingler',
        'Hello Customers Kenny Kepe',
        'Hello Customers Elena Guisby',
        'Hello Customers Irene Kynvin',
        'Hello Customers Debor Lashmar',
        'Hello Customers Christian Churchill',
        'Hello Customers Fawnia Cowdroy',
        'Hello Customers Eli Perigo',
        'Hello Customers Parker Goodboddy',
        'Hello Customers Leeland Bonome',
        'Hello Customers Lowe Driussi',
        'Hello Customers Tracy Chidlow',
        'Hello Customers Dimitri Ochiltree',
        'Hello Customers Sascha Yanin',
        'Hello Customers Emmaline Horribine',
        'Hello Customers Erinna Swires',
        'Hello Customers Erroll Reade',
        "Hello Customers Ilaire O'Codihie",
        'Hello Customers Anatol Gulley',
        'Hello Customers Celestine Teodori',
        'Hello Customers Brandi Sawdon',
        'Hello Customers Atlanta Oneil',
        'Hello Customers Salomone Merkle',
        'Hello Customers Alta Sulter',
        'Hello Customers Marys Allsopp',
        'Hello Customers Marilin Ellacott',
        'Hello Customers Alexandros Cornell',
        'Hello Customers Matti Haller',
        'Hello Customers Henryetta Cheng',
        'Hello Customers Gennie Saura',
        'Hello Customers Sherwynd Wiggans',
        'Hello Customers Thorn McMeekin',
        'Hello Customers Esmaria Moukes',
        'Hello Customers Dietrich Gladebeck',
        'Hello Customers Karol Rosa',
        'Hello Customers Manya Fodden',
        'Hello Customers Casi Waterland',
        'Hello Customers Munroe Walthall',
        'Hello Customers Tannie Sedman'
    ];

    const actual = greetUsers(customers);

    expect.deepEqual(actual, expected);
});


test('greetUsersOverAge60', (expect) => {
    const expected = [
        'Hello Suzi Summerson!',
        'Hello Boot Penton!',
        'Hello Cacilia Caramuscia!',
        'Hello Cristal Oakman!',
        'Hello Kenny Kepe!',
        'Hello Dimitri Ochiltree!',
        "Hello Ilaire O'Codihie!",
        'Hello Anatol Gulley!',
        'Hello Salomone Merkle!',
        'Hello Alta Sulter!',
        'Hello Alexandros Cornell!',
        'Hello Thorn McMeekin!',
        'Hello Esmaria Moukes!',
        'Hello Munroe Walthall!',
        'Hello Tannie Sedman!'
    ];

    const actual = greetUsersOverAge60(customers);

    expect.deepEqual(actual, expected);
});

test('addAllAges', (expect) => {
    const expected = 2125;

    const actual = addAllAges(customers);

    expect.equal(actual, expected);
});


test('getAverageCoolFactor', (expect) => {
    const expected =
    5.088888888888889;

    const actual = getAverageCoolFactor(customers);

    expect.equal(actual, expected);
});

test('getTotalOfEachGender', (expect) => {
    const expected = 	
    {
        'Bigender': 1,
        'Female': 19,
        'Genderqueer': 1,
        'Male': 23,
        'Non-binary': 1
    };

    const actual = getTotalOfEachGender(customers);

    expect.deepEqual(actual, expected);
});

test('getGenderBreakdownOfFordOwners', (expect) => {
    const expected = 	
{
    'Female': 1,
    'Male': 2
};

    const actual = getGenderBreakdownOfFordOwners(customers);

    expect.deepEqual(actual, expected);
});

skip('getGenderBreakdownOfEachCar', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getAllCoolFactorsOfEachCar', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getAverageCoolFactorOfEachCar', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getAverageCoolFactor', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getAverageCoolFactor', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getCoolFactorsByAgeBracket', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getAverageCoolFactorByAgeBracket', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});