"use client"

import type React from "react"
import { Card, CardHeader, CardPreview } from "@fluentui/react-components"
import { towers, towerImages } from "../data/propertyData"
import styles from "../styles/Property.module.css"

interface TowerSelectorProps {
  onSelect: (tower: string) => void
}

const TowerSelector: React.FC<TowerSelectorProps> = ({ onSelect }) => {
  return (
    <div className={styles.grid3}>
      {towers.map((tower) => (
        <Card key={tower} onClick={() => onSelect(tower)} className={styles.card}>
          <img src={towerImages[tower] || "/placeholder.svg"} alt={tower} />
          <CardHeader className={styles.cardHeader}>
            <CardPreview className={styles.cardPreview}>
              <img src={towerImages[tower] || "/placeholder.svg"} alt={tower} />
            </CardPreview>
            <div className={styles.cardTitle}>{tower}</div>
          </CardHeader>
          <div className={styles.cardDescription}>Click to select {tower}</div>
        </Card>
      ))}
    </div>
  )
}

export default TowerSelector
