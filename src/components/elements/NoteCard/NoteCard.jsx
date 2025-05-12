import React from 'react'
import './NoteCard.scss'
import cutText from '../../../functions/cutText'

const NoteCard = ({data}) => {
  return (
    <div className="NoteCard">
        <div className="NoteCard-song"></div>
            <div className="NoteCard-name">{cutText(data.song.name, 10)}</div>
            <div className="NoteCard-artist">{cutText(data.song.artist, 10)}</div>
            <div>{cutText(data.description,25)}</div>
    </div>
  )
}

export default NoteCard