import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos, getVideos } from '../Api/mediaApi'
import { setError, setLoading, setQuery, setResults,setPage } from '../redux/features/SearchSlice'
import ResultsCard from './ResultsCard'

const ResultsGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error, page } = useSelector((store) => store.search)
    let data = [];
    

    useEffect(() => {
        if (!query) return
        const getData = async () => {
            try {
                dispatch(setLoading())
                if (activeTab === 'Photos') {
                    let response = await getPhotos(query, page)

                    data = response.map((item) => ({
                        id: item.id,
                        title: item.alt_description,
                        type: 'photo',
                        url: item.urls.full,
                        thumbnail: item.urls.thumb,
                        link: item.links.html
                    }))


                }
                if (activeTab === 'Videos') {
                    let response = await getVideos(query, page)

                    data = response.videos.map((item) => ({
                        id: item.user.id,
                        title: item.user.name,
                        type: 'video',
                        download_url: item.video_files[0].link,
                        link: item.url,
                        thumbnail: item.image
                    }))

                }
                dispatch(setResults(data))
            } catch (error) {
                dispatch(setError(err.message))
            }
        }
        getData()
    }, [query, activeTab, page])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>
    return (
        <>
        <div className='flex justify-between flex-wrap gap-4'>
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultsCard item={item} />
                </div>
            })}
        </div>
            

        </>
        
    )
}

export default ResultsGrid