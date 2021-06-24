var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
for(let item in library){
    console.log("author "+library[item].author+" title "+library[item].title+" status "+library[item].readingStatus)
}