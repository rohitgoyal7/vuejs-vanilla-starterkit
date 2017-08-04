Vue.component('component',{
	template:'<p>Hi I am a {{ name }} component !!</p>',
	data: function(){
		return {
			name: 'child'
		}
	}
});

var one = new Vue({
	el: '#vue-instance-one',
	data: {
		name: '',
		day: 'Morning',
		link: 'http://www.google.com',
		linkTag: "<a href='http://www.google.com'>Google linkTag</a>",
		companies: [{name:'google',duration:'27 months'},{name:'facebook',duration:'6 months'},{name:'microsoft',duration:'2 months'}],
		status:'',
		age: 25,
		a:0,
		b:0
	},
	methods: {
		updateDay: function(event){
			this.day = event.target.value;
		},
		greetMessage: function(){
			return 'Good ' + this.day + ' ' + this.name;
		},
		result: function(val){
			this.status = val;
		},
		changeTitle: function(event){
			two.title = event.target.value;
		}
	},
	computed: {
		computedClasses: function(){
			return {
				block : true,
				'padding-bottom' : true,
				fail : this.status == 'fail',
				good : this.status == 'good',
				excellent : this.status == 'excellent'
			}
		},
		addAToAge : function(){
			console.log('addAToAge called');
			return this.a + this.age ;
		},
		addBToAge : function(){
			console.log('addBToAge called');
			return this.b + this.age ;
		}
	}
});

var two = new Vue({
	el: '#vue-instance-two',
	data: {
		title: 'This is a second vuejs instance.'
	},
	methods: {

	},
	computed: {
		
	}
});


