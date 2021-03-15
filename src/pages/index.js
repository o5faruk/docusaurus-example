import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Video Tutorials',
    imageUrl: 'img/video_tutorial.jpeg',
    description: (
      <>
        <a href="https://www.youtube.com/playlist?list=PLnq_waykAGlgsERwxHmGNokE6WIeVeH0I">Here</a> is a playlist on how to develop on the plugins using buildfire.js
      </>
    ),
  },
  {
    title: 'Dev Environment',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        If you havent setup your environment just yet click
        <a href="https://github.com/BuildFire/sdk/wiki/How-to-setup-your-development-environment">here</a> to get started
      </>
    ),
  },
  {
    title: 'iOS & Android Guidelines',
    imageUrl: 'img/phoneicon.png',
    description: (
      <>
        See <a href="https://github.com/BuildFire/sdk/wiki/iOS-&-Android-Guidelines">https://github.com/BuildFire/sdk/wiki/iOS-&-Android-Guidelines</a>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img style={{ height: "200px" }} className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <div style={{paddingLeft: "200px"}}>
        <h2 id="plugins">Plugins</h2>
        <p>Plugins are written in HTML and JavaScript with a few restrictions:</p>
        <ul>
          <li>Plugin files must be written within the <strong>required folder structure</strong>, so that the system can identify and import it correctly</li>
          <li>Plugin HTML files must be styled with <strong>bootstrap</strong> (<a href="http://getbootstrap.com">http://getbootstrap.com</a>) so that your pages will be styled with theme that the app owner has chosen</li>
          <li>Plugin HTML files must import <strong>buildfire.js in the header</strong> of the document in order to access the platform, context and device</li>
        </ul>
        <h3 id="plugin-structure">Plugin Structure</h3>
        <p><img src="https://s3-us-west-2.amazonaws.com/pluginserver/docResources/structure.png?q=7" alt="file system" /></p>
        <p>Plugins consists of three major components:</p>
        <ul>
          <li>the Config (plugin.json)</li>
          <li>the Control<ul>
            <li>Context</li>
            <li>Design</li>
            <li>Settings</li>
          </ul>
          </li>
          <li>the Widget</li>
          <li><strong>The Resources</strong> <ul>
            <li><strong>Note</strong> :This folder is only meant for plugin configuration resource like default widget icon, widget hero image and media files.<strong> You can replace those two files if you need by overriding the default hero image and default icon image and </strong>you can add extra images to showcase you plugin in the control panel market place and attract new users by filling the images paths and types in the <code>media</code> property in  <code>plugin.json</code>**.</li>
          </ul>
          </li>
        </ul>
        <h4 id="the-config-plugin-json-">the Config (plugin.json)</h4>
        <p>The configuration of each plugin is placed in a file on the root of the plugin called <strong>plugin.json</strong>. This JSON file consists of all the settings the plugin requires</p>
        <h4 id="the-control-folder-">the Control (folder)</h4>
        <p>The Control is the part of the code that is added to the App Control Panel to help configure your plugin
the control has 3 sections/<strong>sub folder</strong> <em>each of which have their own index.html start page</em>:</p>
        <ul>
          <li>content</li>
          <li>design</li>
          <li>settings</li>
        </ul>
        <h4 id="the-widget-folder-">the Widget (folder)</h4>
        <p>The Widget is the part that is rendered on the device. It consumes the configuration made from the control and displays the output.</p>
        <p><img src="https://s3-us-west-2.amazonaws.com/pluginserver/docResources/Control+Panel.png?v=1" alt="Control Panel" /></p>
        <h4 id="the-resources-folder-">the Resources (folder)</h4>
        <p>The Resources is the default images which will be used for your widget .</p>
        <ul>
          <li><p>image.png : this image file will be used as a default image for your widget which will appear when App Owners installed your plugin in their plugin Manager .</p>
          </li>
          <li><p>icon.png : this image file will be used as a default icon for your widget which will appear as an icon for the widget on the emulator and the actual device .</p>
          </li>
          <li><p><strong>Note</strong> :This folder is only meant for plugin configuration resource like default widget icon, widget hero image and media files.<strong> You can replace those two files if you need by overriding the default hero image and default icon image and </strong>you can add extra images to showcase you plugin in the control panel market place and attract new users by filling the images paths and types in the <code>media</code> property in  <code>plugin.json</code>**.</p>
          </li>
        </ul>
        <p><a href="https://www.youtube.com/watch?v=4qh4S-BwLJM&amp;list=PLnq_waykAGlgsERwxHmGNokE6WIeVeH0I&amp;index=2">Video Tutorial Here</a></p>
        <h3 id="for-full-documentation-on-how-to-develop-a-plugin-click-here-to-see-the-wiki-https-github-com-buildfire-sdk-wiki-">for full documentation on how to develop a plugin <a href="https://github.com/BuildFire/sdk/wiki">click here to see the wiki</a></h3>

      </div>
    </Layout>
  );
}
