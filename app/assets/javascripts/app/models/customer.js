/**
 * Created by Administrator on 2015/4/28.
 */
App.Customer  = Ember.Resource.extend({
    resourceUrl: '/customers',
    resourceName:       'customer',
    resourceProperties: ['id','CustomerID', 'CompanyName', 'ContactName', 'ContactTitle',
        'Address', 'City', 'Region', 'PostalCode', 'Country',
        'Phone', 'Fax']
});