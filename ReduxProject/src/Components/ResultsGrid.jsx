import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos, getVideos } from '../Api/mediaApi'
import { setError, setLoading, setQuery, setResults } from '../redux/features/SearchSlice'

const ResultsGrid = () => {

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
    let data


    useEffect(() => {
        const getData = async () => {
            if (activeTab === 'Photos') {
                data = await getPhotos(query)
                console.log(data);
            }
            if (activeTab === 'Videos') {
                data = await getVideos(query)
                console.log(data);
            }
        }
        getData()
    }, [query, activeTab])
    return (
        <div>

        </div>
    )
}

export default ResultsGrid
