import React from 'react'
import Card from './Card'

const SkillsList = () => {
    return (
        <div className='cardList' style={{textAlign:"center"}}>
            <Card name="HTML" stars="★★★★★" />
            <Card name="CSS" stars="★★★★★" />
            <Card name="Javascript" stars="★★★★★" />
            <Card name="MongoDB" stars="★★★★★" />
            <Card name="React" stars="★★★★★"/>
            <Card name="Express" stars="★★★★★"/>
            <Card name="NodeJS" stars="★★★★★" />
            <Card name="Angular" stars="★★"/>
            <Card name="Handlebars" stars="★★★★" />
            <Card name="Java" stars="★★★★" />
            <Card name="C++" stars="★★★★" />
            <Card name="C" stars="★★★" />
            <Card name="Unix" stars="★★★★" />
            <Card name="IBM i RPGLE" stars="★" />
            <Card name="IBM i CLLE" stars="★" />
            <Card name="" stars="★★★★" />
        </div>
    )
}

export default SkillsList
