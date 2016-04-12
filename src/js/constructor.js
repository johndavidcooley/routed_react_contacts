class Contact {
	constructor(firstName, lastName, email, mobile, band, location, image) {
		this.firstName = firstName,
		this.lastName = lastName,
		this.email = email,
		this.mobile = mobile,
		this.band = band,
		this.location = location,
		this.image = image
	};
};

var gingerSpice = new Contact('Ginger','Spice', 'geri@spice.world', '(404)-111-1111', 'Spice Girls', 'London, UK', '../images/ginger.jpg');
var babySpice = new Contact('Baby','Spice', 'emma@spice.world', '(404)-222-2222', 'Spice Girls', 'London, UK', '../images/baby.jpg');
var scarySpice = new Contact('Scary','Spice', 'melb@spice.world', '(404)-333-3333', 'Spice Girls', 'London, UK', '../images/scary.jpg');
var sportySpice = new Contact('Sporty','Spice', 'melc@spice.world', '(404)-444-4444', 'Spice Girls', 'London, UK', '../images/sporty.jpg');
var poshSpice = new Contact('Posh','Spice', 'victoria@spice.world', '(404)-555-5555', 'Spice Girls', 'Los Angeles, CA', '../images/posh.jpg');
var treyAnastasio = new Contact('Trey', 'Anastasio', 'trey@phish.com', '770-111-1111', 'Phish', 'Burlington, VT', '../images/trey.jpg');
var mikeGordon = new Contact('Mike', 'Gordon', 'mike@phish.com', '770-222-2222', 'Phish', 'Burlington, VT', '../images/mike.jpg');
var pageMcConnell = new Contact('Page', 'McConnell', 'page@phish.com', '770-333-3333', 'Phish', 'Burlington, VT', '../images/page.jpg');
var jonFishman = new Contact('Jon', 'Fishman', 'fish@phish.com', '770-444-4444', 'Phish', 'Burlington, VT', '../images/fish.jpg');
var jerryGarcia = new Contact('Jerry', 'Garcia', 'jerry@grateful.com', '415-111-1111', 'Grateful Dead', 'San Francisco, CA', '../images/jerry.jpg');
var bobWeir = new Contact('Bob', 'Weir', 'bob@grateful.com', '415-222-2222', 'Grateful Dead', 'San Francisco, CA', '../images/bob.jpg');
var philLesh = new Contact('Phil', 'Lesh', 'phil@grateful.com', '415-333-3333', 'Grateful Dead', 'San Francisco, CA', '../images/phil.jpg');
var brendanBayliss = new Contact('Brendan', 'Bayliss', 'bbayliss@um.com', '312-111-1111', 'Umphrey\'s McGee', 'South Bend, IN', '../images/brendan.jpg');
var jakeCinninger = new Contact('Jake', 'Cinninger', 'jcinninger@um.com', '312-222-2222', 'Umphrey\'s McGee', 'South Bend, IN', '../images/jake.jpg');
var daveMatthews = new Contact('Dave', 'Matthews', 'dave@dmb.com', '352-111-1111', 'Dave Matthews Band', 'Charlottesville, VA', '../images/davem.jpg');
var stefanLessard = new Contact('Stefan', 'Lessard', 'stefan@dmb.com', '352-222-2222', 'Dave Matthews Band', 'Charlottesville, VA', '../images/stefan.jpg');
var carterBeauford = new Contact('Carter', 'Beauford', 'carter@dmb.com', '352-333-3333', 'Dave Matthews Band', 'Charlottesville, VA', '../images/carter.jpg');
var boyTinsley = new Contact('Boyd', 'Tinsley', 'boyd@dmb.com', '352-444-4444', 'Dave Matthews Band', 'Charlottesville, VA', '../images/boyd.jpg');
var johnBell = new Contact('John', 'Bell', 'jb@wsp.com', '478-111-1111', 'Widespread Panic', 'Athens, GA', '../images/johnb.jpg');
var daveSchools = new Contact('Dave', 'Schools', 'jcinninger@wsp.com', '478-222-2222', 'Widespread Panic', 'Athens, GA', '../images/daves.jpg');

var contacts = [gingerSpice, babySpice, scarySpice, sportySpice, poshSpice, treyAnastasio,
mikeGordon, pageMcConnell, jonFishman, jerryGarcia, bobWeir, philLesh, brendanBayliss, jakeCinninger,
daveMatthews, stefanLessard, carterBeauford, boyTinsley, johnBell, daveSchools];

contacts.sort(
	function(a, b) {
		var lastNameA = a.lastName.toLowerCase();
		var lastNameB = b.lastName.toLowerCase();
		var firstNameA = a.firstName.toLowerCase();
		var firstNameB = b.firstName.toLowerCase();
		if (lastNameA < lastNameB) {
			return -1;
		} else if (lastNameA > lastNameB) {
			return 1;
		} else if (lastNameA === lastNameB) {
				if (firstNameA < firstNameB) {
					return -1;
				} else if (firstNameA > firstNameB) {
					return 1;
				} else {
					return 0;
				}
			}
		});

export default contacts;