App.IndexCustomersView = Ember.View.extend({
    templateName:    'app/templates/customers/index',
    customersBinding: 'App.customersController',

    showDetail: function() {
        this.set('isShowDetail', true);

    }
});