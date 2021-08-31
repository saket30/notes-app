const fs = require('fs')
const chalk = require('chalk')
const getNotes = function (){
    return "your notes...."
}
const addNotes = (title,body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })
    // const duplicateNotes = notes.filter((note)=> note.title === title)
    const duplicateNotes = notes.find((note)=> note.title === title)
    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Notes added successfully!!')
    }
    else{
        console.log('Note title already taken use a different one')
    }
    
}
const saveNotes = (notes)=>{
    const  dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
    console.log('Data saved successfully!!!')
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }

}
const removeNotes = (title) => {
    const notes = loadNotes()
    // const keepNotes = notes.filter(function(note){
    //     return note.title !== title
    // })
    const keepNotes = notes.filter((note)=> note.title !== title)
    if(notes.length>keepNotes.length){
        console.log(chalk.yellow('Note removed'))
    saveNotes(keepNotes)
    }
    else{
        console.log(chalk.red('No note found with this title! to remove'))
    }

}
const listNotes = () => {
    console.log(chalk.yellowBright('Your Notes.....'))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
        
    });

}
const readNotes = (title) => {
    const notes = loadNotes()
    const findTitle = notes.find((note) => note.title === title)
    if(findTitle){
        console.log(chalk.inverse(findTitle.title))
        console.log(findTitle.body)
    }
    else{
        console.log(chalk.red('No Note found with this title'))
    }
}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes,
};