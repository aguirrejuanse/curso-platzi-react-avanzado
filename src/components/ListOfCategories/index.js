import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(!loading)
    fetch('https://petgram-server-aguirrejuanse.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(!loading)
      }, [])
  })

  return { categories, loading }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)

  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}