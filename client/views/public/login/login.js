Template.public_login.events({

	"click .loginOrText": function () {

		Router.go("/login");

	},

	"click .login": function (e, t) {
		let name = $('input[name="name"]').val()
		let email = $('input[name="email"]').val()
		let password = $('input[name="password"]').val()
		if(!email || !password || !name){
			sweetAlert("Login Error", "Please enter all fields", "error")
		} else {
			Accounts.createUser({
				email: email,
				password: password,
				profile: {
					name: name
				}
			}, function(e){
				if(e){
					sweetAlert("Login Error", e.reason, "error")
				} else {
					Router.go("/profile")
				}
			})
		}
	},

	"click .facebook": function(e, t){
		Meteor.loginWithFacebook({
			requestPermissions: ['user_friends', 'public_profile', 'email']
		}, function(err){
			if(err){
				sweetAlert("Login Error", err.reason, "error")
			} else {
				Router.go("/profile")
			}
		})
	},

	"click .google": function(e, t){
		Meteor.loginWithGoogle({}, function(err){
			if(err){
				sweetAlert("Login Error", err.reason, "error")
			} else {
				Router.go("/profile")
			}
		})
	}

});
