App.IndexCustomersView = Ember.View.extend({
    templateName:    'app/templates/customers/index',
    customersBinding: 'App.customersController',

    showDetail: function() {
        this.set('isShowDetail', true);
        var customer = this.get("customer");
        this.set('customer', customer);
        customer.findResource()
            .done( function() {
                this.transitionTo('show');
            });

    },
    hideDetail: function() {
        this.set('isShowDetail', false);


    }
});