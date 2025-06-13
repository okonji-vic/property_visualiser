"use client"

import type React from "react"
import { Card, CardHeader, Button } from "@fluentui/react-components"
import { floors, floorsImages } from "../data/propertyData"
import styles from "../styles/Property.module.css"

interface FloorSelectorProps {
  tower: string
  onSelect: (floor: string) => void
  onBack: () => void
}

const FloorSelector: React.FC<FloorSelectorProps> = ({ tower, onSelect, onBack }) => {
  return (
    <div className={styles.container}>
      <Button appearance="outline" onClick={onBack} className={styles.backButton}>
        Back to Towers
      </Button>
      <h2 className={styles.heading}>Select a Floor in {tower}</h2>
      <div className={styles.grid5}>
        {floors.map((floor: string) => (
          <Card key={floor} onClick={() => onSelect(floor)} className={styles.floorCard}>
            <img src={floorsImages[tower][floor] || "/placeholder.svg"} alt={floor} className={styles.img} />
            <CardHeader className={styles.cardHeader}>
              <div className={styles.cardTitle}>{floor}</div>
            </CardHeader>
            <div className={styles.cardTitle}>{floor}</div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default FloorSelector
