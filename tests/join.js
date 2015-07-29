var join = require("../src/join");


describe('Joins', function() {
  describe('#join()', function () {
    it('should join dummy data', function () {

    	var source1 = [
		  {
		    "A":1,
		    "D":20
		  },
		  {
		    "A":2,
		    "D":10
		  },
		  {
		    "A":3,
		    "D":3
		  },
		  {
		    "A":4,
		    "D":12
		  }
		];
		var source2 = [
		  {
		    "A":1,
		    "B":"asd",
		    "C":"apple"
		  },
		  {
		    "A":2,
		    "B":"zxc",
		    "C":"orange"
		  },
		  {
		    "A":3,
		    "B":"qwe",
		    "C":"banana"
		  },
		  {
		    "A":4,
		    "B":"dfg",
		    "C":"mango"
		  }
		];
		var joined = join([source1, source2], ["A"]);

		var truth = [
			{
			  "A":"1",
			  "B":"asd",
			  "C":"apple",
			  "D":"20"
			},
			{
			  "A":"2",
			  "B":"zxc",
			  "C":"orange",
			  "D":"10"
			},
			{
			  "A":"3",
			  "B":"qwe",
			  "C":"banana",
			  "D":"3"
			},
			{
			  "A":"4",
			  "B":"dfg",
			  "C":"mango",
			  "D":"12"
			}
		];
		console.log(joined)
    });
  });
});