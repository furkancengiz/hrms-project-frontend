

import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
export default function SideBar() {
    return (
        <div>
            <Menu icon='labeled' vertical>
                <Menu.Item
                    name='gamepad'
                    
                >
                    <Icon name='gamepad' />
          MESLEKLER
        </Menu.Item>

                <Menu.Item
                    name='video camera'
                   
                >
                    <Icon name='video camera' />
          İŞ VERENLER
        </Menu.Item>

                <Menu.Item
                    name='video play'
                    
                >
                    <Icon name='video play' />
          İŞ ARAYANLAR
        </Menu.Item>
            </Menu>
        </div>
    )
}
