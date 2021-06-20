// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
let user = {};
function createUser (first, last) {
    first = user.firstName = first;
    last = user.lastName = last;

    return user
};


function setAge (obj, age) {
    age = obj.age = age;
    return obj
}

function incrementAge (obj) {
    obj.age++
    return obj
}

function fixCar (obj) {
     obj.needsMaitenance = false;
    return obj
}

let student = {
    grades: []
}

function addGrades (student, newgrades) {
   student.grades = student.grades.concat(newgrades)
    return student
}

function getDataType (obj, key) {
    return typeof obj[key]
}

function addTodo (todo, newTodo) {
    todo.push(newTodo);
    return todo
}

function addSong (playlist, song) {
playlist.songs.push(song);
playlist.duration += songs.duration;

return playlist
}

function updateReportCard ( rc, ng) {
    rc.grades.push(ng);
    for (let i = 0; i < rc.grades.length; i++) {
        if (rc.grades[i] < rc.grades[i]) {
            rc.lowestGrade = rc.grades[i]
        };
        if (rc.grades[i] > rc.grades[i]) {
            rc.higehestGrade = rc.grades[i]
        };



        
    }
}





// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
