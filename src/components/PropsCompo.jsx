import React from 'react'
import PropsChild from './PropsChild'

let person = [
    {
        name: "Ansar",
        desig: "Full Stack Developer",
        exp: "4"
    },
    {
        name: "Ravi",
        desig: "App Developer",
        exp: "10"
    },
    {
        name: "John Dev",
        desig: "UI UX Designer",
        exp: "15"
    },
]

function PropsCompo() {
    return (
        <>
            {/* <PropsChild name="Ansar" desig="Full Stack Developer" exp="4" />
    <PropsChild name="Ravi" desig="App Developer" exp="10" />
    <PropsChild name="John Dev" desig="UI UX Designer" exp="15" />   */}
            {
                person.map((item, i) =>
                    <div key={i}>
                        <PropsChild name={item.name} desig={item.desig} exp={item.exp} />
                    </div>
                )
            }

        </>
    )
}

export default PropsCompo