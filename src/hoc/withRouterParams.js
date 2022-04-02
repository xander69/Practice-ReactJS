import React from 'react'
import {useParams} from 'react-router-dom'

export const withRouterParams = (Component) => {
    return props => <Component {...props} params={useParams()}/>
}