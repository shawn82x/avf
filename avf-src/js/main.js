// Visual Frameworks 1110; Project 4

// Author: Shawn R. Morgart

//Wait until the DOM is ready.
// gebi(document).bind('pageinit', function() {
 $('#page3').live( 'pageinit',function(event){
//    alert( 'This page was just enhanced by jQuery Mobile!' );



    //getElementById Function
    function gebi(x){
        var theElement = document.getElementById(x);
        return theElement;
    }

    //Create select field element and populate with options
    function chooseGroup() {
        var formTag = document.getElementsByTagName("form"),
            selectLi = gebi("select"),
            makeSelect = document.createElement("select");
            makeSelect.setAttribute("id", "groups");
        for(var i=0, j=taskGroup.length; i<j; i++){
            var makeOption = document.createElement("option");
            var optText = taskGroup[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    //Find value of selected radio button.
    function getRadioRepstyle(){
        var radios = document.forms[0].repStyle;
        for (var i=0; i<radios.length; i++){
            if(radios[i].checked){
                repStyleValue = radios[i].value;
            }
        }
    }
    
    function getRadioChannel(){
        var radios2 = document.forms[0].channel;
        for (var i=0; i<radios2.length; i++){
            if(radios2[i].checked){
                channelValue = radios2[i].value;
            }
        }
    }
    
    function getRadioConvincer(){
        var radios3 = document.forms[0].convincer;
        for (var i=0; i<radios3.length; i++){
            if(radios3[i].checked){
                convincerValue = radios3[i].value;
            }
        }
    }
    
    function getRadioSocialstyle(){
        var radios4 = document.forms[0].socialstyle;
        for (var i=0; i<radios4.length; i++){
            if(radios4[i].checked){
                socialstyleValue = radios4[i].value;
            }
        }
    }
    
   function toggleControls(n){
        switch(n){
            case "on":
                gebi('contactForm').style.display = "none";
                gebi('clearLink').style.display = "inline";
                gebi('displayLink').style.display = "none";
                gebi('addNew').style.display = "inline";
                break;
            case "off":
                gebi('contactForm').style.display = "block";
                gebi('clearLink').style.display = "inline";
                gebi('displayLink').style.display = "inline";
                gebi('addNew').style.display = "none";
                gebi('items').style.display = "none";
                break;
            default:
                return false;
        }
    }

    function storeData(key) {
        // If there is no key, this means this is a brand new item and we need a  new key.
        if (!key){
            var id  = Math.floor(Math.random()*1000000001);
        } else{
        //Set the id to the existing key we're editing so that it will save over the data.
        //This is the same key passed from the editSubmit event handler...
        //to the validate function, then passed here, into the storeData function.
            id = key;
        }

        // Gather form field values and store in an object.
        // Object properties contain array with the form label an input value.
        getRadioRepstyle();
        getRadioChannel();
        getRadioConvincer();
        getRadioSocialstyle();
        
        var item            = {};
            item.groups     = ["Type of Account:", gebi("groups").value];
            item.fname      = ["First Name:", gebi("fname").value];
            item.lname      = ["Last Name:", gebi("lname").value];
            item.street     = ["Street:", gebi("street").value];
            item.city       = ["City:", gebi("city").value];
            item.state      = ["State:", gebi("state").value];
            item.zip        = ["Zip:", gebi("zip").value];
            item.phone      = ["Phone:", gebi("phone").value];
            item.email      = ["Email:", gebi("email").value];
            item.lineBreak  = [" ", lineBreak];
            item.rep        = ["Representational Style:", repStyleValue];
            item.lineBreak2 = [" ", lineBreak];
            item.direction  = ["Direction: toward vs. away:", gebi("direction").value];
            item.source     = ["Source: internal vs. external:", gebi("source").value];
            item.reason     = ["Reason: options vs. procedures:", gebi("reason").value];
            item.level      = ["Level: proactive vs. reactive:", gebi("level").value];
            item.scope      = ["Scope big-picture vs. details:", gebi("scope").value];
            item.change     = ["Change sameness vs. difference:", gebi("change").value];
            item.lineBreak3 = [" ", lineBreak];
            item.chan       = ["Channel:", channelValue];
            item.conv       = ["Convincer:", convincerValue];
            item.lineBreak4 = [" ", lineBreak];
            item.theor      = ["Theoretical:", gebi("theor").value];
            item.util       = ["Utilitarian:", gebi("util").value];
            item.aesth      = ["Aesthetic:", gebi("aesth").value];
            item.soci       = ["Social:", gebi("soci").value];
            item.indiv      = ["Individualistic:", gebi("indiv").value];
            item.trad       = ["Traditional:", gebi("trad").value];
            item.lineBreak5 = [" ", lineBreak];
            item.social     = ["Social Style:", socialstyleValue];
            item.lineBreak6 = [" ", lineBreak];
            item.dom        = ["Dominance:", gebi("dom").value];
            item.inf        = ["Influencing:", gebi("inf").value];
            item.stead      = ["Steadiness:", gebi("stead").value];
            item.comp       = ["Compliance:", gebi("comp").value];
            
        // Save data into Local Storage: Use Stringify to convert our object to a string.
        localStorage.setItem(id, JSON.stringify(item));
        alert("Contact Saved!");
    }
    
    function getData(){
        toggleControls("on");
        if(localStorage.length === 0){
            autoFillData();
            alert("There is no data in Local Storage. Default data has been added.");
        }
        //Write Data from Local Storage to the browser.
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement('ul');
        makeDiv.appendChild(makeList);
//        document.body.appendChild(makeDiv);
        var myVar= gebi('dataHere')
        myVar.appendChild(makeDiv);
        gebi('items').style.display = "block";
        for(var i=0, len=localStorage.length; i<len; i++){
            var makeli = document.createElement('li');
            var linksLi = document.createElement("li");
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            // Convert the string from local storage value back to an object by using JSON.parse().
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeli.appendChild(makeSubList);
            // getImage(obj.group[1], makeSubList);
            for(var n in obj){
                var makeSubli = document.createElement('li');
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0]+" "+obj[n][1];
                makeSubli.innerHTML = optSubText;
                makeSubList.appendChild(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi);     //Create edit and delete buttons/link for each item in local storage.
        }console.log(makeSubList);
    }
    
/*    // Get the image for the correct category
    function getImage(catName, makeSubList){
        var imageLi = document.createElement('li');
        makeSubList.appendChild(imageLi);
        var newImg = document.createElement('img');
        var setSrc = newImg.setAttribute("src", "images/"+ catName + ".png");
        imageLi.appendChild(newImg);
    }
*/    
    // JSON Object which will auto populate local storage.
    function autoFillData(){
        var json = {
            "testClient1": {
                "group":    ["Group:", "Residential"],
                "fname":    ["First Name:", "John"],
                "lname":    ["Last Name:", "Doe"],
                "street":   ["Street:", "1234 N. Main St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "AB"],
                "zip":      ["Zip:", "98765"],
                "phone":    ["Phone:", "123-456-7890"],
                "email":    ["Email:", "john@doe.com"]
            },
            "testClient2": {
                "group":    ["Group:", "Commercial"],
                "fname":    ["First Name:", "Brian"],
                "lname":    ["Last Name:", "Boru"],
                "street":   ["Street:", "9876 E. Sandusky St."],
                "city":     ["City:", "Anytown"],
                "state":    ["State", "CD"],
                "zip":      ["Zip:", "45321"],
                "phone":    ["Phone:", "987-654-3210"],
                "email":    ["Email:", "brian@boruma.com"]
            }
        
        };
        // Store the JSON Object into Local Storage
        for(var n in json){    
            var id                  = Math.floor(Math.random()*1000000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }
    }
    
    //Make Item Links... create the edit and delet links for each stored item.
    function makeItemLinks(key, linksLi){
        //add edit single item link
        var editLink = document.createElement('a');
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Client";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink);
        
        //add line-break
        var breakTag = document.createElement('br');
        linksLi.appendChild(breakTag);
     
        //add delete item link
        var deleteLink = document.createElement('a');
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Client";
        deleteLink.addEventListener("click", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);
    }
    
    function editItem(){
        //Grab the data from our item from Local Storage.
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);
        
        // Show the form
        toggleControls("off");
        
        //populate the form fields with current localStorage values.
        gebi("groups").value   = item.group[1];
        gebi("fname").value    = item.fname[1];
        gebi("lname").value    = item.lname[1];
        gebi("street").value   = item.street[1];
        gebi("city").value     = item.city[1];
        gebi("state").value    = item.state[1];
        gebi("zip").value      = item.zip[1];
        gebi("phone").value    = item.phone[1];
        gebi("email").value    = item.email[1];
        
//      Radio buttons regarding "Representational Style"
        var radios1 = document.forms[0].repStyle;
        for(var i=0; i<radios1.length; i++){
            if(radios1[i].value == "auditory" && item.rep[1] == "auditory"){
                radios1[i].setAttribute("checked", "checked");
            }else if(radios1[i].value == "visual" && item.rep[1] == "visual"){
                radios1[i].setAttribute("checked", "checked");
            }else if(radios1[i].value == "kines" && item.rep[1] == "kines"){
                radios1[i].setAttribute("checked", "checked");
            }
        };
        
        gebi("direction").value    = item.direction[1];
        gebi("source").value       = item.source[1];
        gebi("reason").value       = item.reason[1];
        gebi("level").value        = item.level[1];
        gebi("scope").value        = item.scope[1];
        gebi("change").value       = item.change[1];

//      Radio buttons regarding "Channel"
        var radios2 = document.forms[0].channel;
        for(var i=0; i<radios2.length; i++){
            if(radios2[i].value == "see" && item.channel[1] == "see"){
                radios2[i].setAttribute("checked", "checked");
            }else if(radios2[i].value == "hear" && item.channel[1] == "hear"){
                radios2[i].setAttribute("checked", "checked");
            }else if(radios2[i].value == "read" && item.channel[1] == "read"){
                radios2[i].setAttribute("checked", "checked");
            }else if(radios2[i].value == "do" && item.channel[1] == "do"){
                radios2[i].setAttribute("checked", "checked");
            }
        };
        
//      Radio buttons regarding "Convincers"
        var radios3 = document.forms[0].convincer;
        for(var i=0; i<radios3.length; i++){
            if(radios3[i].value == "overtime" && item.convincer[1] == "overtime"){
                radios3[i].setAttribute("checked", "checked");
            }else if(radios3[i].value == "repetition" && item.convincer[1] == "repetition"){
                radios3[i].setAttribute("checked", "checked");
            }else if(radios3[i].value == "automatic" && item.convincer[1] == "automatic"){
                radios3[i].setAttribute("checked", "checked");
            }else if(radios3[i].value == "consistent" && item.convincer[1] == "consistent"){
                    radios3[i].setAttribute("checked", "checked");
            }
        };


        gebi("theor").value        = item.theor[1];
        gebi("util").value         = item.util[1];
        gebi("aesth").value        = item.aesth[1];
        gebi("soci").value         = item.soci[1];
        gebi("indiv").value        = item.indiv[1];
        gebi("trad").value         = item.trad[1];


//      Radio buttons regarding "Social Style"
        var radios4 = document.forms[0].socialstyle;
        for(var i=0; i<radios4.length; i++){
            if(radios4[i].value == "driver" && item.socialstyle[1] == "driver"){
                radios4[i].setAttribute("checked", "checked");
            }else if(radios4[i].value == "expressive" && item.socialstyle[1] == "expressive"){
                radios4[i].setAttribute("checked", "checked");
            }else if(radios4[i].value == "amiable" && item.socialstyle[1] == "amiable"){
                radios4[i].setAttribute("checked", "checked");
            }else if(radios4[i].value == "analytical" && item.socialstyle[1] == "analytical"){
                radios4[i].setAttribute("checked", "checked");
            }
        };


        gebi("dom").value          = item.dom[1];
        gebi("inf").value          = item.inf[1];
        gebi("stead").value        = item.stead[1];
        gebi("comp").value         = item.comp[1];
       
        // Remove the initial listener from the input "save contact" button.
        save.removeEventListener("click", storeData);
        //Change Submit Button Value to Edit Button
        gebi('submit').value = "Edit Client";
        var editSubmit = gebi('submit');
        //Save the key value established in this function as a property of the editSubmit event
        //so we can use that value when we save the data we edited.
        editSubmit.key = this.key;
        editSubmit.addEventListener("click", validate);
        
    }
    
    function deleteItem(){
        var ask = confirm("Are you sure you want to delete this contact?");
        if (ask){
            localStorage.removeItem(this.key);
            window.location.reload();
        }else{
            alert("Contact was NOT deleted.")
        }
    }
    
    function clearLocal(){
        if(localStorage.length === 0){
            alert("There is no data to clear.")
        }else{
            localStorage.clear();
            alert("All contacts are deleted!");
            window.location.reload();
            return false;
        }
    }
    
    function validate(e){
        //Define the elements I want to check
        var getGroup    = gebi("groups");
        var getFname    = gebi("fname");
        var getLname    = gebi("lname");
        var getStreet   = gebi("street");
        var getCity     = gebi("city");
        var getPhone    = gebi("phone");
        var getEmail    = gebi("email");
        
        //reset error messages.
        errMsg.innerHTML = "";
            getGroup.style.border   = "1px solid black";
            getFname.style.border   = "1px solid black";
            getLname.style.border   = "1px solid black";
            getStreet.style.border  = "1px solid black";
            getCity.style.border    = "1px solid black";
            getPhone.style.border   = "1px solid black";
            getEmail.style.border   = "1px solid black";

        
        //Get Error messages
        var messageAry = [ ];
        // Group validation
        if(getGroup.value === "-- Choose --"){
            var groupError = "Please choose an Account Type!";
            getGroup.style.border = "1px solid red";
            messageAry.push(groupError);
        }
        
        // First Name validation
        if(getFname.value === ""){
            var fNameError = "Please enter a first name!";
            getFname.style.border = "1px solid red";
            messageAry.push(fNameError);
        }
        
        // Last name validation
        if(getLname.value === ""){
            var lNameError = "Please enter a Last name!";
            getLname.style.border = "1px solid red";
            messageAry.push(lNameError);
        }
        
        // Street validation
        if(getStreet.value === ""){
            var streetError = "Please enter a Street!";
            getStreet.style.border = "1px solid red";
            messageAry.push(streetError);
        }
        
        // City validation
        if(getCity.value === ""){
            var cityError = "Please enter a City!";
            getCity.style.border = "1px solid red";
            messageAry.push(cityError);
        }
        
        // Phone validation
        if(getPhone.value === ""){
            var phoneError = "Please enter a Phone number!";
            getPhone.style.border = "1px solid red";
            messageAry.push(phoneError);
        }
        
        // Email validation
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+gebi/;
        if(!(re.exec(getEmail.value))){
            var emailError = "Please enter a valid email address!";
            getEmail.style.border = "1px solid red";
            messageAry.push(emailError);
        }
        
        //If there were errors, display them on the screen.
        if(messageAry.length >= 1){
            for(var i=0, j=messageAry.length; i<j; i++){
                var txt = document.createElement('li');
                txt.innerHTML = messageAry[i];
                errMsg.appendChild(txt);
            }
            
            e.preventDefault();
            return false;
            
        }else{
            //If all is OK, save our data! Send the key value (that came from the edit function)
            //Remember this key value was passed through the editSubmit eventListener...
            storeData(this.key);
        }
      
    }
    
    
    //Variable defaults
    var taskGroup = ["-- Choose --", "Residential", "Commercial", "Medical", "Upgrade"];
     //   taskType;
    var lineBreak = "----------------------------------------";
    chooseGroup();
    errMsg = gebi('errors');
        
        
    //Set Link & Submit Click Events

    
    var displayLink = gebi("displayLink");
    displayLink.addEventListener("click", getData);
    
    var clearLink = gebi("clearLink");
    clearLink.addEventListener("click", clearLocal);
      
    var save = gebi("submit");
    save.addEventListener("click", validate);
    
    

});

 