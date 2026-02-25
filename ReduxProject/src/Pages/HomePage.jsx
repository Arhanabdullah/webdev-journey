import React from 'react'
import SearchBar from '../Components/SearchBar'
import Tabs from '../Components/Tabs'
import ResultsGrid from '../Components/ResultsGrid'
import { useSelector } from 'react-redux'
import PageButton from '../Components/PageButton'

const HomePage = () => {
    const { query } = useSelector((store) => store.search)
    return (
        <div>
            <SearchBar />
            {query != '' ? 
            <div>
                <Tabs />
                <ResultsGrid />
                <PageButton />
            </div>
            : ''}

        </div>
    )
}

export default HomePage
