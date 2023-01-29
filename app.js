const { Observer, Telephone } = require('./telephonePackage')

// Creating the subject
const subject = new Telephone()

// Creating observers
const observerOne = new Observer()
const observerTwo = new Observer()

// Adding observers
subject.AddObserver(observerOne)
subject.AddObserver(observerTwo)

// Adding the telephone numbers 
subject.AddPhoneNumber("+2349038302013")
subject.AddPhoneNumber("+2348062262154")

// Dialing the telephone numbers 
subject.DialPhoneNumber("+2340011122339") // This number have never been added 
subject.DialPhoneNumber("+2349038302013") // This number have been added

// Printing the list of observers and what they have observed :)
console.log(subject.observersList)
