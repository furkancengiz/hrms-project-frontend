import React from  'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>


           <Menu.Item>


               
               <Image avatar spaced="right" src="https://www.linkpicture.com/q/WhatsApp-Image-2020-10-17-at-16.51.15.jpeg"/>
               <Dropdown  pointing="top left"  text="Furkan">
                   <Dropdown.Menu>
                       <Dropdown.Item  text="Bilgilerim  " icon="info"/>
                       <Dropdown.Item onClick={signOut} text="Çıkış Yap " icon="sign-out"/>
                   </Dropdown.Menu>
               </Dropdown>
               </Menu.Item> 


        </div>
    )
}
