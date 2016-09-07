function Clock (options) {
  if (options) {
    this.MilitaryFormat = options.MilitaryFormat;
    this.hours = this.setHours(options.hours);
    this.minutes = this.setMinutes(options.minutes);
    this.seonds = this.setSeconds(options.seconds);
    this.meridian = options.meridian;
  } else {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.MilitaryFormat = true; //false is 12 hour clock
  }
}

//~~~~~~~~~ GETTERS ~~~~~~~~~
Clock.prototype.getHours = function() {
  return this.hours;
}

Clock.prototype.getMinutes = function() {
  return this.minutes;
}

Clock.prototype.getSeconds = function() {
  return this.seconds;
}

//~~~~~~~~~~ GET FORMAT ~~~~~~~~~~~~
Clock.prototype.getFormat = function () {

  console.log('military format: ' + this.MilitaryFormat);
  if(this.MilitaryFormat) {
    return true;
  } else {
    return false;
  }

}

//~~~~~~~~~ SETTERS ~~~~~~~~~~
Clock.prototype.setHours = function(hour) {

  if(!hour) {
    this.hours = 0;
  } else {
    if(this.MilitaryFormat) {
      if((hour > -1) && (hour < 24)) {
        this.hours = hour;
      } else {
        this.hours = 0;
      }
    } else if (this.MilitaryFormat === false) {
      if((hour > -1) && (hour < 13)) {
          this.hours = hour;
      } else {
        this.hours = 12;
      }
    }
  }

  return this.hours;
}

Clock.prototype.setMinutes = function(minute) {
  if(!minute) {

    this.minutes = 0;
  } else {
    if((minute > -1) && (minute < 60)) {
      this.minutes = minute;
    } else {
      this.minutes = 0;
    }
  }


  return this.minutes;
}

Clock.prototype.setSeconds = function(seconds) {
  if(!seconds) {
    this.seconds = 0;
  } else {
   if ((seconds > -1) && (seconds < 60)) {
      this.seconds = seconds;
    } else {
      this.seconds = 0;
    }
  }
  return this.seconds;
}

//~~~~~~~~ TICK ~~~~~~~~~~
Clock.prototype.tick = function() {
  this.seconds += 1;

  if(this.seconds > 59) {
    this.minutes += 1;
    this.seconds = 0;

    if (this.minutes > 59) {
      this.hours += 1;
      this.minutes = 0;
    }

    if ((this.MilitaryFormat = 'true')&&(this.hours>23)) {
      this.hours = 0
    } else if ((this.MilitaryFormat = 'false') && (this.hours > 12)) {

    }
  }

  return this.getTime();
}

//~~~~~~~~ GET TIME ~~~~~~~~~

Clock.prototype.getTime = function() {
  if(this.hours < 10) {
    this.hours = this.hours.toString()
    this.hours = ("0" + this.hours.slice(-1));
  }
  if(this.minutes < 10) {
    //this.hours.lpad("0", 4)
    this.minutes = this.minutes.toString()
    this.minutes = ("0" + this.minutes.slice(-1));
  }
  if(this.seconds < 10) {
    //this.hours.lpad("0", 4)
    this.seconds = this.seconds.toString()
    this.seconds = ("0" + this.seconds.slice(-1));
  }
  return this.hours + ":" + this.minutes + ":" + this.seconds;
}


//~~~~~~~~~~ TOGGLE FORMAT ~~~~~~~~~~~~
Clock.prototype.toggleFormat = function () {

  //there is no meridian in military time.

  if(this.MilitaryFormat) {
    this.MilitaryFormat = false;
    // set hours to 12 hour clock now
    // if(this.meridian === 'PM') {
    //   this.hours -= 12;
    // }
  } else {
    this.MilitaryFormat = true;
  }
  return this.MilitaryFormat;
}

//~~~~~~~~~~ EXPORTS ~~~~~~~~~~~~

module.exports = Clock;
