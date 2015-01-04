Meteor.publish('posts', function() {
	return Posts.find()
});

Meteor.publish('comments', function() {
	return Comments.find();
});

//comment Cf. p257, JavaScript & JQuery