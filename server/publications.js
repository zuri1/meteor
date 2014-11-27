Meteor.publish('posts', function() {
	return Posts.find()
});

//comment Cf. p257, JavaScript & JQuery