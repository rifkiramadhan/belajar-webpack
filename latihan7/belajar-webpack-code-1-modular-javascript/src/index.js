require('./vendor');
import _ from  'lodash';
import css from './style.scss';
import { run } from './app/app';
import { AlertService } from './app/alert.service';
import { CalculatorService } from './app/calculator.service';
import { JokesService } from './app/jokes.service';

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);

console.log(_.toUpper('Hello from index.js'));

const mahasiswa = [
    {nama:  'Sandhika Galih', email: 'sandhika@gmail.com', jurusan: 'Teknik Informatika'},
    {nama:  'Doddy Ferdiansyah', email: 'doddy@gmail.com', jurusan: 'Teknik Mesin'},
    {nama:  'Erik', email: 'erik@gmail.com', jurusan: 'Teknik Informatika'},
];

const mhs = _.find(mahasiswa, {nama: 'Doddy Ferdiansyah'});

console.log(mhs);
