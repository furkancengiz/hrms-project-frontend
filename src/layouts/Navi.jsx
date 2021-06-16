import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Button, Container, Menu,Icon ,Image} from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
   const history= useHistory()
    function handleSignOut(params){
        setIsAuthenticated(false)
        history.push("/")
    }
    function handleSignIn(params){
        setIsAuthenticated(true)
    }
   
   
    return (
        <div>
            
            <Menu stackable color="green" fixed="top" >
                <Container>
                    <Menu.Item >
                       <Image src="https://www.linkpicture.com/q/Screenshot_30.png" size="mini" />

                    </Menu.Item>
                       
                    
                    <Menu.Item name='İş bul' as={Link} to={"/"}>
                    <Icon name='search' color="green" />
                        İş bul
        </Menu.Item>
                    <Menu.Item name='testimonials' as={Link} to={"/jobPositionsCreate"}>
                    <Icon name="edit" color="green"/> 
                        Cv Oluştur
        </Menu.Item>
        <Menu.Item  as={Link} to={"/jobPositionsCreate"}>
            <Icon name="clipboard outline" color="green"/> 
                        İlan Ekle
        </Menu.Item>
                    <Menu.Item position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} deger ="1"/> : <SignedOut signIn={handleSignIn} deger="1"/>}

                    </Menu.Item>
                </Container>
            </Menu>

        </div>
    )
}
