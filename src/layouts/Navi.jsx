import React from 'react'

import { Button, Container, Menu } from 'semantic-ui-react'


export default function Navi() {
    return (
        <div>

            <Menu stackable color="blue" fixed="top" >
                <Container>
                    <Menu.Item>
                        <img src='/logo.png' />
                    </Menu.Item>

                    <Menu.Item
                        name='features'

                    >
                        İŞ BUL
        </Menu.Item>

                    <Menu.Item
                        name='testimonials'

                    >
                        ŞİRKETLER
        </Menu.Item>

                    <Menu.Item position='right'>
                        <Button.Group>
                            <Button>KAYIT OL</Button>
                            <Button.Or />
                            <Button positive>GİRİŞ YAP</Button>
                        </Button.Group>
                    </Menu.Item>
                    
                   
                </Container>


            </Menu>
          
        </div>
    )
}
