"use client"

import { useEffect } from "react"

export default function Article() {
    useEffect(() => {
        const getArticle = async () => {
            const result = await fetch("/api/v1/article", { method: 'GET', headers: { 'Content-Type': 'application/json' }})
            console.log(result)
        }
        getArticle()
    }, []);
} 