import React from 'react'
import Heading from '../../components/Heading/Heading'
import "./Dashboard.css"
import { Link } from 'react-router-dom'
import CategorieList from '../../components/CategorieList/CategorieList'

const Dashboard = () => {

    return (
        <div>
            <Heading title="Dashboard" />
            <div style={{ textAlign: 'center' }}>
                <Link to="/dashboard/editAll" className='btn'>Editer tous les posts</Link>
            </div>

            <CategorieList />




        </div>
    )
}

export default Dashboard