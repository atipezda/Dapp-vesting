import React, {FC, useEffect, useState} from 'react';
import "./styles/Tile.css"

interface Props {

}

type props = Props;


const Tile: FC<props> = ({children}) => {
    return <div className="tile-container">{children}</div>
}

export default Tile;
