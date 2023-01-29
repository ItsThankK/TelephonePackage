class Telephone {
    constructor() {
        this.telephoneNumber = undefined
        this.contactsList = new Set()
        this.observersList = []
    }
    AddPhoneNumber(telephoneNumber){
        this.telephoneNumber = telephoneNumber
        this.contactsList.add(this.telephoneNumber)
        if( this.contactsList.has(telephoneNumber) &&  this.contactsList.has(telephoneNumber) !== null ){
                if(this.observersList.length >= 1){
                this.observersList.forEach( observer => {
                    // Notify observers the number(s) that have been added
                    observer.messageOne = `Tele-Phone Number: ${telephoneNumber}`
                    if(observer.messageOne) return
                })
            }
         }
        console.log( this.contactsList,"\n");
    }

    RemovePhoneNumber(telephoneNumber){
          this.contactsList.delete(telephoneNumber)
         if(! this.contactsList.has(telephoneNumber)){
               console.log(`${telephoneNumber} have been deleted!\n`);
               
         }
    }

    DialPhoneNumber(telephoneNumber) {
        if( this.contactsList.has(telephoneNumber)){
            if(this.observersList.length >= 1){
                this.observersList.forEach( observer => {
                     // Notify observers the number that is being dialled
                    observer.messageTwo = `Now dialing ${telephoneNumber}`
                    if(observer.messageTwo) return
                })
            }
         }else {
            console.log(`${telephoneNumber} is not in this contact list! Thus, it cannot be dialled\n`);
        }
 }
 // A simple logic to add observers to the observer list
    AddObserver(observer) {
        this.observersList.push(observer)
        if(this.observersList.includes(observer)){
            console.log('A new observer have been added!\n');
        }
       
    }
}

class Observer {
constructor(){
this.messageOne = ''
this.messageTwo = ""
}
}

module.exports = { Observer, Telephone }