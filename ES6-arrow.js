const event = {
    eve: "Birthday party",
    guestl: ['saket','xyzzz','shshs'],
    guest(){
        console.log("Guest list for " + this.eve)

        this.guestl.forEach((attend)=> {
            console.log('Guest for ' + this.eve + ' are ' + attend)
        })
    }

}
event.guest();
