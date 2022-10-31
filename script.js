function addNewWeField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");

    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode , weAddButtonOb);


}
function addNewAqField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode , aqAddButtonOb);
}
function addNewLangField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("langField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter Here");

    let langOb = document.getElementById("lang")
    let langAddButtonOb = document.getElementById("langAddButton");
    langOb.insertBefore(newNode , langAddButtonOb);
}
function addNewSkField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter Here");

    let skOb = document.getElementById("skill")
    let skAddButtonOb = document.getElementById("skAddButton");
    skOb.insertBefore(newNode , skAddButtonOb);
}
//this will generate the cv
function generateCV()
{
    //name
    let namefield = document.getElementById("nameField").value;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = namefield;
    
    //email
    let emailfield =  document.getElementById("emailField").value;
    let emailT = document.getElementById("emailT");
    emailT.innerHTML = emailfield;
    
    //contact
    let confield =  document.getElementById("conField").value;
    let conT = document.getElementById("conT");
    conT.innerHTML = confield;
    
    //address
    let adrfield = document.getElementById("adrField").value;
    let addT = document.getElementById("addT");
    addT.innerHTML = adrfield;
    
    //linkedin
    let linkinfield = document.getElementById("linkinField").value;
    let linkT = document.getElementById("linkT");
    linkT.innerHTML = linkinfield;
    
    //instagram
    let instafield = document.getElementById("instaField").value;
    let instaT = document.getElementById("instaT");
    instaT.innerHTML = instafield;
    
    //github
    let gitfield = document.getElementById("gitField").value;
    let githT = document.getElementById("githT");
    githT.innerHTML = gitfield;

    //objective
    let objField = document.getElementById("objField").value;
    let objT = document.getElementById("objT");
    objT.innerHTML = objField;

    //work experience
    let wes = document.getElementsByClassName("weField");

    let str = '';

    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`
    }
    document.getElementById("weT").innerHTML = str;

    //languages
    let langs = document.getElementsByClassName("langField");

    let lstr = '';

    for(let e of langs)
    {
        lstr = lstr + `<li> ${e.value} </li>`
    }
    document.getElementById("langT").innerHTML = lstr;

    //skills
    let skills = document.getElementsByClassName("skField");

    let sstr = '';

    for(let e of skills)
    {
        sstr = sstr + `<li> ${e.value} </li>`
    }
    document.getElementById("skT").innerHTML = sstr;

    //academic qualification
    let aqs = document.getElementsByClassName("aqField");

    let astr = '';

    for(let e of aqs)
    {
        astr = astr + `<li> ${e.value} </li>`
    }
    document.getElementById("aqT").innerHTML = astr;

    //form or template hide and show
    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-temp").style.display="block";
}
//this will print the cv
function printCV()
{
    window.print();
}