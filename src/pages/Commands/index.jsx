import React, { useState, useEffect } from 'react'
import CommandTable from '../../components/CommandTable'

export default function Commands() {

    return (
        <div className="main">
            <h1 className="audiowide-regular">Commands</h1>
            <br />
            <CommandTable gamemodeName="Flying Scoutsman" />
            <br />
        </div>
    )
}