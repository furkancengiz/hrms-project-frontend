import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>

            
                <Button.Group>
                    <Button inverted color='green' onClick={signIn}>GİRİŞ YAP</Button>
                    <Button.Or text="or"/>
                    <Button color='green'>KAYIT OL</Button>

                    
                </Button.Group>
            




        </div>
    )
}
