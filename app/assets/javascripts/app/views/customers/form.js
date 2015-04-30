App.FormCustomerView = Ember.View.extend({
    templateName: 'app/templates/customers/form',
    classNames: ['show-contact'],
    tagName: 'tr',
    showDetail: function() {
        this.get("parentView").showDetail();
    }

})