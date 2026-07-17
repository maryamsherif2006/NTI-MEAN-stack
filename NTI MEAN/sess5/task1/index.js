var items = [];
items.push(1);
for(var i = 0;i<items.length;i++){
    console.log(items[i]);
    
}
items[0] = 2;
items.splice(0,1);
