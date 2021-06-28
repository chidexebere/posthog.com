import React, { useEffect } from 'react'
import './style.scss'

interface WorkableWindow extends Window {
    whr_embed: (id: number, options: Record<string, string>) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    whr: (document: Document) => any
}

declare const window: WorkableWindow

export const WorkableSnippet = () => {
    useEffect(() => {
        if (window && window.whr) {
            window.whr(document).ready(function () {
                window.whr_embed(456332, { detail: 'titles', base: 'departments', zoom: 'country' })
            })
        }
    })
    return <div id="whr_embed_hook"></div>
}
