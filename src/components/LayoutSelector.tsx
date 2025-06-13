"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardPreview, Button } from "@fluentui/react-components"
import { layouts, type Layout } from "../data/propertyData"
import styles from "../styles/Property.module.css"

interface LayoutSelectorProps {
  tower: string
  floor: string
  onSelect: (layout: Layout) => void
  onBack: () => void
}

const LayoutSelector: React.FC<LayoutSelectorProps> = ({ tower, floor, onSelect, onBack }) => {
  const filteredLayouts = layouts.filter((layout) => layout.tower === tower && layout.floor === floor)

  return (
    <div className={styles.container}>
      <Button appearance="outline" onClick={onBack} className={styles.backButton}>
        Back to Floors
      </Button>
      <h2 className={styles.heading}>
        Available Layouts on {tower} - {floor}
      </h2>
      <div className={styles.grid3}>
        {filteredLayouts.length > 0 ? (
          filteredLayouts.map((layout) => (
            <motion.div
              key={layout.id}
              whileHover={{ scale: 1.05 }}
              className={styles.layoutCard}
              onClick={() => onSelect(layout)}
            >
              <Card>
                <img src={layout.img || "/placeholder.svg"} alt="Layout Thumbnail" className={styles.thumbnail} />
                <CardHeader className={styles.cardHeader}>
                  <CardPreview className={styles.cardPreview}>
                    <img src={layout.img || "/placeholder.svg"} alt="Layout Thumbnail" className={styles.thumbnail} />
                  </CardPreview>
                  <div className={styles.cardTitle}>{layout.type}</div>
                </CardHeader>
                <div className={styles.cardDescription}>
                  <p>
                    <strong>Area:</strong> {layout.area}
                  </p>
                  <p>
                    <strong>Rooms:</strong> {layout.rooms}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))
        ) : (
          <p>No layouts available for this floor.</p>
        )}
      </div>
    </div>
  )
}

export default LayoutSelector
