### `buildfire.dialog`

**Dialog** is used to show the dialogs in app and control panel. Whether you want to display an alert that needs to grab users attention, ask for a confirmation or perform a more complex operation inside a dialog window, `buildfire.dialog` has all of it covered.
This is a built-in API that allows your control or widget to use built-in dialogs.

### Methods
#### `alert(options, callback)` abc
The alert method displays an alert popup with a specified message and an OK button. An alert popup is often used if you want to make sure information comes through to the user.
  * `options`: object
    * `title`: string (optional), by default 'Alert '
    * `subtitle`: string (optional)
    * `message`: string
    * `isMessageHTML`: boolean (optional), specifies whether message should be rendered as [sanitized](https://github.com/BuildFire/sdk/wiki/How-to-use-Dialogs#notes) html instead of plaintext, by default false
    * `okButtonText`: string (optional), by default 'Ok'
  * `callback(err, data)`: callback function after the end user clicked on button. Data is always undefined since there is only one button that can be clicked. 

#### Examples
> Minimal usage
```javascript
buildfire.dialog.alert({
    message: "You don't have permission to access this section!"
})
```
> More customisation
```javascript
buildfire.dialog.alert({
    title: "Access Denied!",
    subtitle: "Operation not allowed!",
    message: "You don't have permission to access this section!"
})
```

> Example with html and callback
```javascript
buildfire.dialog.alert({
    title: "Access Denied!",
    subtitle: "Operation not allowed!",
    message: `You don't have permission to access this section! Ask your site administrator to enable this for you! More info <a href="#">here</a>`,
    isMessageHTML: true
}, (err, data) => {
    if(err) console.error(err);

    buildfire.analytics.trackAction("access-denied")
})
```


#### `confirm(options, callback)`
The confirm method displays a confirm dialog with a specified message, along with a Confirm and a Cancel button. A confirm dialog is often used if you want the user to verify or accept something. Confirm dialog can not be dismissed by clicking on backdrop and will force user to either click Confirm or Cancel button.
  * `options`: object
    * `title`: string (optional), by default 'Are you sure?'
    * `subtitle`: string (optional)
    * `message`: string
    * `isMessageHTML`: boolean (optional), specifies whether message should be rendered as [sanitized](https://github.com/BuildFire/sdk/wiki/How-to-use-Dialogs#notes) html instead of plaintext, by default false
    * `confirmButton`: object (optional)
        * `text`: string (optional), button text, by default the value is `Confirm`
        * `type`: string (optional), used to show the button style, by default the value is 'primary'. types available: `default`, `primary`, `success`, `info`, `warning`, `danger`
    * `cancelButtonText`: string (optional), by default "Cancel"
  * `callback(err, data)`: callback function after the end user clicked on button. Data contains either true or false indicating if confirm button was clicked.

#### Examples
> Minimal example
```javascript
buildfire.dialog.confirm({
    message: "Are you sure you want to go back? Your edits might not be saved."
}, (err, data) => {
    if(err) console.error(err);
    
    if(data) {
        //Go back
    } else {
        //Prevent action
    }
})
```

> Custom confirm button
```javascript
buildfire.dialog.confirm({
    message: "Are you sure you want to delete this item.",
    confirmButton: {
        text: "Yes",
        type: "danger"
    }
}, (err, data) => {
    if(err) console.error(err);
    
    if(data) {
        //Delete item
    } else {
        //Prevent action
    }
})
```

#### `show(options, callback)`
This function is the most advanced one and allows user full control over dialog. It can be useful when there is more than one possible feedback option from user.
  * `options`: object
    * `title`: string
    * `subtitle`: string (optional)
    * `message`: string
    * `isMessageHTML`: boolean (optional), specifies whether message should be rendered as [sanitized](https://github.com/BuildFire/sdk/wiki/How-to-use-Dialogs#notes) html instead of plaintext, by default false
    * `showCancelButton`: boolean (optional), specifies whether cancel button will be shown, by default false
    * `cancelButtonText`: string (optional), by default "Cancel"
    * `forceAction`: boolean (optional), if true user is forced to click one of the buttons to dismiss modal, by default false
    * `actionButtons`: array of objects
        * `text`: string
        * `type`: string (optional), used to show the button style, by default the value is 'primary'. types available: `default`, `primary`, `success`, `info`, `warning`, `danger`
        * `action`: function, action to be called when the button is clicked
  * `callback(err, data)`: callback function after the end user clicked on button. Data contains the selected button object ex: `{text:"button text", type:'button type', action: <function>}`

#### Example
```javascript
buildfire.dialog.show({
    title: "Couldn't import user",
    subtitle: "User already exists",
    message: "The user with email <b>john@example.com</b> you are trying to import already exists.",
    isMessageHTML: true,
    showCancelButton: true,
    actionButtons: [
        {
            text: "Try again",
            type: "primary",
            action: () => { 
                console.log("Import user again");
            }
        },
        {
            text: "Continue without importing",
            type: "primary",
            action: () => { 
                console.log("Continue importing without this user");
            }
        }
    ],
}, (err, data) => {
    if(err) console.error(err);

    if(data && data.text == "Cancel") {
        console.log("Cancel clicked")
    }
})
```

#### `toast(options, callback)`: 
Toast can be used to deliver a short simple message to user such as "Saved" or "Edited", or just to indicate that some accion was or was not successfull without asking for additional feedback
  * `options`: object
    * `message`: string
    * `duration`: number (optional) - Toast duration in milliseconds, by default 8000
    * `type`: string (optional) - Toast type, changes background color to one of the following `default`, `primary`, `success`, `info`, `warning`, `danger`, by default 'info'
    * `hideDismissButton`: boolean (optional) - by default false
    * `actionButton`: object (optional) - adds a button on right side of toast
      * `text`: string - button text
      * `action`: function - action to be taken when button is clicked
  * `callback(err, data)` - data indicates action button if clicked

#### Examples
> Minimal Example
```javascript
buildfire.dialog.toast({
    message: "Importing users... "
})
```

> Custom Color
```javascript
buildfire.dialog.toast({
    message: "Successfully imported users",
    type: "success"
})
```

> Action Button Example
```javascript
buildfire.dialog.toast({
    message: "User import failed",
    type: "danger",
    actionButton: {
        text: "Try again",
        action: () => { 
            console.log("Import user again") 
        }
    }
})
```

#### Notes
* If isMessageHTML is true, message content will be tested for cross site scripting and data will be sanitized.