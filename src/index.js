import * as components from './components'

const config = {
    // Is this app active?
    //enabled: true,
  
    // App namespace
    ns: 'hw',
  
    // The name of this app
    name: 'HelloWorld',
  
    // Alternative title
    title: 'Hello World',
  
    // Icon to use to identify this app
    icon: 'money'
};

const testplugin = {
    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install(Vue, options) {
        if (!options.ModuleManager) console.log('Please provide a module manager!!')
        //options.ModuleManager.register(config)

        //options.rotues

        for (let key in components) {
            let _key = options.prefix ? options.prefix + key : key
            Vue.component(_key, components[key])
        }
        console.log("installing plugin")
    }
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    testplugin.install(window.Vue)
}

export default testplugin
export * from './components'
