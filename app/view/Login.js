Ext.define('DCapp.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginpanel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password'
    ],

    fullscreen: true,

    config: {
        title: 'Login',
        url: 'login.php',
        styleHtmlContent: true,
        cls: 'login',
        scrollable: {
            direction: 'vertical'
        },


        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'username',
                        label: 'Utilizator'
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'password',
                        label: 'Parola'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Autentificare',
                ui: 'action',
                style: {'margin' : 'auto'},
                action: 'login'
            }
        ]
    }
});
