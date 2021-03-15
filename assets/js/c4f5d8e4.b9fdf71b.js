(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{94:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return p}));var a=l(3),n=l(0),i=l.n(n),r=l(105),o=l(110),c=l(107),s=l(16),u=l(114),m=l(95),d=l.n(m);const h=[{title:"Video Tutorials",imageUrl:"img/video_tutorial.jpeg",description:i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{href:"https://www.youtube.com/playlist?list=PLnq_waykAGlgsERwxHmGNokE6WIeVeH0I"},"Here")," is a playlist on how to develop on the plugins using buildfire.js")},{title:"Dev Environment",imageUrl:"img/undraw_docusaurus_tree.svg",description:i.a.createElement(i.a.Fragment,null,"If you havent setup your environment just yet click",i.a.createElement("a",{href:"https://github.com/BuildFire/sdk/wiki/How-to-setup-your-development-environment"},"here")," to get started")},{title:"iOS & Android Guidelines",imageUrl:"img/phoneicon.png",description:i.a.createElement(i.a.Fragment,null,"See ",i.a.createElement("a",{href:"https://github.com/BuildFire/sdk/wiki/iOS-&-Android-Guidelines"},"https://github.com/BuildFire/sdk/wiki/iOS-&-Android-Guidelines"))}];function g({imageUrl:e,title:t,description:l}){const a=Object(u.a)(e);return i.a.createElement("div",{className:Object(r.a)("col col--4",d.a.feature)},a&&i.a.createElement("div",{className:"text--center"},i.a.createElement("img",{style:{height:"200px"},className:d.a.featureImage,src:a,alt:t})),i.a.createElement("h3",null,t),i.a.createElement("p",null,l))}function p(){const e=Object(s.default)(),{siteConfig:t={}}=e;return i.a.createElement(o.a,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />"},i.a.createElement("header",{className:Object(r.a)("hero hero--primary",d.a.heroBanner)},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"hero__title"},t.title),i.a.createElement("p",{className:"hero__subtitle"},t.tagline),i.a.createElement("div",{className:d.a.buttons},i.a.createElement(c.a,{className:Object(r.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(u.a)("docs/")},"Get Started")))),i.a.createElement("main",null,h&&h.length>0&&i.a.createElement("section",{className:d.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},h.map(((e,t)=>i.a.createElement(g,Object(a.a)({key:t},e)))))))),i.a.createElement("div",{style:{paddingLeft:"200px"}},i.a.createElement("h2",{id:"plugins"},"Plugins"),i.a.createElement("p",null,"Plugins are written in HTML and JavaScript with a few restrictions:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Plugin files must be written within the ",i.a.createElement("strong",null,"required folder structure"),", so that the system can identify and import it correctly"),i.a.createElement("li",null,"Plugin HTML files must be styled with ",i.a.createElement("strong",null,"bootstrap")," (",i.a.createElement("a",{href:"http://getbootstrap.com"},"http://getbootstrap.com"),") so that your pages will be styled with theme that the app owner has chosen"),i.a.createElement("li",null,"Plugin HTML files must import ",i.a.createElement("strong",null,"buildfire.js in the header")," of the document in order to access the platform, context and device")),i.a.createElement("h3",{id:"plugin-structure"},"Plugin Structure"),i.a.createElement("p",null,i.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/pluginserver/docResources/structure.png?q=7",alt:"file system"})),i.a.createElement("p",null,"Plugins consists of three major components:"),i.a.createElement("ul",null,i.a.createElement("li",null,"the Config (plugin.json)"),i.a.createElement("li",null,"the Control",i.a.createElement("ul",null,i.a.createElement("li",null,"Context"),i.a.createElement("li",null,"Design"),i.a.createElement("li",null,"Settings"))),i.a.createElement("li",null,"the Widget"),i.a.createElement("li",null,i.a.createElement("strong",null,"The Resources")," ",i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Note")," :This folder is only meant for plugin configuration resource like default widget icon, widget hero image and media files.",i.a.createElement("strong",null," You can replace those two files if you need by overriding the default hero image and default icon image and "),"you can add extra images to showcase you plugin in the control panel market place and attract new users by filling the images paths and types in the ",i.a.createElement("code",null,"media")," property in  ",i.a.createElement("code",null,"plugin.json"),"**.")))),i.a.createElement("h4",{id:"the-config-plugin-json-"},"the Config (plugin.json)"),i.a.createElement("p",null,"The configuration of each plugin is placed in a file on the root of the plugin called ",i.a.createElement("strong",null,"plugin.json"),". This JSON file consists of all the settings the plugin requires"),i.a.createElement("h4",{id:"the-control-folder-"},"the Control (folder)"),i.a.createElement("p",null,"The Control is the part of the code that is added to the App Control Panel to help configure your plugin the control has 3 sections/",i.a.createElement("strong",null,"sub folder")," ",i.a.createElement("em",null,"each of which have their own index.html start page"),":"),i.a.createElement("ul",null,i.a.createElement("li",null,"content"),i.a.createElement("li",null,"design"),i.a.createElement("li",null,"settings")),i.a.createElement("h4",{id:"the-widget-folder-"},"the Widget (folder)"),i.a.createElement("p",null,"The Widget is the part that is rendered on the device. It consumes the configuration made from the control and displays the output."),i.a.createElement("p",null,i.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/pluginserver/docResources/Control+Panel.png?v=1",alt:"Control Panel"})),i.a.createElement("h4",{id:"the-resources-folder-"},"the Resources (folder)"),i.a.createElement("p",null,"The Resources is the default images which will be used for your widget ."),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("p",null,"image.png : this image file will be used as a default image for your widget which will appear when App Owners installed your plugin in their plugin Manager .")),i.a.createElement("li",null,i.a.createElement("p",null,"icon.png : this image file will be used as a default icon for your widget which will appear as an icon for the widget on the emulator and the actual device .")),i.a.createElement("li",null,i.a.createElement("p",null,i.a.createElement("strong",null,"Note")," :This folder is only meant for plugin configuration resource like default widget icon, widget hero image and media files.",i.a.createElement("strong",null," You can replace those two files if you need by overriding the default hero image and default icon image and "),"you can add extra images to showcase you plugin in the control panel market place and attract new users by filling the images paths and types in the ",i.a.createElement("code",null,"media")," property in  ",i.a.createElement("code",null,"plugin.json"),"**."))),i.a.createElement("p",null,i.a.createElement("a",{href:"https://www.youtube.com/watch?v=4qh4S-BwLJM&list=PLnq_waykAGlgsERwxHmGNokE6WIeVeH0I&index=2"},"Video Tutorial Here")),i.a.createElement("h3",{id:"for-full-documentation-on-how-to-develop-a-plugin-click-here-to-see-the-wiki-https-github-com-buildfire-sdk-wiki-"},"for full documentation on how to develop a plugin ",i.a.createElement("a",{href:"https://github.com/BuildFire/sdk/wiki"},"click here to see the wiki"))))}}}]);