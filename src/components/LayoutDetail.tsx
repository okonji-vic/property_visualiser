"use client"

import type React from "react"
import { Button } from "@fluentui/react-components"
import type { Layout } from "../data/propertyData"
import styles from "../styles/Property.module.css"

interface LayoutDetailProps {
  layout: Layout
  onBack: () => void
}

const LayoutDetail: React.FC<LayoutDetailProps> = ({ layout, onBack }) => {
  return (
    <div className={styles.container}>
      <Button appearance="outline" onClick={onBack} className={styles.backButton}>
        Back to Layouts
      </Button>
      <h2 className={styles.heading}>Layout Details</h2>
      <div className={styles.detailGrid}>
        <img src={layout.img || "/placeholder.svg"} alt="Large Layout" className={styles.largeImage} />
        <div className={styles.detailText}>
          <p>
            <strong>Area:</strong> {layout.area}
          </p>
          <p>
            <strong>Type:</strong> {layout.type}
          </p>
          <p>
            <strong>Rooms:</strong> {layout.rooms}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LayoutDetail
