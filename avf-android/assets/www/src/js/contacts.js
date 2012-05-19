// Add to Contacts

// Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function onDeviceReady() {
        // create
        var contact = navigator.contacts.create();
        contact.displayName = "Plumber";
        contact.nickname = "Plumber";       //specify both to support all devices
        var name = new ContactName();
        name.givenName = "Jane";
        name.familyName = "Doe";
        contact.name = name;

        // save
        contact.save(onSaveSuccess,onSaveError);
    }

    // onSaveSuccess: Get a snapshot of the current contacts
    //
    function onSaveSuccess(contact) {
        alert("Save Success");
    }

    // onSaveError: Failed to get the contacts
    //
    function onSaveError(contactError) {
        alert("Error = " + contactError.code);
    }