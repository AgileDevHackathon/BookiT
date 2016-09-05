// Public routes
FlowRouter.route('/', {
    action: function(){
        BlazeLayout.render('main', {content: 'public_home'})
    },
});
FlowRouter.route('/login', {
	action: function() {
		BlazeLayout.render('main', {content: 'public_login'})
	},
});
FlowRouter.route('/search_business', {
	action: function() {
		BlazeLayout.render('main', {content: 'public_search_business'})
	},
});
FlowRouter.route('/signup', {
	action: function() {
		BlazeLayout.render('main', {content: 'public_signup'})
	},
});

// User routes
FlowRouter.route('/user/profile', {
	action: function() {
		BlazeLayout.render('main', {content: 'user_profile'})
	},
});
FlowRouter.route('/user/select_business', {
	action: function() {
		BlazeLayout.render('main', {content: 'user_select_business'})
	},
});

// Business routes
FlowRouter.route('/business/dashboard', {
	action: function() {
		BlazeLayout.render('main', {content: 'business_dashboard'})
	},
});