import React, { useEffect } from 'react'
import { Card } from './components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCats } from '@/app/redux/catsSlice'

export const Cats = () => {

    const dispatch = useDispatch()
    const { cats, loading, error } = useSelector((state) => state.catsReducer)

    useEffect(() => {
        dispatch(fetchCats())
    }, [])

    if (loading) {
        return <p>Cargando gatos...</p>
    }

    if (error) {
        return <p>Error al cargar gatos...</p>
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {cats.map((cat, index) => (
                <Card cat={cat} key={index} />
            ))
            }
        </div>
    )
}