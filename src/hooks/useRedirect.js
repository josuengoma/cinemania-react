import React from 'react'
import { useNavigate } from 'react-router-dom'

export const useRedirect = () => {

    const navigate = useNavigate();

    return (id) => navigate(`/single/${id}`)

}

