import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button, Container, Menu,Icon ,Image} from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
   
    function handleSignOut(params){
        setIsAuthenticated(false)
    }
    function handleSignIn(params){
        setIsAuthenticated(true)
    }
   
   
    return (
        <div>
            <Menu stackable color="green" fixed="top" >
                <Container>
                    <Menu.Item >
                       <Image src="https://www.linkpicture.com/q/career.png" size="tiny" />
 
                       

                       

                    </Menu.Item>
                       
                    
                    <Menu.Item name='İş bul' as={Link} to={"/"}>
                        İş bul
        </Menu.Item>
                    <Menu.Item name='testimonials'>
                        Cv Oluştur
        </Menu.Item>
                    <Menu.Item position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} deger ="1"/> : <SignedOut signIn={handleSignIn} deger="1"/>}

                    </Menu.Item>
                </Container>
            </Menu>

        </div>
    )
}
