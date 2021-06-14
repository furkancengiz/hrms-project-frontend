
import { Link } from 'react-router-dom'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
export default function SideBar() {
    return (
        <div>
            <Menu icon='labeled' vertical>
                <Menu.Item name='gamepad' as={Link} to={"/"} >
                    <Icon name='search' color="green" />
                    İş Bul
                </Menu.Item>

                <Menu.Item name='video camera' as={Link} to={"/employer"} >




                    <Icon name='building outline' color="green"/>
                    Şirketler
                </Menu.Item>



                <Menu.Item name='video play' as={Link} to={"/candidate"}>
                    <Icon name='id badge outline'color="green" />
                    İş Arayanlar
                </Menu.Item>
            </Menu>
        </div>

    )
}
