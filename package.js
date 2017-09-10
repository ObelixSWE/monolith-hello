/*
*  Name : package.js
*  Author: Nicolò Rigato
*  Creation Date: 2017-07-24
*  Description: package
*/



Package.describe({
	name: 'monolith-hellobubble',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});
/*
Npm.depends({
  'packaged-app-reactjs':'0.1.3'
})*/

Package.onUse(function(api) {
	api.versionsFrom('1.4.4.2');
	api.use([
		'ecmascript',
		'monolith-sdk'
	]);
	api.mainModule('client/main.js', 'client');
	api.mainModule('server/main.js', 'server');


	api.addFiles([
		'lib/HelloBubbleConfig.jsx',
		'lib/HelloBubbleCreationButton.jsx',
		'lib/HelloBubble.jsx',
		'lib/HelloCreator.jsx'
	], 'client');
	api.addFiles(['lib/HelloCheck.js', 'lib/HelloDb.js'], 'server') ;
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');

});

Npm.depends({
	'react':'15.6.1',
	'react-dom':'15.6.1',
	'bluebird':'3.5.0',
	'simpl-schema':'0.3.2',
	'react-addons-pure-render-mixin':'15.6.0'
});
