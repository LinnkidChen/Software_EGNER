let registerInfo = new Vue({
    el: '#loginBlock',
    data: {
        username: '',
        password: '',
        confirm: ''
    },
    methods: {
        registerAdmin: function () {
            alert('Register as admin');
        },
        registerCustomer: function () {
            alert('Register as customer');
        }
    }
});
