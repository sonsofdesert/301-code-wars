function abbrevName(name){
    var matches = name.match(/\b(\w)/g);
    var acronym = matches[0].toUpperCase() + '.' + matches[1].toUpperCase();  
     return acronym;
}