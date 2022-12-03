let data=[{name :'Suraj Kumar Singh',
          class : 11,
        Roll_number : 58,
        School :'GPS'},
{       name: 'Akash Kumar Singh',
        Roll_number: 55,
        class : 11,
        School:'Tenderhart'
}
]



 let new_class=data.map((data)=>{
    data.School= 'GPS';
    return data;
})
    
console.log(new_class)