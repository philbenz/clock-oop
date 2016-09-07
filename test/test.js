var Clock = require('../src/clock.js');

var chai = require('chai');
var expect = chai.expect;

describe('getTime()', function() {
  it('should be set to 00:00:00', function() {
    var clock = new Clock();
    expect(clock.hours).to.equal(0);
    expect(clock.minutes).to.equal(0);
    expect(clock.seconds).to.equal(0);
})
});

describe('getHours()', function() {
  it('should be set to 16', function() {

    var clock2 = new Clock({ hours: 16, minutes: 30, seconds: 20, meridian: '', MilitaryFormat: true })

    expect(clock2.getHours()).to.equal(16);
  })
});

describe('getMinutes()', function() {
  it('should be set to 30', function() {

    var clock2 = new Clock({ hours: 16, minutes: 30, seconds: 20 })

    expect(clock2.getMinutes()).to.equal(30);
  })
});

describe('getSeconds()', function() {
  it('should be set to 20', function() {

    var clock2 = new Clock({ hours: 16, minutes: 30, seconds: 20 })

    expect(clock2.getSeconds()).to.equal(20);
  })
});

describe('setHours()', function() {
  it('for null clock should be set to 0', function() {

    var clock3 = new Clock({ hours: 16, minutes: 30, seconds: 20 });

    expect(clock3.setHours(0)).to.equal(0);
  })
});

describe('setMinutes()', function() {
  it(' for null clock should be set to 30', function() {
    var clock3 = new Clock();
    expect(clock3.setMinutes(30)).to.equal(30);
  })
});

describe('setSeconds()', function() {
  it(' for null clock should be set to 15', function() {

    var clock3 = new Clock();

    expect(clock3.setSeconds(15)).to.equal(15);
  })
});

describe('getFormat()', function() {
  it('for Military clock should be set to TRUE', function() {
    var clock4 = new Clock({hours: 9, minutes: 30, seconds: 15 , MilitaryFormat: true});

    expect(clock4.getFormat()).to.equal(true);
  })
});

describe('getFormat()', function() {
  it('for 12 hour clock should be set to FALSE', function() {
    var clock5 = new Clock({hours: 01, minutes: 35, seconds: 22 , MilitaryFormat: false});

    expect(clock5.getFormat()).to.equal(false);
  })
});

describe('toggleFormat()', function() {
  it('should be set to TRUE', function() {
    var clock5 = new Clock({hours: 01, minutes: 35, seconds: 22 , MilitaryFormat: false});

    expect(clock5.toggleFormat()).to.equal(true);
  })
});

describe('toggleFormat()', function() {
  it('should be set to TRUE', function() {
    var clock4 = new Clock({hours: 9, minutes: 30, seconds: 15 , MilitaryFormat: true});

    expect(clock4.toggleFormat()).to.equal(false);
  })
});

describe('toggleFormat()', function() {
  it('should be set to FALSE', function() {
    var clock4 = new Clock({hours: 9, minutes: 30, seconds: 15 , MilitaryFormat: false});

    expect(clock4.toggleFormat()).to.equal(true);
  })
});

//~~~~~~~~~ GET TIME ~~~~~~~~~
//Military Time
describe('getTime()', function() {
  it('should show time as 09:30:15', function() {
    var clock4 = new Clock({hours: 9, minutes: 30, seconds: 15 , MilitaryFormat: true});

    expect(clock4.getTime()).to.equal('09:30:15');
  })
});

describe('getTime()', function() {
  it('should show time as 07:08:09', function() {
    var clock6 = new Clock({hours: 7, minutes: 8, seconds: 9 , MilitaryFormat: true});

    expect(clock6.getTime()).to.equal('07:08:09');
  })
});


//12 Hour time -
describe('getTime()', function() {
  it('should show time as 01:35:22', function() {
    var clock5 = new Clock({hours: 01, minutes: 35, seconds: 22 , MilitaryFormat: false});

    expect(clock5.getTime()).to.equal('01:35:22');
  })
});


//~~~~~~~~~ checking TICK ~~~~~~~~~~

clock7 = new Clock({hours: 11, minutes: 58, seconds: 59 , MilitaryFormat: true});


clock8 = new Clock({hours: 10, minutes: 59, seconds: 59 , MilitaryFormat: true});

describe('tick()', function() {
  it('should set seconds to 16', function() {

    var clock4 = new Clock({hours: 9, minutes: 30, seconds: 15 , MilitaryFormat: true});

    clock4.tick();

    expect(clock4.getSeconds()).to.equal(16);
  })
});

describe('tick()', function() {
  it('should set time to 11:59:00', function() {
    expect(clock7.tick()).to.equal('11:59:00');
  })
});

describe('tick()', function() {
  it('should set minutes to 11:00:00', function() {
    expect(clock8.tick()).to.equal('11:00:00');
  })
});

//~~~~~~~~~ Invalid Requests ~~~~~~~~~~

//null test in hours,
var clockMilitaryNullHours = new Clock({ hours: '', minutes: 58, seconds: 59 });

describe('getTime()', function() {
  it('military null hours should show time as 00:58:59', function() {
    expect(clockMilitaryNullHours.getTime()).to.equal('00:58:59');
  })
});

var clock12HourNullHours = new Clock({ hours: '', minutes: 59, seconds: 59 });

describe('getTime()', function() {
  it('null hours should show time as 00:59:59', function() {
    expect(clock12HourNullHours.getTime()).to.equal('00:59:59');
  })
});

//null test in minutes
var clockNullMinutes = new Clock({ hours: 23, minutes: '', seconds: 59, meridian: '', MilitaryFormat: true });

describe('getTime()', function() {
  it('null minutes should show time as 23:00:59', function() {
    expect(clockNullMinutes.getTime()).to.equal('23:00:59');
  })
});

//null test in seconds
var clockNullSeconds = new Clock({ hours: 23, minutes: 58, seconds: '', meridian: '', MilitaryFormat: true });

describe('getTime()', function() {
  it('null seconds should show time as 23:58:00', function() {
    expect(clockNullSeconds.getTime()).to.equal('23:58:00');
  })
});

//negative test for hours

var clockNegative = new Clock();

describe('setHours', function() {
  it('negative hours sent should return 0', function() {

    expect(clockNegative.setHours(-23)).to.equal(0);
  })
});

var clockNull = new Clock();
describe('setHours', function() {
  it('null hours sent should return 0', function() {
    expect(clockNull.setHours('')).to.equal(0);
  })
});



describe('getTime()', function() {
  it('negative hours should show time as 00:58:59', function() {

    var clockNegativeHours = new Clock({ hours: -23, minutes: 58, seconds: 59, MilitaryFormat: true });

    expect(clockNegativeHours.getTime()).to.equal('00:58:59');
  })
});

//negative test for minutes
var clockNegativeMinutes = new Clock({ hours: 23, minutes: -58, seconds: 59, MilitaryFormat: true });

describe('getTime()', function() {
  it('negative minutes should show time as 23:00:59', function() {
    expect(clockNegativeMinutes.getTime()).to.equal('23:00:59');
  })
});

//negative test for seconds
var clockNegativeSeconds = new Clock({ hours: 23, minutes: 58, seconds: -59, MilitaryFormat: true });

describe('getTime()', function() {
  it('negative seconds should show time as 23:58:00', function() {
    expect(clockNegativeSeconds.getTime()).to.equal('23:58:00');
  })
});

//high test for hours military
var clockMilitaryHighHours = new Clock({ hours: 40, minutes: 58, seconds: 59, MilitaryFormat: true });

describe('getTime()', function() {
  it('high hour for Military clock should show time as 00:58:59', function() {
    expect(clockMilitaryHighHours.getTime()).to.equal('00:58:59');
  })
});



describe('getTime()', function() {
  it('high values for 12 hour clock should show time as 12:58:59', function() {
    //hight test for 12 hour clock
    var clock12HourHighHours = new Clock({ hours: 40, minutes: 58, seconds: 59, MilitaryFormat: false });
    
    expect(clock12HourHighHours.getTime()).to.equal('12:58:59');
  })
});

//hight test for minutes
var clockHighMinutes = new Clock({ hours: 12, minutes: 66, seconds: 59, MilitaryFormat: false });

describe('getTime()', function() {
  it('should show time as 12:00:59', function() {
    expect(clockHighMinutes.getTime()).to.equal('12:00:59');
  })
});

//high test for seconds
var clockHighSeconds = new Clock({ hours: 12, minutes: 58, seconds: 120, MilitaryFormat: false });

describe('getTime()', function() {
  it('should show time as 12:58:00', function() {
    expect(clockHighSeconds.getTime()).to.equal('12:58:00');
  })
});


//high test for setting only hours to military clock



//hight test for setting only hours to 12 hour clock


//hight test for setting only minutes only


//low test for setting only seconds only
