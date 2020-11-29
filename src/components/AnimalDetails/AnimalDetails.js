import React from 'react'
import PropTypes from 'prop-types'
import './AnimalDetails.css'

function convertFood(food){
    switch(food){
        case 'insectos':
            return '🐜';
        case 'carnecita':
            return '🍖';
        case 'plantas':
        default:
            return '🌱';
    }
}

export default function AnimalDetails({diet, scientificName}){
    return(
        <div className="details">
            <h4>Detalles:</h4>
            <div>
            Nombre Científico: {scientificName}
            </div>
            <div>
                Dieta: {diet.map(food => convertFood(food)).join(' ')}
            </div>
        </div>
    )
}

AnimalDetails.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    scientificName: PropTypes.string.isRequired
}