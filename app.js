const notes = require("./notes");
const chalk = require('chalk');
// const validator = require('validator');
// const notes = getNotes();
// console.log(notes);
// console.log(chalk.green.bgBlue.bold('Success'))
// console.log(validator.isEmail('hdhhhedhdh@gmail.com'))
const yargs = require('yargs');
const { title, argv } = require("process");

yargs.command({
    command: 'add',
    describe: 'adding new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.addNotes(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'removing note',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'listing note',
    handler() {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'reading note',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse();