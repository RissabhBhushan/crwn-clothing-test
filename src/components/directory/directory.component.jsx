import React, { Component } from 'react';

import MenuItem from '../menu-items/menu-item.component';

import './directory.styles.scss';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
          sections: [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://www.freepnglogos.com/uploads/man-png/man-attitude-pro-9.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }
        ]
      }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                  this.state.sections.map(({ id, ...otherSectionMaps }) => {
                    return <MenuItem key={ id } { ...otherSectionMaps } />
                  })
                }
            </div>
        );
    }
}

export default Directory;