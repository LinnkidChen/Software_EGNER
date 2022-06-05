let loginInfo = new Vue({
    el: '#loginBlock',
    data: {
        username: '',
        password: ''
    },
    methods: {
        signUp: function() {
            location.assign('signup.html')
        },
        signIn: function() {
            alert('sign in clicked');
        }
    }
});
