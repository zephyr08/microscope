var postsData = [
	{
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/introducing-telescope'
	},
	{
		title: 'Meteor',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor book',
		url: 'http://themeteorbook.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});