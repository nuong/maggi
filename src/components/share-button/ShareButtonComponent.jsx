
import React from 'react';

export default class ShareButtonComponent extends React.PureComponent {
  state = {}

  initFbSdk = (options) => {
    if (typeof window !== "undefined") {
      return new Promise(resolve => {
        window.fbAsyncInit = function () {
          const defaults = {
            cookie: true, xfbml: true, autoLogAppEvents: true
          }
          options = { ...defaults, ...options }
          window.FB.init(options)
          resolve()
        };
        /* eslint-disable */
        (function (d, s, id) {
          const fjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) { return; }
          const js = d.createElement(s); js.id = id
          js.src = '//connect.facebook.net/en_US/sdk.js'
          fjs.parentNode.insertBefore(js, fjs)
        }(document, 'script', 'facebook-jssdk'))
        /* eslint-enable */
      })
    }
  }
  getFbSdk = (options) => {
    if (typeof window !== "undefined") {
      return new Promise(async resolve => {
        if (window.FB) {
          resolve(window.FB)
        } else {
          await this.initFbSdk(options)
          resolve(window.FB)
        }
      })
    }
  }
  async handleshare() {
    this.props.setInfo({
      title: 'Make your ballanced bowl tesst 111',
      des: 'Make your ballanced bowl - test des',
      pic: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.2081-6/c0.0.129.129a/p128x128/105355716_290046669011365_2583618676516322268_n.png?_nc_cat=102&_nc_sid=eaa83b&_nc_ohc=YOcA6uF9qiQAX8cTwtF&_nc_ht=scontent.fsgn2-5.fna&oh=f543b80b8b1d3198a5a18a7db7c78448&oe=5F287DE9'
    })
    if (typeof window !== "undefined") {
      const sdk = await this.getFbSdk({ appId: '290022452347120', version: 'v7.0' })
      sdk.ui({
        // method: 'share_open_graph',
        // action_type: 'og.shares',
        // action_properties: JSON.stringify({
        //   object: {
        //     'og:url': 'https://filamentstg.github.io/maggi/',
        //     'og:title': 'Make your ballanced bowl',
        //     'og:description': 'Make your ballanced bowl - test des',
        //     'og:image': 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.2081-6/c0.0.129.129a/p128x128/105355716_290046669011365_2583618676516322268_n.png?_nc_cat=102&_nc_sid=eaa83b&_nc_ohc=YOcA6uF9qiQAX8cTwtF&_nc_ht=scontent.fsgn2-5.fna&oh=f543b80b8b1d3198a5a18a7db7c78448&oe=5F287DE9'
        //   }
        // })
          method: `share`,
          // picture: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.2081-6/c0.0.129.129a/p128x128/105355716_290046669011365_2583618676516322268_n.png?_nc_cat=102&_nc_sid=eaa83b&_nc_ohc=YOcA6uF9qiQAX8cTwtF&_nc_ht=scontent.fsgn2-5.fna&oh=f543b80b8b1d3198a5a18a7db7c78448&oe=5F287DE9',
          // source: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.2081-6/c0.0.129.129a/p128x128/105355716_290046669011365_2583618676516322268_n.png?_nc_cat=102&_nc_sid=eaa83b&_nc_ohc=YOcA6uF9qiQAX8cTwtF&_nc_ht=scontent.fsgn2-5.fna&oh=f543b80b8b1d3198a5a18a7db7c78448&oe=5F287DE9',
          caption: 'MAggi',
          href: 'https://maggistaging.herokuapp.com/',
          description: 'Make your ballanced bowl'
        },
        function (response) {
          if (response) {
            alert('success');
          } else {
            alert('error');
          }
        })
      }
  }
  render() {
    return (
      <>
        <div className="share-button" data-href="https://maggistaging.herokuapp.com/" style={{padding: '20px'}}>
          {/* <span onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmaggistaging.herokuapp.com%2F&amp;src=sdkpreparse", "", "location=no")}>share</span> */}
          <span onClick={() => this.handleshare()}>share</span>
        </div>
      </>
    )
  }
}