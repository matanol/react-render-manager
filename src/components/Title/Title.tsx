import React from 'react'

export interface TitleProps {
   padding?: number
}

export const Title: React.FC<TitleProps> = ({ children, padding }) => (
   <h1 style={{ color: 'white', padding }}>{children}</h1>
)
