const should = require("should");
const request = require("request");
const expect = require("chai").expect;
const baseUrl = "https://lux-appond14:8090/prosrm/api/forecastdata";
const util = require("util");

describe('002-test', function() {
    it('Verify post request', function(done) {
		//this.timeout(180000);
        request.post(
            {
                headers: {'content-type' : 'application/json'},
                url:     baseUrl,
                body:    "{'requestFields':{'filters':{'ONL_ORGN':['SYD'],'ONL_DSTN':['ADL']},'forecastType':'traditional'}}",
				rejectUnauthorized: false,
				//requestCert: true
				//agent: false
            },  
            function(error, response, body){
                console.log(" ********** body **********");
				console.log(body);
				console.log(" ********** Error **********");
				console.log(error);
                done();
            }
        );
    });
});
