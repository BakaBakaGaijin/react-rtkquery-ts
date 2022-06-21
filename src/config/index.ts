import React from "react"

const config = {
    dates: {
        full: 'YYYY-MM-DDTHH:mm:ss.000Z',
        z: 'YYYY-MM-DDTHH:mm:ssZ',
        def: 'YYYY-MM-DDTHH:mm:ss',
        classic: 'DD.MM.YYYY',
        nice: 'D MMMM, YYYY',
        time: 'HH:mm'
    }
}

export default Object.freeze( Object.assign( {}, config ) )
